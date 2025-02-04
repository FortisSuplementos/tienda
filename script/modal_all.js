const emergent = document.getElementById('accounts_emergent');
const openEmergBtn = document.getElementById('accounts');
const closeBtn = document.querySelector('.close-btn');

openEmergBtn.addEventListener('click', function() {
    emergent.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    emergent.style.display = 'none'
});

window.addEventListener('click', function(event) {
    if (event.target === emergent) {
        emergent.style.display = 'none'
    }
})
