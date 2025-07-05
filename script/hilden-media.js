  const form = document.querySelector(".contact-section form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      openModal();
    } else {
      alert("Ett fel uppstod. Försök igen senare.");
    }
  });

  function openModal() {
    document.getElementById("thankYouModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("thankYouModal").style.display = "none";
  }

  window.onclick = function(event) {
    const modal = document.getElementById("thankYouModal");
    if (event.target === modal) {
      closeModal();
    }
  }
