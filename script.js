"use strict";

const languageButton = document.getElementById("language-toggle");
const themeButton = document.getElementById("theme-toggle");
const emailButton = document.getElementById("copy-email");
const emailStatus = document.getElementById("copy-status");
const portraitDialog = document.getElementById("portrait-dialog");
const portraitLink = document.getElementById("portrait-open");
const colorPreference = matchMedia("(prefers-color-scheme: dark)");
const topicButtons = [...document.querySelectorAll(".topic-filter")];
const publications = [...document.querySelectorAll(".publication[data-research-topic]")];
const researchStatus = document.getElementById("research-status");
const publicationCount = document.getElementById("publication-count");
let currentTopic = "all";
let language = "en";
let statusTimer;
let explicitTheme = false;
try { explicitTheme = ["light", "dark"].includes(localStorage.getItem("homepage-theme")); } catch {}

function updateThemeLabel() {
  const dark = document.documentElement.dataset.theme === "dark";
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.setAttribute("aria-label", language === "zh"
    ? (dark ? "切换到浅色模式" : "切换到深色模式")
    : (dark ? "Switch to light mode" : "Switch to dark mode"));
  document.querySelector('meta[name="theme-color"]').content = dark ? "#1c1922" : "#f9f8fb";
}

function setLanguage(nextLanguage) {
  language = nextLanguage === "zh" ? "zh" : "en";
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-en][data-zh]").forEach(element => {
    element.textContent = element.dataset[language];
  });
  document.querySelectorAll("[data-aria-en][data-aria-zh]").forEach(element => {
    element.setAttribute("aria-label", element.getAttribute(`data-aria-${language}`));
  });
  document.querySelectorAll("[data-alt-en][data-alt-zh]").forEach(element => {
    element.alt = element.getAttribute(`data-alt-${language}`);
  });
  languageButton.textContent = language === "en" ? "中文" : "EN";
  languageButton.setAttribute("aria-label", language === "en" ? "切换到中文" : "Switch to English");
  document.title = language === "en" ? "Cong Cao | Computer Vision Research" : "Cong Cao | 计算机视觉研究";
  emailStatus.textContent = "";
  updateThemeLabel();
  updateResearchStatus();
  try { localStorage.setItem("homepage-language", language); } catch {}
}

// Research topic navigation; all publications remain visible without JavaScript.
function updateResearchStatus() {
  const visibleCount = publications.filter(article => !article.hidden).length;
  publicationCount.textContent = String(visibleCount).padStart(2, "0");
  const activeButton = topicButtons.find(button => button.dataset.topic === currentTopic);
  const topicLabel = activeButton.querySelector("[data-en]").dataset[language];
  researchStatus.textContent = language === "zh"
    ? (currentTopic === "all" ? `全部 ${visibleCount} 篇论文` : `${topicLabel} · ${visibleCount} 篇论文`)
    : (currentTopic === "all" ? `All ${visibleCount} publications` : `${topicLabel} · ${visibleCount} ${visibleCount === 1 ? "publication" : "publications"}`);
}

function filterResearch(topic) {
  if (!topicButtons.some(button => button.dataset.topic === topic)) return;
  currentTopic = topic;
  publications.forEach(article => {
    article.hidden = topic !== "all" && article.dataset.researchTopic !== topic;
  });
  topicButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.topic === topic)));
  updateResearchStatus();
}

languageButton.hidden = false;
themeButton.hidden = false;
emailButton.hidden = false;
languageButton.addEventListener("click", () => setLanguage(language === "en" ? "zh" : "en"));
let savedLanguage = "en";
try { savedLanguage = localStorage.getItem("homepage-language") || "en"; } catch {}
setLanguage(savedLanguage);

themeButton.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  explicitTheme = true;
  try { localStorage.setItem("homepage-theme", theme); } catch {}
  updateThemeLabel();
});
colorPreference.addEventListener("change", event => {
  if (!explicitTheme) {
    document.documentElement.dataset.theme = event.matches ? "dark" : "light";
    updateThemeLabel();
  }
});

emailButton.addEventListener("click", async () => {
  clearTimeout(statusTimer);
  try {
    await navigator.clipboard.writeText("cong.cao@mbzuai.ac.ae");
    emailStatus.textContent = language === "zh" ? "邮箱地址已复制。" : "Email address copied.";
  } catch {
    emailStatus.textContent = language === "zh" ? "请选中上方邮箱地址，手动复制。" : "Please select the email address above and copy it.";
  }
  statusTimer = setTimeout(() => { emailStatus.textContent = ""; }, 6000);
});

// The image link still opens the original PNG if dialog support or JS is absent.
portraitLink.addEventListener("click", event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof portraitDialog.showModal !== "function") return;
  event.preventDefault();
  portraitDialog.showModal();
  document.documentElement.classList.add("photo-open");
});
document.getElementById("portrait-close").addEventListener("click", () => portraitDialog.close());
portraitDialog.addEventListener("click", event => {
  if (event.target !== portraitDialog) return;
  const rect = portraitDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) portraitDialog.close();
});
portraitDialog.addEventListener("close", () => {
  document.documentElement.classList.remove("photo-open");
  portraitLink.focus({ preventScroll: true });
});

if ("IntersectionObserver" in window) {
  const navLinks = [...document.querySelectorAll("nav a")];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute("href")));
  const sectionObserver = new IntersectionObserver(() => {
    let active = sections[0];
    sections.forEach(section => { if (section.getBoundingClientRect().top <= innerHeight * .42) active = section; });
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 50) active = sections.at(-1);
    navLinks.forEach(link => {
      if (link.getAttribute("href") === `#${active.id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-10% 0px -45% 0px", threshold: [0, .1, .5] });
  sections.forEach(section => sectionObserver.observe(section));
}
document.getElementById("year").textContent = String(new Date().getFullYear());

topicButtons.forEach(button => button.addEventListener("click", () => filterResearch(button.dataset.topic)));
document.getElementById("research-filter-controls").hidden = false;
researchStatus.hidden = false;
filterResearch("all");
