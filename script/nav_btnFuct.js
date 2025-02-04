document.addEventListener('DOMContentLoaded', function() {
    const buttons = { 
        homebtn: { url: 'index.html', section: 'home'},
        buybtn: { url: 'store.html', section: 'home'},
        contactbtn: { url: 'contact.html', section: 'home'}
    };
    Object.keys(buttons).forEach(btnId => {
        const btn = document.getElementById(btnId);
        const {url, section } = buttons[btnId];

        btn.addEventListener('click', function() {
            const currentUrl = window.location.pathname;
            if (currentUrl.endsWith(url)) {
                document.getElementById(section).scrollIntoView({behavior: 'smooth'});
            } else {
                window.location.href = `${url}#${section}`;
            }
        });
    });
});
