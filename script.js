const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

function activateTab(panelId) {
    tabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.panel === panelId);
    });
    panels.forEach(panel => {
        panel.classList.toggle('active', panel.id === panelId);
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activateTab(tab.dataset.panel);
    });
});

const tabOrder = ['about', 'science', 'design', 'links'];
let currentIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % tabOrder.length;
        activateTab(tabOrder[currentIndex]);
    }

    if (e.key === 'q') {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.4s';
    }
})
