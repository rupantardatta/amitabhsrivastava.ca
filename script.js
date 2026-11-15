const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

function setMenuOpen(isOpen) {
    if (!menuToggle || !primaryNav) return;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    primaryNav.classList.toggle("is-open", isOpen);
}

if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
        setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setMenuOpen(false);
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".site-header")) setMenuOpen(false);
    });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

const contactDialog = document.querySelector("#contact-dialog");
const openContactDialog = document.querySelector("[data-contact-dialog-open]");
const closeContactDialog = document.querySelector("[data-contact-dialog-close]");

if (contactDialog && openContactDialog && closeContactDialog && "showModal" in contactDialog) {
    openContactDialog.addEventListener("click", () => contactDialog.showModal());
    closeContactDialog.addEventListener("click", () => contactDialog.close());

    contactDialog.addEventListener("cancel", (event) => {
        event.preventDefault();
        contactDialog.close();
    });

    contactDialog.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            event.preventDefault();
            contactDialog.close();
        }
    });

    contactDialog.addEventListener("click", (event) => {
        if (event.target === contactDialog) contactDialog.close();
    });
}
