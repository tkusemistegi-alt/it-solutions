const langSwitch = document.getElementById('langSwitch');
let currentLang = 'ru';
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-ru][data-kk]').forEach(el => {
    const value = el.dataset[lang];
    if (value !== undefined) el.innerHTML = value;
  });
  langSwitch.textContent = lang === 'ru' ? 'ҚАЗ' : 'РУС';
}
langSwitch.addEventListener('click', () => setLanguage(currentLang === 'ru' ? 'kk' : 'ru'));
document.getElementById('year').textContent = new Date().getFullYear();
