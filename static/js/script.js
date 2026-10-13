/* ZYYO homepage adaptation: only an optional, accessible theme preference.
   No analytics, remote calls, cookies or continuous animation. */
(() => {
    const root = document.documentElement;
    const button = document.querySelector('[data-theme-toggle]');
    if (!button) return;

    const isChinese = root.lang === 'zh-Hant';
    let remembered = null;
    try { remembered = localStorage.getItem('czp-theme'); } catch (_) { /* Storage may be unavailable. */ }
    let dark = remembered === 'dark' || (remembered !== 'light' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    function applyTheme() {
        root.dataset.theme = dark ? 'dark' : 'light';
        button.setAttribute('aria-pressed', String(dark));
        button.textContent = isChinese ? (dark ? '深色模式' : '淺色模式') : (dark ? 'Dark mode' : 'Light mode');
        button.setAttribute('aria-label', isChinese ? '切換深色模式' : 'Toggle dark mode');
    }

    button.addEventListener('click', () => {
        dark = !dark;
        applyTheme();
        try { localStorage.setItem('czp-theme', dark ? 'dark' : 'light'); } catch (_) { /* Theme still works without storage. */ }
    });
    applyTheme();
    button.hidden = false;
})();
