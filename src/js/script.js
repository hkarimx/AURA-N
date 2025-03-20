Javascript: document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appointment-form");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();


      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const service = document.getElementById("service").value;


      if (!name || !email || !phone || !date || !time || !service) {
        alert("Vul alstublieft alle verplichte velden in.");
        return;
      }


      alert("Bedankt voor je aanvraag! We nemen spoedig contact met je op.");
      const confirmation = document.getElementById("confirmation");
      if (confirmation) confirmation.style.display = "block";
      form.reset();
    });
  }


  document.querySelectorAll(".btn-nav, .btn-primary")
    .forEach(button => {
      button.addEventListener("click", () => {
        console.log("Er is op een afspraak-knop geklikt!");
      });
    });
});