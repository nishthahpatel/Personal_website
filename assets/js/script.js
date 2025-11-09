/* =======================
   Minimal, Robust Script
   ======================= */

// tiny helper
const toggleActive = (el, on = null) => {
  if (!el) return;
  if (on === null) el.classList.toggle("active");
  else el.classList[on ? "add" : "remove"]("active");
};

/* ------------------ SIDEBAR ------------------ */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => toggleActive(sidebar));
}

/* --------------- PAGE NAVIGATION ---------------
   Uses data-target on nav buttons to find the article
   with [data-page="..."]. Falls back to button text (lowercased)
   if data-target is missing. No dependency on equal array lengths.
*/
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

function showPage(name) {
  if (!name) return;
  pages.forEach(p => toggleActive(p, p.dataset.page === name));
  navLinks.forEach(l => {
    const t = (l.dataset.target || l.textContent).trim().toLowerCase();
    toggleActive(l, t === name);
  });
  window.scrollTo(0, 0);
}

if (navLinks.length && pages.length) {
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const target = (link.dataset.target || link.textContent).trim().toLowerCase();
      showPage(target);
    });
  });
  // initial page on load (defaults to 'about' if none is active)
  const active = document.querySelector("[data-page].active");
  showPage(active ? active.dataset.page : "about");
}

/* --------------- CONTACT FORM ---------------
   Keeps the submit button disabled until the form is valid.
   If you want the button always enabled, remove the two lines with toggleAttribute.
*/
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length && formBtn) {
  const updateSubmitState = () => {
    formBtn.toggleAttribute("disabled", !form.checkValidity());
  };
  formInputs.forEach(inp => inp.addEventListener("input", updateSubmitState));
  updateSubmitState(); // set initial state on load

  // Optional: intercept submit so you can integrate FormSubmit/EmailJS later
  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   // handle send here...
  // });
}

/* --------------- THEME TOGGLE --------------- */
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

// saved theme or default to dark
const savedTheme = localStorage.getItem("theme") || "dark";
if (htmlEl) htmlEl.setAttribute("data-theme", savedTheme);

if (themeToggleBtn && htmlEl) {
  themeToggleBtn.addEventListener("click", () => {
    const now = htmlEl.getAttribute("data-theme");
    const next = now === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}
