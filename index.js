/* =========================================================
   RINCEL ONTHE BEAT — INTERACTIONS
   Configure the business contact and newsletter endpoint
   before using the forms on a live website.
   ========================================================= */

const SITE_CONFIG = {
  // Add the WhatsApp number in international format, digits only.
  // Example format for Kenya: 2547XXXXXXXX
  whatsappNumber: "",

  // Add a secure newsletter provider endpoint before launch.
  // This should accept a POST request with { email: "..." }.
  newsletterEndpoint: ""
};

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNav = document.querySelector(".primary-nav");
  const navLinks = document.querySelectorAll(".primary-nav a");
  const bookingForm = document.querySelector("#bookingForm");
  const bookingStatus = document.querySelector("#bookingStatus");
  const newsletterForm = document.querySelector("#newsletterForm");
  const newsletterStatus = document.querySelector("#newsletterStatus");
  const currentYear = document.querySelector("#currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Mobile navigation
  const closeMenu = () => {
    if (!menuToggle || !primaryNav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    primaryNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      primaryNav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  // Booking inquiry: sends a pre-filled message to the studio's WhatsApp.
  if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!bookingForm.reportValidity()) return;

      if (!SITE_CONFIG.whatsappNumber) {
        bookingStatus.textContent = "Demo form: add the studio's verified WhatsApp number in index.js to activate booking inquiries.";
        return;
      }

      const formData = new FormData(bookingForm);
      const name = String(formData.get("name") || "").trim();
      const contact = String(formData.get("contact") || "").trim();
      const project = String(formData.get("project") || "").trim();
      const details = String(formData.get("details") || "").trim();

      const message = [
        "Hello Geniune Hits Studioz!",
        "",
        `My name is ${name}.`,
        `My phone / WhatsApp: ${contact}`,
        `I'm interested in: ${project}.`,
        details ? `Project details: ${details}` : "",
        "",
        "I'd like to discuss availability and pricing. Thank you!"
      ].filter(Boolean).join("\n");

      const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      bookingStatus.textContent = "Your inquiry is ready in WhatsApp. Send the message there to complete your request.";
      bookingForm.reset();
    });
  }

  // Newsletter: intentionally requires a real provider endpoint.
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!newsletterForm.reportValidity()) return;

      const emailInput = newsletterForm.querySelector('input[name="email"]');
      const email = emailInput ? emailInput.value.trim() : "";

      if (!SITE_CONFIG.newsletterEndpoint) {
        newsletterStatus.textContent = "Newsletter demo: connect an email marketing provider before collecting subscribers.";
        return;
      }

      const submitButton = newsletterForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton ? submitButton.innerHTML : "";

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "SENDING...";
      }

      try {
        const response = await fetch(SITE_CONFIG.newsletterEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        });

        if (!response.ok) {
          throw new Error("Newsletter signup failed.");
        }

        newsletterStatus.textContent = "You're on the list! Check your inbox for the next steps.";
        newsletterForm.reset();
      } catch (error) {
        newsletterStatus.textContent = "We couldn't complete your signup just now. Please try again later.";
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.innerHTML = originalButtonText;
        }
      }
    });
  }
});
