const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
  tg.setHeaderColor?.('#f8eef0');
  tg.setBackgroundColor?.('#f8eef0');
}

const screens = [...document.querySelectorAll('.screen')];

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle('active', screen.id === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (tg?.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
}

document.addEventListener('click', event => {
  const screenButton = event.target.closest('[data-screen]');
  if (screenButton) showScreen(screenButton.dataset.screen);

  const homeButton = event.target.closest('[data-home]');
  if (homeButton) showScreen('home');

  const action = event.target.closest('[data-action]');
  if (!action) return;

  if (action.dataset.action === 'channel') {
    const url = 'https://t.me/svetakorean';
    if (tg?.openTelegramLink) tg.openTelegramLink(url); else window.open(url, '_blank');
  }

  if (action.dataset.action === 'contact') {
    const url = 'https://t.me/holana142';
    if (tg?.openTelegramLink) tg.openTelegramLink(url); else window.open(url, '_blank');
  }
});
