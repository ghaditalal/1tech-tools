/* =========================================================
   1Tech Tools Directory — script.js
   To add a new tool: add an object to the TOOLS array below.
   ========================================================= */

// Categories: id, Arabic label, and the CSS color variable for it
const CATEGORIES = [
  { id: "all",    label: "الكل",           color: "var(--yellow)" },
  { id: "dev",    label: "برمجة وتطوير",   color: "var(--sky)" },
  { id: "vcs",    label: "إدارة الكود",    color: "var(--orange)" },
  { id: "sec",    label: "أمن سيبراني",    color: "var(--mint)" },
  { id: "net",    label: "شبكات وأنظمة",   color: "var(--violet)" },
  { id: "design", label: "تصميم وتنظيم",   color: "var(--pink)" },
];

// level: 1 = مبتدئ, 2 = متوسط, 3 = متقدم
const TOOLS = [
  {
    name: "GitHub", short: "GH", cat: "vcs", level: 1,
    price: "مجاني + خطط مدفوعة", url: "https://github.com",
    desc: "منصة لاستضافة المشاريع البرمجية المبنية على Git، يتعاون فيها المبرمجون حول العالم على الكود ويشاركون مشاريعهم.",
    uses: [
      "حفظ مشاريعك ومشاركتها كمعرض أعمال (Portfolio)",
      "التعاون مع فريقك عبر Pull Requests ومراجعة الكود",
      "المساهمة في المشاريع مفتوحة المصدر",
    ],
  },
  {
    name: "Git", short: "git", cat: "vcs", level: 1,
    price: "مجاني ومفتوح المصدر", url: "https://git-scm.com",
    desc: "نظام للتحكم بالإصدارات يسجّل كل تعديل على ملفاتك، فيمكنك الرجوع إلى أي نسخة سابقة بسهولة.",
    uses: [
      "تتبّع تاريخ التعديلات في مشروعك",
      "العمل على فروع (Branches) منفصلة دون إفساد النسخة الأساسية",
      "دمج عمل أكثر من شخص في مشروع واحد",
    ],
  },
  {
    name: "VS Code", short: "</>", cat: "dev", level: 1,
    price: "مجاني", url: "https://code.visualstudio.com",
    desc: "محرر أكواد خفيف وسريع من Microsoft، يدعم معظم لغات البرمجة ويتوسّع بآلاف الإضافات.",
    uses: [
      "كتابة الكود بأي لغة مع تلوين وإكمال تلقائي",
      "تصحيح الأخطاء (Debugging) وتشغيل الطرفية من داخله",
      "تخصيصه بالإضافات والثيمات حسب احتياجك",
    ],
  },
  {
    name: "Postman", short: "API", cat: "dev", level: 2,
    price: "مجاني + خطط مدفوعة", url: "https://www.postman.com",
    desc: "أداة لتجربة واجهات البرمجة (APIs)، ترسل منها الطلبات وترى الردود بشكل منظّم وواضح.",
    uses: [
      "اختبار طلبات GET وPOST وغيرها بدون كتابة كود",
      "حفظ الطلبات في مجموعات (Collections) ومشاركتها مع الفريق",
      "كتابة اختبارات آلية للتحقق من ردود الـ API",
    ],
  },
  {
    name: "Wireshark", short: "WS", cat: "sec", level: 2,
    price: "مجاني ومفتوح المصدر", url: "https://www.wireshark.org",
    desc: "محلل حزم شبكية يلتقط البيانات المارّة في الشبكة ويعرضها بالتفصيل حزمةً حزمة.",
    uses: [
      "فهم طريقة عمل البروتوكولات مثل HTTP وDNS وTCP",
      "تشخيص مشاكل الشبكة وبطء الاتصال",
      "تحليل الحركة المشبوهة في التحقيقات الأمنية",
    ],
  },
  {
    name: "Nmap", short: "NM", cat: "sec", level: 2,
    price: "مجاني ومفتوح المصدر", url: "https://nmap.org",
    desc: "أداة لمسح الشبكات واكتشاف الأجهزة المتصلة والمنافذ المفتوحة والخدمات التي تعمل عليها.",
    uses: [
      "جرد الأجهزة الموجودة في شبكتك",
      "اكتشاف المنافذ والخدمات المكشوفة",
      "أول خطوة في اختبارات الاختراق المصرّح بها",
    ],
  },
  {
    name: "Burp Suite", short: "BS", cat: "sec", level: 3,
    price: "نسخة Community مجانية", url: "https://portswigger.net/burp",
    desc: "منصة لاختبار أمان تطبيقات الويب، تعترض الطلبات بين المتصفح والخادم وتتيح لك تعديلها.",
    uses: [
      "اعتراض طلبات الويب وتعديلها لفهم سلوك التطبيق",
      "البحث عن ثغرات مثل XSS وSQL Injection",
      "التدرّب على مختبرات PortSwigger Web Security Academy",
    ],
  },
  {
    name: "Kali Linux", short: "KL", cat: "sec", level: 3,
    price: "مجاني", url: "https://www.kali.org",
    desc: "توزيعة لينكس مخصّصة للأمن السيبراني، تأتي جاهزة بمئات الأدوات لاختبار الاختراق والتحليل الجنائي.",
    uses: [
      "بيئة جاهزة لتعلّم الأمن السيبراني",
      "حل تحديات CTF",
      "اختبار الاختراق في المعامل والبيئات المصرّح بها",
    ],
  },
  {
    name: "Cisco Packet Tracer", short: "PT", cat: "net", level: 1,
    price: "مجاني مع حساب NetAcad", url: "https://www.netacad.com/cisco-packet-tracer",
    desc: "محاكي شبكات من Cisco تبني فيه شبكة كاملة من راوترات وسويتشات وأجهزة دون الحاجة لأجهزة حقيقية.",
    uses: [
      "تصميم الشبكات وتجربتها افتراضيًا",
      "التدرّب على أوامر إعداد أجهزة Cisco",
      "الاستعداد لشهادة CCNA",
    ],
  },
  {
    name: "VirtualBox", short: "VB", cat: "net", level: 1,
    price: "مجاني ومفتوح المصدر", url: "https://www.virtualbox.org",
    desc: "برنامج لتشغيل أنظمة تشغيل كاملة كأجهزة افتراضية داخل جهازك.",
    uses: [
      "تجربة لينكس أو أنظمة أخرى دون المساس بجهازك",
      "بناء معمل أمن سيبراني معزول",
      "اختبار البرامج في بيئات مختلفة",
    ],
  },
  {
    name: "Docker", short: "DK", cat: "net", level: 2,
    price: "مجاني للاستخدام الشخصي", url: "https://www.docker.com",
    desc: "منصة لتغليف التطبيقات مع كل ما تحتاجه في «حاويات» تعمل بنفس الطريقة على أي جهاز.",
    uses: [
      "تشغيل قواعد البيانات والخدمات بأمر واحد",
      "ضمان أن المشروع يعمل عند الجميع بنفس الإعدادات",
      "نشر التطبيقات على الخوادم والسحابة",
    ],
  },
  {
    name: "DBeaver", short: "DB", cat: "dev", level: 1,
    price: "نسخة Community مجانية", url: "https://dbeaver.io",
    desc: "برنامج لإدارة قواعد البيانات يتصل بـ MySQL وPostgreSQL وSQLite وغيرها من واجهة واحدة.",
    uses: [
      "كتابة استعلامات SQL وتنفيذها",
      "استعراض الجداول وتعديل البيانات بصريًا",
      "رسم مخططات العلاقات بين الجداول (ER)",
    ],
  },
  {
    name: "Jupyter Notebook", short: "JN", cat: "dev", level: 1,
    price: "مجاني ومفتوح المصدر", url: "https://jupyter.org",
    desc: "دفاتر تفاعلية تجمع الكود والنتائج والرسوم والشرح في مستند واحد، وتُستخدم كثيرًا مع Python.",
    uses: [
      "تحليل البيانات ورسمها خطوةً بخطوة",
      "تجربة نماذج تعلّم الآلة",
      "كتابة ملاحظات دراسية تحتوي كودًا قابلًا للتشغيل",
    ],
  },
  {
    name: "Chrome DevTools", short: "DT", cat: "dev", level: 1,
    price: "مدمجة في المتصفح", url: "https://developer.chrome.com/docs/devtools",
    desc: "أدوات مطوّرين مدمجة في متصفح Chrome لفحص صفحات الويب وتعديلها مباشرة.",
    uses: [
      "فحص عناصر HTML وتجربة تعديلات CSS فورًا",
      "متابعة طلبات الشبكة وأخطاء JavaScript في الـ Console",
      "قياس سرعة الصفحة وأدائها",
    ],
  },
  {
    name: "Replit", short: "RP", cat: "dev", level: 1,
    price: "مجاني + خطط مدفوعة", url: "https://replit.com",
    desc: "بيئة برمجة أونلاين تكتب فيها الكود وتشغّله من المتصفح مباشرة دون تثبيت أي شيء.",
    uses: [
      "البدء بالبرمجة فورًا من أي جهاز",
      "مشاركة الكود والعمل الجماعي عليه لحظيًا",
      "نشر مشاريع صغيرة بسرعة",
    ],
  },
  {
    name: "Figma", short: "FG", cat: "design", level: 1,
    price: "مجاني + خطط مدفوعة", url: "https://www.figma.com",
    desc: "أداة تصميم واجهات تعمل من المتصفح، يتعاون فيها المصممون والمطورون على نفس الملف.",
    uses: [
      "تصميم واجهات المواقع والتطبيقات",
      "بناء نماذج أولية تفاعلية (Prototypes)",
      "تسليم التصاميم للمطورين مع المقاسات والألوان",
    ],
  },
  {
    name: "Notion", short: "NO", cat: "design", level: 1,
    price: "مجاني + خطط مدفوعة", url: "https://www.notion.so",
    desc: "مساحة عمل تجمع الملاحظات والمهام والجداول البسيطة في مكان واحد.",
    uses: [
      "تنظيم ملاحظات المواد والمذاكرة",
      "إدارة مشروع التخرج ومهام الفريق",
      "توثيق المشاريع البرمجية",
    ],
  },
  {
    name: "Jira", short: "JR", cat: "design", level: 2,
    price: "مجاني للفرق الصغيرة", url: "https://www.atlassian.com/software/jira",
    desc: "أداة لإدارة المشاريع البرمجية بأسلوب Agile، تنظّم العمل في مهام ودورات عمل (Sprints).",
    uses: [
      "تقسيم المشروع إلى مهام وتوزيعها على الفريق",
      "متابعة التقدّم بلوحات Scrum وKanban",
      "تتبّع الأخطاء (Bugs) حتى حلّها",
    ],
  },
];

const LEVELS = { 1: "مبتدئ", 2: "متوسط", 3: "متقدم" };
const FAV_KEY = "1tech-favorites";

/* ---------- State ---------- */
let activeCat = "all";
let onlyFavs = false;
let query = "";
let favorites = loadFavorites();

/* ---------- Elements ---------- */
const grid = document.getElementById("grid");
const chipsEl = document.getElementById("chips");
const countEl = document.getElementById("count");
const emptyEl = document.getElementById("empty");
const searchEl = document.getElementById("search");
const surpriseBtn = document.getElementById("surprise");
const resetBtn = document.getElementById("reset");

/* ---------- Helpers ---------- */
function loadFavorites() {
  try {
    return new Set(JSON.parse(localStorage.getItem(FAV_KEY) || "[]"));
  } catch (e) {
    return new Set();
  }
}
function saveFavorites() {
  try {
    localStorage.setItem(FAV_KEY, JSON.stringify([...favorites]));
  } catch (e) { /* storage not available: favorites last for this visit only */ }
}

// Normalize Arabic so "اداة" finds "أداة", "ة" matches "ه", etc.
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[ً-ْـ]/g, "") // diacritics + tatweel
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي");
}

function catOf(id) {
  return CATEGORIES.find((c) => c.id === id);
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[ch]));
}

const heartSVG =
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.1C.9 8.6 2.9 4.5 6.7 4.5c2.2 0 3.6 1.2 4.3 2.4h2c.7-1.2 2.1-2.4 4.3-2.4 3.8 0 5.8 4.1 4.3 7.4C19.5 16.4 12 21 12 21z"/></svg>';

/* ---------- Render filters ---------- */
function renderChips() {
  const chips = CATEGORIES.map((c) => {
    const n = c.id === "all" ? TOOLS.length : TOOLS.filter((t) => t.cat === c.id).length;
    const pressed = !onlyFavs && activeCat === c.id;
    return `<button class="chip" style="--c:${c.color}" data-cat="${c.id}" aria-pressed="${pressed}">
      <span class="dot"></span>${c.label} <small>(${n})</small></button>`;
  });
  chips.push(`<button class="chip" style="--c:var(--pink)" data-fav="1" aria-pressed="${onlyFavs}">
    <span class="dot"></span>المفضلة <small>(${favorites.size})</small></button>`);
  chipsEl.innerHTML = chips.join("");
}

/* ---------- Render cards ---------- */
function visibleTools() {
  const q = normalize(query.trim());
  return TOOLS.filter((t) => {
    if (onlyFavs && !favorites.has(t.name)) return false;
    if (!onlyFavs && activeCat !== "all" && t.cat !== activeCat) return false;
    if (!q) return true;
    const haystack = normalize(
      [t.name, t.desc, t.price, catOf(t.cat).label, LEVELS[t.level], ...t.uses].join(" ")
    );
    return haystack.includes(q);
  });
}

function cardHTML(t, i) {
  const c = catOf(t.cat);
  const tilt = ((i * 37) % 5 - 2) * 0.6; // small, stable tilt per card
  const isFav = favorites.has(t.name);
  const meter = [1, 2, 3].map((n) => `<i class="${n <= t.level ? "on" : ""}"></i>`).join("");
  return `
  <article class="card" id="tool-${i}" data-name="${escapeHTML(t.name)}"
    style="--c:${c.color}; --tilt:${tilt}deg; --delay:${Math.min(i, 12) * 40}ms">
    <div class="card-top">
      <div class="logo" aria-hidden="true">${escapeHTML(t.short)}</div>
      <div class="card-title">
        <h3>${escapeHTML(t.name)}</h3>
        <span class="cat">${c.label}</span>
      </div>
      <button class="fav" aria-pressed="${isFav}" aria-label="أضف ${escapeHTML(t.name)} إلى المفضلة">${heartSVG}</button>
    </div>
    <p class="desc">${escapeHTML(t.desc)}</p>
    <p class="uses-title">استخداماتها</p>
    <ul class="uses">${t.uses.map((u) => `<li>${escapeHTML(u)}</li>`).join("")}</ul>
    <div class="card-foot">
      <span class="tag"><span class="meter" aria-hidden="true">${meter}</span>${LEVELS[t.level]}</span>
      <span class="tag">${escapeHTML(t.price)}</span>
      <a class="visit" href="${t.url}" target="_blank" rel="noopener">زيارة الموقع <span aria-hidden="true">←</span></a>
    </div>
  </article>`;
}

function render() {
  const list = visibleTools();
  grid.innerHTML = list.map((t) => cardHTML(t, TOOLS.indexOf(t))).join("");
  emptyEl.hidden = list.length > 0;
  countEl.textContent =
    list.length === TOOLS.length ? `${TOOLS.length} أداة` : `${list.length} من ${TOOLS.length} أداة`;
  renderChips();
}

/* ---------- Events ---------- */
chipsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  if (btn.dataset.fav) {
    onlyFavs = !onlyFavs;
  } else {
    onlyFavs = false;
    activeCat = btn.dataset.cat;
  }
  render();
});

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".fav");
  if (!btn) return;
  const name = btn.closest(".card").dataset.name;
  if (favorites.has(name)) favorites.delete(name);
  else favorites.add(name);
  saveFavorites();
  btn.setAttribute("aria-pressed", favorites.has(name));
  renderChips();
  if (onlyFavs) render();
});

searchEl.addEventListener("input", () => {
  query = searchEl.value;
  render();
});

resetBtn.addEventListener("click", () => {
  query = "";
  searchEl.value = "";
  activeCat = "all";
  onlyFavs = false;
  render();
});

// "Suggest a tool": jump to a random tool and highlight it
surpriseBtn.addEventListener("click", () => {
  query = "";
  searchEl.value = "";
  activeCat = "all";
  onlyFavs = false;
  render();
  const index = Math.floor(Math.random() * TOOLS.length);
  const card = document.getElementById(`tool-${index}`);
  if (!card) return;
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => {
    card.classList.add("spotlight");
    setTimeout(() => card.classList.remove("spotlight"), 2200);
  }, 450);
});

/* ---------- Ticker + stats ---------- */
function renderTicker() {
  const names = TOOLS.map((t) => `<span>${escapeHTML(t.name)}</span>`).join("");
  document.getElementById("ticker").innerHTML = names + names; // doubled for a seamless loop
}
document.getElementById("stat-tools").textContent = TOOLS.length;
document.getElementById("stat-cats").textContent = CATEGORIES.length - 1;

renderTicker();
render();
