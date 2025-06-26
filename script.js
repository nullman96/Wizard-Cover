document.addEventListener('DOMContentLoaded', function() {
  const waitlistForm = document.getElementById('waitlist-form');
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', function (event) {
      event.preventDefault(); 

      const emailInput = document.getElementById('email-input');
      const submitButton = waitlistForm.querySelector('button[type="submit"]');

      fetch(event.target.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(event.target)).toString(),
      })
      .then(response => {
          if (response.ok) {
              emailInput.style.display = 'none'; 
              submitButton.textContent = 'Thanks for joining!'; 
              submitButton.disabled = true; 
              console.log('Form submitted successfully');
          } else {
              throw new Error('Server responded with an error.');
          }
      })
      .catch((error) => {
        submitButton.textContent = 'Oops! Please try again.';
        submitButton.style.backgroundColor = '#d9534f'; 
        console.error('Form submission error:', error);
      });
    });
  }
});