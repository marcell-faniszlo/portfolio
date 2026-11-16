'use strict';
document.getElementById('year').textContent = new Date().getFullYear();

// Project descriptions and native disclosures remain readable without JavaScript.
const media = window.projectMedia || {};
function safeURL(value) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value, document.baseURI);
    return ['https:', 'http:', 'file:'].includes(url.protocol) ? url : null;
  } catch { return null; }
}
function imageFigure(item) {
  const url = safeURL(item.src);
  if (!url || !item.alt) return null;
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  img.src = url.href;
  img.alt = item.alt;
  img.loading = 'lazy';
  img.decoding = 'async';
  img.width = item.width || 1200;
  img.height = item.height || 800;
  figure.append(img);
  if (item.caption) {
    const caption = document.createElement('figcaption');
    caption.textContent = item.caption;
    figure.append(caption);
  }
  return figure;
}
function videoFrame(video) {
  const url = safeURL(video?.url);
  if (!url || !video.title) return null;
  let src;
  const host = url.hostname.replace(/^www\./, '');
  if (['youtube.com', 'm.youtube.com', 'youtu.be'].includes(host)) {
    const id = host === 'youtu.be' ? url.pathname.slice(1) : url.searchParams.get('v') || url.pathname.match(/^\/(?:embed|shorts)\/([\w-]+)/)?.[1];
    if (/^[\w-]{11}$/.test(id || '')) src = `https://www.youtube-nocookie.com/embed/${id}`;
  } else if (['vimeo.com', 'player.vimeo.com'].includes(host)) {
    const id = url.pathname.match(/\/(\d+)(?:\/|$)/)?.[1];
    if (id) {
      const embed = new URL(`https://player.vimeo.com/video/${id}`);
      const hash = url.searchParams.get('h') || url.pathname.match(/\/\d+\/([a-zA-Z0-9]+)/)?.[1];
      if (hash) embed.searchParams.set('h', hash);
      src = embed.href;
    }
  }
  if (!src) return null;
  const frame = document.createElement('iframe');
  frame.src = src;
  frame.title = video.title;
  frame.loading = 'lazy';
  frame.allow = 'fullscreen; picture-in-picture; encrypted-media';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  const wrap = document.createElement('div');
  wrap.className = 'video-embed';
  wrap.append(frame);
  return wrap;
}
document.querySelectorAll('[data-project]').forEach(area => {
  const item = media[area.dataset.project];
  if (!item) return;
  const video = videoFrame(item.video);
  const figures = (item.images || []).map(imageFigure).filter(Boolean);
  if (video || figures.length) {
    area.querySelector('.evidence-placeholder')?.remove();
    if (figures.length) {
      const gallery = document.createElement('div');
      gallery.className = 'media-gallery';
      gallery.append(...figures);
      area.prepend(gallery);
    }
    if (video) area.prepend(video);
  }
  const links = (item.links || []).filter(link => safeURL(link.url) && link.label);
  if (links.length) {
    area.querySelector('.evidence-status')?.remove();
    const list = document.createElement('ul');
    list.className = 'evidence-links';
    links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = safeURL(link.url).href;
      a.textContent = link.label;
      li.append(a);
      list.append(li);
    });
    area.append(list);
  }
});
// Direct links into supporting experience disclose the target before scrolling.
function revealLinkedExperience() {
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  const disclosure = target?.closest('details');
  if (disclosure) {
    disclosure.open = true;
    target.scrollIntoView({ block: 'start' });
  }
}
window.addEventListener('hashchange', revealLinkedExperience);
revealLinkedExperience();
