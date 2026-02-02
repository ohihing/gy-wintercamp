// ===========================================
// 금촌교회 청년부 · 동계수련회 온라인 액팅북
// (정적 사이트 + localStorage 개인 저장)
// ===========================================

/**
 * ✅ 운영자가 수정하는 곳 (여기만 바꾸면 됨)
 * - title/badge/subtitle
 * - scheduleDays (타임테이블)
 * - sermon (텍스트)
 * - qaQuestions / qtPrompts
 * - praiseFiles (악보 이미지: 최대 20장 정도)
 */
const RETREAT_DATA = {
  storagePrefix: "gy-retreatbook-2026-winter", // 연도/수련회 바뀔 때 바꿔주면 이전 기록과 분리됨

  title: "동계수련회 온라인 액팅북",
  badge: "2026 동계수련회",
  subtitle: "안내와 개인 기록을 한 곳에 모아두었어요.\n각 페이지에서 자유롭게 작성해 주세요.",

  scheduleIntro: "타임테이블입니다. 상황에 따라 조정될 수 있어요.",

  scheduleDays: [
    {
      label: "첫째 날",
      items: [
        { time: "12:00", title: "교회 집합", desc: "예배실로 모여 주세요." },
        { time: "12:30", title: "이동", desc: "출발 및 안전 안내" },
        { time: "15:00", title: "오리엔테이션", desc: "일정/규칙/조 편성" },
        { time: "16:00", title: "집회 1", desc: "찬양 & 말씀" },
        { time: "18:00", title: "저녁", desc: "식사 및 휴식" },
        { time: "20:00", title: "기도회", desc: "찬양과 기도" },
        { time: "22:00", title: "나눔", desc: "조별 나눔 / 개인 기록" },
      ],
    },
    {
      label: "둘째 날",
      items: [
        { time: "07:30", title: "기상", desc: "" },
        { time: "08:00", title: "아침", desc: "" },
        { time: "09:00", title: "오전 QT", desc: "이 페이지의 QT 섹션을 활용해보세요." },
        { time: "10:30", title: "집회 2", desc: "찬양 & 말씀" },
        { time: "12:00", title: "정리/점심", desc: "" },
        { time: "13:30", title: "마무리", desc: "귀가" },
      ],
    },
  ],

  sermonTitle: "설교 제목(예시) · 온전하게 하시는 예수님을 보라",
  sermonBody: [
    "여기에 설교 핵심 내용을 넣어주세요.",
    "• 포인트 1: ...",
    "• 포인트 2: ...",
    "• 적용: ...",
  ],

  qaQuestions: [
    "오늘 말씀에서 마음에 남는 한 문장은?",
    "내 삶에서 지금 ‘믿음’이 필요한 영역은?",
    "내가 붙잡고 있던 ‘두려움/걱정’을 한 가지 내려놓는다면?",
    "이번 수련회에서 하나님께 바라는 것은?",
  ],

  qtPrompts: [
    { title: "1) 오늘 말씀/본문", hint: "본문을 적거나, 핵심 구절을 적어도 좋아요." },
    { title: "2) 느낀 점", hint: "내 마음에 어떤 울림이 있었나요?" },
    { title: "3) 적용(실천) 1가지", hint: "오늘/이번 주에 바로 할 수 있는 작은 실천" },
    { title: "4) 기도제목", hint: "기도제목 1~2가지" },
  ],

  // ✅ 악보 이미지 경로 (assets 폴더)
  // 이미지 업로드 후 아래 배열에 경로만 추가하면 자동으로 표시 + 전체화면 슬라이더 동작
  // 예: "assets/001.JPG", "assets/002.JPG" ...
  praiseFiles: [
  "assets/001.JPG",
  "assets/002.JPG",
  "assets/003.JPG",
  "assets/004.PNG",
  ],
};

// -------------------------------
// DOM
// -------------------------------
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const views = Array.from(document.querySelectorAll(".view"));

const sheet = document.getElementById("sheet");
const openMenuBtn = document.getElementById("openMenu");
const closeMenuBackdrop = document.getElementById("closeMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const topbar = document.querySelector(".js-topbar");

// home targets
const retreatTitle = document.getElementById("retreatTitle");
const retreatBadge = document.getElementById("retreatBadge");
const retreatSubtitle = document.getElementById("retreatSubtitle");

// schedule
const scheduleIntro = document.getElementById("scheduleIntro");
const scheduleDays = document.getElementById("scheduleDays");

// sermon
const sermonTitle = document.getElementById("sermonTitle");
const sermonBody = document.getElementById("sermonBody");

// qa / qt
const qaList = document.getElementById("qaList");
const qtList = document.getElementById("qtList");

// praise
const praiseFeed = document.getElementById("praiseFeed");
const praiseEmpty = document.getElementById("praiseEmpty");

// viewer
const viewer = document.getElementById("viewer");
const viewerRail = document.getElementById("viewerRail");
const viewerCounter = document.getElementById("viewerCounter");
const viewerCloseBg = document.getElementById("viewerCloseBg");
const viewerCloseBtn = document.getElementById("viewerCloseBtn");

// tools
const btnReset = document.getElementById("btnReset");
const btnExport = document.getElementById("btnExport");
const importFile = document.getElementById("importFile");

// -------------------------------
// Scroll Motion (Home banners)
// -------------------------------
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function initScrollMotion() {
  document.querySelectorAll(".scroll-item").forEach((el) => {
    el.classList.remove("is-visible");
    scrollObserver.observe(el);
  });
}

// -------------------------------
// Topbar effect
// -------------------------------
window.addEventListener("scroll", () => {
  if (!topbar) return;
  if (window.scrollY > 18) topbar.classList.add("is-scrolled");
  else topbar.classList.remove("is-scrolled");
});

// -------------------------------
// Sheet menu open/close
// -------------------------------
function openSheet() {
  sheet?.classList.add("is-open");
  sheet?.setAttribute("aria-hidden", "false");
}
function closeSheet() {
  sheet?.classList.remove("is-open");
  sheet?.setAttribute("aria-hidden", "true");
}

openMenuBtn?.addEventListener("click", openSheet);
closeMenuBackdrop?.addEventListener("click", closeSheet);
closeMenuBtn?.addEventListener("click", closeSheet);

// -------------------------------
// Router
// -------------------------------
function hashToViewName(hash) {
  const clean = (hash || "").replace("#", "").trim();
  return clean || "home";
}

function showView(name) {
  views.forEach((v) => {
    const match = v.getAttribute("data-view") === name;
    v.classList.toggle("is-active", match);
  });

  if (!prefersReduced) window.scrollTo({ top: 0, behavior: "smooth" });
  else window.scrollTo(0, 0);

  if (name === "home") setTimeout(initScrollMotion, 60);
}

function route() {
  const name = hashToViewName(location.hash);
  const exists = views.some((v) => v.getAttribute("data-view") === name);

  if (!exists) {
    location.hash = "#home";
    return;
  }

  showView(name);
  closeSheet();
}

document.querySelectorAll("[data-route]").forEach((a) => {
  a.addEventListener("click", () => {
    const href = a.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    location.hash = href;
  });
});

document.querySelectorAll("[data-back]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (history.length > 1) history.back();
    else location.hash = "#home";
  });
});

window.addEventListener("hashchange", route);

// -------------------------------
// localStorage helpers
// -------------------------------
function k(section, id) {
  return `${RETREAT_DATA.storagePrefix}:${section}:${id}`;
}
function loadText(section, id) {
  try { return localStorage.getItem(k(section, id)) || ""; }
  catch { return ""; }
}
function saveText(section, id, value) {
  try { localStorage.setItem(k(section, id), value); }
  catch {}
}
function nowStamp() {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return `${mm}/${dd} ${hh}:${mi}`;
}

// -------------------------------
// Render
// -------------------------------
function renderHome() {
  if (retreatTitle) retreatTitle.textContent = RETREAT_DATA.title || "동계수련회 안내";
  if (retreatBadge) retreatBadge.textContent = RETREAT_DATA.badge || "수련회";
  if (retreatSubtitle) retreatSubtitle.innerHTML =
    (RETREAT_DATA.subtitle || "").replaceAll("\n", "<br />");
}

function renderSchedule() {
  if (scheduleIntro) scheduleIntro.textContent = RETREAT_DATA.scheduleIntro || "";
  if (!scheduleDays) return;

  scheduleDays.innerHTML = "";
  (RETREAT_DATA.scheduleDays || []).forEach((day, idx) => {
    const details = document.createElement("details");
    details.className = "dayCard";
    if (idx === 0) details.open = true;

    const rows = (day.items || []).map((it) => `
      <div class="timeRow">
        <div class="time">${escapeHTML(it.time || "")}</div>
        <div>
          <p class="itemTitle">${escapeHTML(it.title || "")}</p>
          ${it.desc ? `<p class="itemDesc">${escapeHTML(it.desc)}</p>` : ""}
        </div>
      </div>
    `).join("");

    details.innerHTML = `
      <summary>${escapeHTML(day.label || `Day ${idx + 1}`)}</summary>
      <div class="timeTable">${rows}</div>
    `;
    scheduleDays.appendChild(details);
  });
}

function renderSermon() {
  if (sermonTitle) sermonTitle.textContent = RETREAT_DATA.sermonTitle || "설교";
  if (sermonBody) {
    sermonBody.innerHTML = (RETREAT_DATA.sermonBody || [])
      .map(line => `<div>${escapeHTML(line)}</div>`)
      .join("");
  }
}

function makeNoteCard({ section, id, question, placeholder }) {
  const card = document.createElement("div");
  card.className = "noteCard";

  const value = loadText(section, id);

  card.innerHTML = `
    <p class="noteQ">${escapeHTML(question)}</p>
    <textarea class="textarea" placeholder="${escapeAttr(placeholder || "여기에 작성해 주세요.")}">${escapeHTML(value)}</textarea>
    <div class="noteMeta">
      <span class="badge" data-status>${value ? "저장됨" : "미입력"}</span>
      <span class="muted" data-time>${value ? `마지막 저장: ${nowStamp()}` : ""}</span>
    </div>
  `;

  const ta = card.querySelector("textarea");
  const status = card.querySelector("[data-status]");
  const time = card.querySelector("[data-time]");

  let t = null;
  ta?.addEventListener("input", () => {
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      const v = ta.value || "";
      saveText(section, id, v);
      if (status) status.textContent = v.trim() ? "저장됨" : "미입력";
      if (time) time.textContent = v.trim() ? `마지막 저장: ${nowStamp()}` : "";
    }, 350);
  });

  return card;
}

function renderQA() {
  if (!qaList) return;
  qaList.innerHTML = "";
  (RETREAT_DATA.qaQuestions || []).forEach((q, i) => {
    qaList.appendChild(
      makeNoteCard({
        section: "qa",
        id: `q${i + 1}`,
        question: `Q${i + 1}. ${q}`,
        placeholder: "내 답변을 적어보세요.",
      })
    );
  });
}

function renderQT() {
  if (!qtList) return;
  qtList.innerHTML = "";
  (RETREAT_DATA.qtPrompts || []).forEach((p, i) => {
    qtList.appendChild(
      makeNoteCard({
        section: "qt",
        id: `p${i + 1}`,
        question: p.title || `Prompt ${i + 1}`,
        placeholder: p.hint || "작성해 주세요.",
      })
    );
  });
}

function renderPraise() {
  const files = RETREAT_DATA.praiseFiles || [];
  if (!praiseFeed || !praiseEmpty) return;

  if (!files.length) {
    praiseEmpty.hidden = false;
    praiseFeed.hidden = true;
    praiseFeed.innerHTML = "";
    return;
  }

  praiseEmpty.hidden = true;
  praiseFeed.hidden = false;
  praiseFeed.innerHTML = "";

  files.slice(0, 20).forEach((src, idx) => {
    const card = document.createElement("div");
    card.className = "scoreCard";
    card.innerHTML = `
      <img class="scoreCard__img" src="${encodeURI(src)}" alt="악보 ${idx + 1}" loading="lazy" />
      <div class="scoreCard__cap">악보 ${idx + 1}</div>
    `;
    const img = card.querySelector("img");
    img?.addEventListener("click", () => openViewer(idx));
    praiseFeed.appendChild(card);
  });
}

// -------------------------------
// Export / Import / Reset
// -------------------------------
function exportNotes() {
  const data = {};
  const prefix = `${RETREAT_DATA.storagePrefix}:`;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith(prefix)) continue;
    data[key] = localStorage.getItem(key);
  }

  const blob = new Blob([JSON.stringify({
    meta: { prefix: RETREAT_DATA.storagePrefix, exportedAt: new Date().toISOString() },
    data
  }, null, 2)], { type: "application/json" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${RETREAT_DATA.storagePrefix}-notes.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
}

function importNotes(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const parsed = JSON.parse(String(reader.result || "{}"));
      const obj = parsed.data || {};
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] !== "string") return;
        localStorage.setItem(key, obj[key]);
      });
      alert("가져오기가 완료되었습니다. 페이지를 새로고침합니다.");
      location.reload();
    }catch{
      alert("가져오기에 실패했습니다. 파일 형식을 확인해주세요.");
    }
  };
  reader.readAsText(file, "utf-8");
}

function resetNotes() {
  const ok = confirm("이 기기에 저장된 Q&A/QT 기록을 모두 삭제할까요?");
  if (!ok) return;

  const prefix = `${RETREAT_DATA.storagePrefix}:`;
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(prefix)) keys.push(key);
  }
  keys.forEach((key) => localStorage.removeItem(key));
  alert("삭제 완료! 페이지를 새로고침합니다.");
  location.reload();
}

btnExport?.addEventListener("click", exportNotes);
btnReset?.addEventListener("click", resetNotes);
importFile?.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) importNotes(file);
  e.target.value = ""; // same file re-import 가능
});

// -------------------------------
// Fullscreen viewer (좌우 넘기기)
// -------------------------------
let viewerFiles = [];

function openViewer(startIndex = 0) {
  viewerFiles = (RETREAT_DATA.praiseFiles || []).slice(0, 20);
  if (!viewer || !viewerRail || !viewerCounter) return;
  if (viewerFiles.length === 0) return;

  viewerRail.innerHTML = "";
  viewerFiles.forEach((src, i) => {
    const slide = document.createElement("div");
    slide.className = "viewer__slide";
    slide.innerHTML = `<img src="${encodeURI(src)}" alt="악보 크게보기 ${i + 1}" />`;
    viewerRail.appendChild(slide);
  });

  viewer.classList.add("is-open");
  viewer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");

  updateViewerCounter(startIndex);

  setTimeout(() => {
    const target = viewerRail.children[startIndex];
    target?.scrollIntoView({ behavior: "instant", inline: "start", block: "nearest" });
  }, 50);
}

function closeViewer() {
  if (!viewer) return;
  viewer.classList.remove("is-open");
  viewer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
}

function updateViewerCounter(index) {
  if (!viewerCounter) return;
  viewerCounter.textContent = `${index + 1} / ${viewerFiles.length}`;
}

let rafId = null;
viewerRail?.addEventListener("scroll", () => {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    const w = viewerRail.clientWidth || 1;
    const idx = Math.round(viewerRail.scrollLeft / w);
    const safe = Math.max(0, Math.min(viewerFiles.length - 1, idx));
    updateViewerCounter(safe);
  });
});

viewerCloseBg?.addEventListener("click", closeViewer);
viewerCloseBtn?.addEventListener("click", closeViewer);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeViewer();
});

// -------------------------------
// utilities
// -------------------------------
function escapeHTML(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function escapeAttr(str){
  return String(str).replaceAll('"', "&quot;");
}

// -------------------------------
// init
// -------------------------------
window.addEventListener("load", () => {
  if (!location.hash) location.hash = "#home";

  renderHome();
  renderSchedule();
  renderSermon();
  renderQA();
  renderQT();
  renderPraise();

  route();
  initScrollMotion();
});
