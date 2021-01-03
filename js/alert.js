// Variables
const bellContainer = document.querySelector('.bell-container');
const closeMessage = document.querySelector('.close-message');
const notifications = document.querySelector('.notifications');
const dot = document.querySelector('.dot');
const navigationLinks = document.querySelectorAll('.nav-container a');
const alert = document.getElementById("alert");


// Notification Bell
bellContainer.addEventListener('click', (e) => {
    const target = e.target;
    dot.style.display = 'none'; 
    $('.notifications').toggle();  
})

notifications.addEventListener('click', (e) => {
    const target = e.target;
    $('.notifications').toggle();  
});

// Navigation Links - Active status
navigationLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const navigationContainer = document.querySelector('.nav-container .active');      
      if (e.target.tagName === 'IMG') {
        navigationContainer.className = '';
        e.target.parentElement.className = 'active';
      }
      else {
        navigationContainer.className = ' ';
        e.target.className = 'active';
      }
    })
})