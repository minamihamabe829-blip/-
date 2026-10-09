const scatters = document.querySelectorAll('.scatter');

function moveScatter(scatter) {
  const margin = 24;
  const maxLeft = Math.max(margin, window.innerWidth - scatter.offsetWidth - margin);
  const maxTop = Math.max(margin, window.innerHeight - scatter.offsetHeight - margin);

  scatter.style.left = `${margin + Math.random() * (maxLeft - margin)}px`;
  scatter.style.top = `${margin + Math.random() * (maxTop - margin)}px`;
}

function moveAllScatters() {
  scatters.forEach(moveScatter);
}

scatters.forEach(scatter => {
  const image = scatter.querySelector('img');

  if (image.complete) {
    moveScatter(scatter);
  } else {
    image.addEventListener('load', () => moveScatter(scatter), { once: true });
  }
});

setInterval(moveAllScatters, 1000);
window.addEventListener('resize', moveAllScatters);
