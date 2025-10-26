// Hantering av kontaktformulärets modal
const form = document.querySelector(".contact-section form");
if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset();
      openModal();
    } else {
      alert("Ett fel uppstod. Försök igen senare.");
    }
  });
}

// === ThankYou modal ===
function openModal() {
  const modal = document.getElementById("thankYouModal");
  if (!modal) return;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal() {
  const modal = document.getElementById("thankYouModal");
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

// === Upcoming modal ===
function openUpcoming(e) {
  if (e) e.preventDefault();
  const modal = document.getElementById("upcomingModal");
  if (!modal) return;
  modal.classList.add("show");
  modal.setAttribute('aria-hidden', 'false');
}
function closeUpcoming() {
  const modal = document.getElementById('upcomingModal');
  if (!modal) return;
  modal.classList.remove("show");
  modal.setAttribute('aria-hidden', 'true');
}

// === Global stängning via overlay eller ESC ===
window.addEventListener("click", (e) => {
  const thankModal = document.getElementById("thankYouModal");
  const upModal = document.getElementById("upcomingModal");

  if (thankModal && e.target === thankModal) closeModal();
  if (upModal && e.target === upModal) closeUpcoming();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeUpcoming();
  }
});

// === About text toggle ===
(function () {
  const text = document.getElementById('aboutText');
  const btn  = document.getElementById('aboutToggle');

  if (!text || !btn) return;

  const labels = { more: 'Läs mer …', less: 'Visa mindre' };

  btn.addEventListener('click', () => {
    const expanded = text.classList.toggle('expanded');
    text.setAttribute('aria-expanded', expanded);
    btn.setAttribute('aria-expanded', expanded);
    btn.textContent = expanded ? labels.less : labels.more;
  });
})();
