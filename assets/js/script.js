
function toggleMenu() {
    const topnav = document.getElementById("myTopnav");
    const bar = document.getElementById("bar");

    topnav.classList.toggle("responsive");
    bar.classList.toggle("fa-bars");
    bar.classList.toggle("fa-times");
}

function handleScroll() {
    const goToTopButton = document.getElementById('goToTopButton');
    const scrollPositionThreshold = 300;

    if (window.scrollY > scrollPositionThreshold) {
        goToTopButton.style.display = 'block';
    } else {
        goToTopButton.style.display = 'none';
    }
}

function highlightActiveNavLink() {
    const navLinks = document.querySelectorAll('#myNav .nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const isCurrentPage = currentPath.endsWith(linkHref);

        if (isCurrentPage) {
            link.classList.add('active', 'text-white');
            link.classList.remove('text-black');
        } else {
            link.classList.remove('active', 'text-white');
            link.classList.add('text-black');
        }
    });
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
    highlightActiveNavLink();
});

window.addEventListener('scroll', handleScroll);


function share(){
        // You can customize the text and link as needed
        var text = "Download Helpdesk : The App which change your life";
        var url = "https://helpdesk.en.uptodown.com/android";
  
        // Create the WhatsApp share link
        var whatsappLink = "https://api.whatsapp.com/send?text=" + encodeURIComponent(text + " " + url);
  
        // Open the WhatsApp share link in a new window
        window.open(whatsappLink, "_blank");
      
}
// function createPopup() {
//     var popupDiv = document.createElement('div');
//     popupDiv.id = 'popup';
//     popupDiv.classList.add('popup');

//     var closeButton = document.createElement('span');
//     closeButton.innerHTML = '&times;';
//     closeButton.classList.add('close-btn');
//     closeButton.onclick = closePopup;
    
//     var heading = document.createElement('h2');
//     heading.textContent = 'Happy Holi!';

//     var paragraph = document.createElement('p');
//     paragraph.textContent = 'Wishing you a colorful and joyful Holi celebration!';

//     popupDiv.appendChild(closeButton);
//     popupDiv.appendChild(heading);
//     popupDiv.appendChild(paragraph);

//     document.body.appendChild(popupDiv);

//     // Display the popup
//     popupDiv.style.display = 'block';
// }

// // Function to close the popup
// function closePopup() {
//     var popupDiv = document.getElementById('popup');
//     if (popupDiv) {
//         popupDiv.style.display = 'none';
//     }
// }

// // Create and display the popup when the page loads
// window.onload = createPopup;

function openLeftSidebar() {
    document.getElementById("leftSidebar").style.width = "250px";
}

function closeLeftSidebar() {
    document.getElementById("leftSidebar").style.width = "0";
}



function deleteAllCookies() {
    // Get all cookies
    const cookies = document.cookie.split(";");

    // Loop through all cookies
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

        // Set cookie expiration date to a past date to delete it
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

// Call the function to delete all cookies
// deleteAllCookies();
