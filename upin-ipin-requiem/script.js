// Upin Ipin Effects
window.addEventListener('load', () => {
  // Confetti on load
  for(let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed; width: 10px; height: 10px;
        background: ${['#ff6b6b','#4ecdc4','#ffeaa7','#fdcb6e'][Math.floor(Math.random()*4)]};
        left: ${Math.random()*100}vw; top: -10px;
        animation: fall ${2+Math.random()*3}s linear forwards;
        border-radius: 50%; pointer-events: none; z-index: 999;
      `;
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }, i*100);
  }
});

const style = document.createElement('style');
style.textContent = `
  @keyframes fall {
    to { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Play audio on click
document.querySelector('.audio-player').addEventListener('click', (e) => {
  if(e.target.tagName !== 'AUDIO') e.target.play();
});

// Hover effects
document.querySelectorAll('section').forEach(sec => {
  sec.addEventListener('mouseenter', () => sec.style.transform = 'scale(1.02)');
  sec.addEventListener('mouseleave', () => sec.style.transform = 'scale(1)');
});
