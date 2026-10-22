/* Progressive enhancement only. Content, navigation and downloads are ordinary HTML. */
(() => {
  'use strict';
  const topics = [...document.querySelectorAll('[data-topic]')];
  const articles = [...document.querySelectorAll('[data-article]')];
  const query = new URLSearchParams(location.search);
  const knownTopic = key => articles.some(article => article.dataset.article === key);
  const hashTopic = location.hash.replace('#article-', '');
  let current = knownTopic(hashTopic) ? hashTopic : knownTopic(query.get('topic')) ? query.get('topic') : document.documentElement.dataset.defaultTopic;
  function updateLanguageLinks() {
    document.querySelectorAll('[data-language-link]').forEach(link => {
      const url = new URL(link.getAttribute('href'), location.href);
      url.searchParams.set('topic', current);
      if (query.get('entry') === 'welcome') url.searchParams.set('entry', 'welcome');
      url.hash = location.hash;
      link.href = url.href;
    });
  }
  function showArticle(key, focus = false, updateURL = false) {
    if (!knownTopic(key)) return;
    current = key;
    articles.forEach(article => { article.hidden = article.dataset.article !== key; });
    topics.forEach(link => {
      if (link.dataset.topic === key) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    if (updateURL) {
      const url = new URL(location.href);
      url.searchParams.set('topic', key);
      // The URL points to a real anchor and still works when JavaScript is disabled.
      url.hash = `article-${key}`;
      history.replaceState(null, '', url);
    }
    updateLanguageLinks();
    if (focus) document.querySelector(`#title-${key}`).focus({ preventScroll: true });
  }
  showArticle(current);
  topics.forEach(link => link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    showArticle(link.dataset.topic, true, true);
  }));
  window.addEventListener('hashchange', () => {
    const key = location.hash.replace('#article-', '');
    if (knownTopic(key)) showArticle(key);
    else updateLanguageLinks();
  });
  window.addEventListener('popstate', () => {
    const url = new URL(location.href);
    const key = url.hash.replace('#article-', '');
    showArticle(knownTopic(key) ? key : knownTopic(url.searchParams.get('topic')) ? url.searchParams.get('topic') : document.documentElement.dataset.defaultTopic);
  });
  if (query.get('entry') === 'welcome') {
    document.querySelector('[data-welcome]').hidden = false;
    requestAnimationFrame(() => {
      const welcome = document.getElementById('welcome-title');
      welcome.focus({ preventScroll: true });
      document.getElementById('practice').scrollIntoView({ behavior: 'instant' });
    });
  }
  const dialog = document.querySelector('.install-dialog');
  let opener;
  if (typeof dialog.showModal === 'function') {
    document.querySelectorAll('[data-open-install]').forEach(link => link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      dialog.showModal();
    }));
    dialog.querySelector('[data-close-install]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => { if (opener?.isConnected) opener.focus({ preventScroll: true }); });
  }
  // Escape and outside clicks close the language menu without trapping navigation.
  const menu = document.querySelector('.language-menu');
  document.addEventListener('click', event => { if (!menu.contains(event.target)) menu.open = false; });
  menu.addEventListener('keydown', event => { if (event.key === 'Escape') { menu.open = false; menu.querySelector('summary').focus(); } });
})();
