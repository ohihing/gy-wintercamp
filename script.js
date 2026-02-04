// ===========================================
// 금촌교회 청년부 · 2026 동계수련회
// (정적 사이트 + localStorage 개인 저장)
// ===========================================

/**
 * ✅ 운영자가 수정하는 곳 (여기만 바꾸면 됨)
 */
const RETREAT_DATA = {
  storagePrefix: "gy-retreatbook-2026-winter",

  homeTitle: "2026 동계수련회",
  homeBadge: "금촌교회 청년부",

  schedule: [
    {
      label: "1일차",
      items: [
        { time: "12:00", title: "교회 집합 및 출발" },
        { time: "12:30", title: "김포 사계절 썰매장" },
        { time: "15:30", title: "숙소 도착 및 개회 예배와 OT" },
        { time: "17:00", title: "저녁식사" },
        { time: "19:00", title: "저녁예배" },
        { time: "21:00", title: "개인정비" },
        { time: "22:00", title: "마무리 및 취침" },
      ],
    },
    {
      label: "2일차",
      items: [
        { time: "0:00~7:00", title: "취침" },
        { time: "8:00", title: "개인정비 및 아침 식사" },
        { time: "9:00", title: "아침 QT 및 닫는 예배" },
        { time: "10:00", title: "청소 및 정리 후 퇴실" },
        { time: "11:00~12:00", title: "점심 식사" },
        { time: "13:00", title: "교회로" },
      ],
    },
  ],

  worship: [
    {
      label: "여는 예배",
      sermonTitle: "담력은 얻어 모이기를 힘쓰라",
      ref: "히브리서 10장 19~25절",
      verses: [
        "19. 그러므로 형제들아 우리가 예수의 피를 힘입어 성소에 들어갈 담력을 얻었나니",
        "20. 그 길은 우리를 위하여 휘장 가운데로 열어 놓으신 새로운 살 길이요 휘장은 곧 그의 육체니라",
        "21. 또 하나님의 집 다스리는 큰 제사장이 계시매",
        "22. 우리가 마음에 뿌림을 받아 악한 양심으로부터 벗어나고 몸은 맑은 물로 씻음을 받았으니 참 마음과 온전한 믿음으로 하나님께 나아가자",
        "23. 또 약속하신 이는 미쁘시니 우리가 믿는 도리의 소망을 움직이지 말며 굳게 잡고",
        "24. 서로 돌아보아 사랑과 선행을 격려하며",
        "25. 모이기를 폐하는 어떤 사람들의 습관과 같이 하지 말고 오직 권하여 그 날이 가까움을 볼수록 더욱 그리하자. 아멘.",
      ],
    },
    {
      label: "저녁 예배",
      sermonTitle: "믿음의 증거",
      ref: "히브리서 11장 1~2절",
      verses: [
        "1. 믿음은 바라는 것들의 실상이요 보이지 않는 것들의 증거니",
        "2. 선진들이 이로써 증거를 얻었느니라. 아멘.",
      ],
    },
    {
      label: "닫는 예배",
      sermonTitle: "온전하게 하시는 예수를 보라",
      ref: "히브리서 12장 1~3절",
      verses: [
        "1. 이러므로 우리에게 구름 같이 둘러싼 허다한 증인들이 있으니 모든 무거운 것과 얽매이기 쉬운 죄를 벗어 버리고 인내로써 우리 앞에 당한 경주를 하며",
        "2. 믿음의 주요 또 온전하게 하시는 이인 예수를 바라보자 그는 그 앞에 있는 기쁨을 위하여 십자가를 참으사 부끄러움을 개의치 아니하시더니 하나님 보좌 우편에 앉으셨느니라",
        "3. 너희가 피곤하여 낙심하지 않기 위하여 죄인들이 이같이 자기에게 거역한 일을 참으신 이를 생각하라. 아멘.",
      ],
    },
  ],

  qt: {
    title: "주님이 계시는 푯대를 향하여",
    ref: "빌립보서 3:7-14",
    verses: [
      "7. 그러나 무엇이든지 내게 유익하던 것을 내가 그리스도를 위하여 다 해로 여길뿐더러",
      "8. 또한 모든 것을 해로 여김은 내 주 그리스도 예수를 아는 지식이 가장 고상하기 때문이라 내가 그를 위하여 모든 것을 잃어버리고 배설물로 여김은 그리스도를 얻고",
      "9. 그 안에서 발견되려 함이니 내가 가진 의는 율법에서 난 것이 아니요 오직 그리스도를 믿음으로 말미암은 것이니 곧 믿음으로 하나님께로부터 난 의라",
      "10. 내가 그리스도와 그 부활의 권능과 그 고난에 참여함을 알고자 하여 그의 죽으심을 본받아",
      "11. 어떻게 해서든지 죽은 자 가운데서 부활에 이르려 하노니",
      "12. 내가 이미 얻었다 함도 아니요 온전히 이루었다 함도 아니라 오직 내가 그리스도 예수께 잡힌 바 된 그것을 잡으려고 달려가노라",
      "13. 형제들아 나는 아직 내가 잡은 줄로 여기지 아니하고 오직 한 일 즉 뒤에 있는 것은 잊어버리고 앞에 있는 것을 잡으려고",
      "14. 푯대를 향하여 그리스도 예수 안에서 하나님이 위에서 부르신 부름의 상을 위하여 달려가노라.",
    ],
    questions: [
      "내가 좋아하고 내 삶에 도움이 되고 유익하게 하는 것이지만, 주님을 바라보는데 해가 되는 것들은 무엇입니까? (7-9절)",
      "내가 이제는 뒤에 남겨 두어야 할 나의 의가 무엇입니까? (12-14절)",
      "온전케 하시는 주님을 향해, 그 푯대를 향해 달려가기 위한 나의 결단과 기도 제목을 함께 나누어봅시다.",
    ],
  },

  // ✅ 찬양 악보 (assets 폴더 / 001.jpg ~ 010.jpg, 소문자 확장자)
  praiseFiles: [
    "assets/001.jpg",
    "assets/002.jpg",
    "assets/003.jpg",
    "assets/004.jpg",
    "assets/005.jpg",
    "assets/006.jpg",
    "assets/007.jpg",
    "assets/008.jpg",
    "assets/009.jpg",
    "assets/010.jpg",
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

// home
const retreatTitle = document.getElementById("retreatTitle");
const retreatBadge = document.getElementById("retreatBadge");

// schedule
const scheduleWrap = document.getElementById("scheduleWrap");

// worship
const worshipList = document.getElementById("worshipList");

// praise
const praiseFeed = document.getElementById("praiseFeed");
const praiseEmpty = document.getElementById("praiseEmpty");

// viewer
const viewer = document.getElementById("viewer");
const viewerRail = document.getElementById("viewerRail");
const viewerCounter = document.getElementById("viewerCounter");
const viewerCloseBg = document.getElementById("viewerCloseBg");
const viewerCloseBtn = document.getElementById("viewerCloseBtn");

// qt
const qtTitle = document.getElementById("qtTitle");
const qtRef = document.getElementById("qtRef");
const qtVerses = document.getElementById("qtVerses");
const qtQuestions = document.getElementById("qtQuestions");

// tools (QT 하단에 위치)
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
  if (retreatTitle) retreatTitle.textContent = RETREAT_DATA.homeTitle || "동계수련회";
  if (retreatBadge) retreatBadge.textContent = RETREAT_DATA.homeBadge || "";
}

function renderSchedule() {
  if (!scheduleWrap) return;

  scheduleWrap.innerHTML = "";
  (RETREAT_DATA.schedule || []).forEach((day) => {
    const card = document.createElement("div");
    card.className = "dayCard";

    const rows = (day.items || []).map((it) => `
      <div class="timeRow">
        <div class="time">${escapeHTML(it.time || "")}</div>
        <div>
          <p class="itemTitle">${escapeHTML(it.title || "")}</p>
        </div>
      </div>
    `).join("");

    card.innerHTML = `
      <div class="dayCard__head">${escapeHTML(day.label || "")}</div>
      <div class="timeTable">${rows}</div>
    `;

    scheduleWrap.appendChild(card);
  });
}

function renderWorship() {
  if (!worshipList) return;
  worshipList.innerHTML = "";

  (RETREAT_DATA.worship || []).forEach((svc) => {
    const panel = document.createElement("div");
    panel.className = "panel";

    const verseHtml = (svc.verses || []).map(v => `<p>${escapeHTML(v)}</p>`).join("");

    panel.innerHTML = `
      <div class="panel__title">${escapeHTML(svc.label || "예배")}</div>
      <div class="panel__body">
        <div class="quoteTitle">"${escapeHTML(svc.sermonTitle || "")}"</div>
        <div class="refLine">${escapeHTML(svc.ref || "")}</div>

        <details class="accordion section-mt-sm">
          <summary>본문 펼치기</summary>
          <div class="verseBlock">
            ${verseHtml}
          </div>
        </details>
      </div>
    `;

    worshipList.appendChild(panel);
  });
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

function renderQT() {
  if (qtTitle) qtTitle.textContent = RETREAT_DATA.qt?.title || "QT";
  if (qtRef) qtRef.textContent = RETREAT_DATA.qt?.ref || "";

  if (qtVerses) {
    qtVerses.innerHTML = (RETREAT_DATA.qt?.verses || [])
      .map(v => `<p>${escapeHTML(v)}</p>`)
      .join("");
  }

  if (qtQuestions) {
    qtQuestions.innerHTML = "";
    (RETREAT_DATA.qt?.questions || []).forEach((q, i) => {
      qtQuestions.appendChild(
        makeNoteCard({
          section: "qt",
          id: `q${i + 1}`,
          question: `${i + 1}. ${q}`,
          placeholder: "내 답변을 적어보세요.",
        })
      );
    });
  }
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
  const ok = confirm("이 기기에 저장된 QT 기록을 모두 삭제할까요?");
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
  e.target.value = "";
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
  renderWorship();
  renderPraise();
  renderQT();

  route();
  initScrollMotion();
});
