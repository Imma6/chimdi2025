const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      statusMessage.textContent = "Thank you! Your message has been sent.";
      form.reset();
    } else {
      statusMessage.textContent = "Oops! Something went wrong. Please try again.";
    }
  } catch (error) {
    statusMessage.textContent = "There was an error sending your message.";
  }
});



    // Set the date you're counting down to
    const targetDate = new Date("2025-11-28T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        document.querySelector('.countdown').innerHTML = "EXPIRED";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);


    // Set the date you're counting down to
    const mainDate = new Date("2025-11-28T23:59:59").getTime();

    const upliftCountdown = () => {
      const now = new Date().getTime();
      const distance = mainDate - now;

      if (distance < 0) {
        document.querySelector('.countdownnn').innerHTML = "EXPIRED";
        return;
      }

      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("day").textContent = day;
      document.getElementById("hour").textContent = hour;
      document.getElementById("minute").textContent = minute;
      document.getElementById("second").textContent = second;
    };

    upliftCountdown();
    setInterval(upliftCountdown, 1000);
