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

// Navigation Links
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



// // create the html for the banner
// let alertBanner.innerHTML =
//     `
//     <div class="alert-banner">
//         <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
//         <p class="alert-banner-close">x</p>
//     </div>
//     `
//     alertBanner.addEventListener('click', e => {
//         const element = e.target;
//         if (element.classList.contains("alert-banner-close")) {
//             alert.style.display = "none"
//         }
//     })