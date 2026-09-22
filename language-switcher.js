window.initGoogleTranslate = function initGoogleTranslate() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,bn',
    autoDisplay: false
  }, 'google_translate_element');
};

document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.createElement('div');
  switcher.className = 'language-switcher';
  switcher.innerHTML = '<span class="language-label">Language</span><div id="google_translate_element"></div>';
  document.body.appendChild(switcher);
});
