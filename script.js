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
        waitlistForm.style.display = 'none';
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Thanks for joining. We will let you know when we are live!';
        successMessage.className = 'form-success-message'; 
        waitlistForm.parentNode.appendChild(successMessage);

        console.log('Form submitted successfully to Formspree');
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