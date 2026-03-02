document.addEventListener('DOMContentLoaded', () => {

  const widgetHTML = `
      <!-- Chat Widget FAB -->
      <div class="chat-widget-fab" id="chatFab">
        <svg class="chat-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg class="close-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
  
      <!-- Contact Options Container -->
      <div class="chat-widget-container contact-mode" id="chatContainer">
        <!-- Header -->
        <div class="chat-header">
           <div class="chat-header-info">
             <h3>Contact Us</h3>
             <p>Choose your preferred method</p>
           </div>
        </div>

        <!-- Contact Links List -->
        <div class="contact-links-list">
           <!-- Phone / Text -->
           <a href="tel:+13257160352" class="contact-link-item">
             <div class="icon-circle phone">📞</div>
             <div class="link-details">
               <span class="link-title">Call or Text Us</span>
               <span class="link-sub">+1 (325) 716-0352</span>
             </div>
           </a>

           <!-- Email -->
           <a href="mailto:frank@bulletproof-floors.com" class="contact-link-item">
             <div class="icon-circle email">✉️</div>
             <div class="link-details">
               <span class="link-title">Send an Email</span>
               <span class="link-sub">frank@bulletproof-floors.com</span>
             </div>
           </a>


        </div>
      </div>
    `;

  const div = document.createElement('div');
  div.innerHTML = widgetHTML;
  document.body.appendChild(div);

  const fab = document.getElementById('chatFab');
  const container = document.getElementById('chatContainer');
  let isOpen = false;

  fab.addEventListener('click', () => {
    isOpen = !isOpen;
    fab.classList.toggle('active', isOpen);
    container.classList.toggle('active', isOpen);
  });
});
