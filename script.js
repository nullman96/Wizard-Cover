  document.addEventListener('DOMContentLoaded', function() {
      
      const waitlistForm = document.getElementById('waitlist-form');
      
      async function handleSubmit(event) {
        event.preventDefault();
        const submitButton = waitlistForm.querySelector('button[type="submit"]');
        const emailInput = document.getElementById('email-input');
        const data = new FormData(event.target);
        
        try {
          const response = await fetch(event.target.action, {
            method: waitlistForm.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
          });

          if (response.ok) {
            emailInput.style.display = 'none'; 
            submitButton.textContent = 'Thanks for joining!'; 
            submitButton.disabled = true;
            console.log('Form submitted successfully to Formspree');
          } else {
            throw new Error('Network response was not ok.');
          }
        } catch (error) {
          submitButton.textContent = 'Oops! Please try again.';
          submitButton.style.backgroundColor = '#d9534f'; 
          console.error('Form submission error:', error);
        }
      }
      
      if (waitlistForm) {
        waitlistForm.addEventListener("submit", handleSubmit)
      }
    });