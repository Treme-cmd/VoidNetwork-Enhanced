// favicon-handler.js
function initFavicon() {
    const savedFavicon = localStorage.getItem('selectedFavicon');
    const savedTitle = localStorage.getItem('selectedTitle');
    if (savedFavicon) {
        changeFavicon(savedFavicon, savedTitle);
    }
}

function changeFavicon(iconUrl, title) {
    // Change favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    favicon.href = iconUrl;
    
    // Change title
    if (title) {
        document.title = title;
    }
    
    // Save both to localStorage
    localStorage.setItem('selectedFavicon', iconUrl);
    localStorage.setItem('selectedTitle', title);
}

document.addEventListener('DOMContentLoaded', initFavicon);
