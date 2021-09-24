const details = document.querySelectorAll('details');
details.forEach((item) => {
    item.addEventListener('toggle', toggleOneAnswer);
});

function toggleOneAnswer(e) {
    if (this.open) {
        details.forEach(item => {
            if (item != this && item.open) item.open = false;
        })
    }
};

