# Marcell Faniszló — Portfolio

A responsive portfolio built with plain HTML, CSS and JavaScript. No build step or dependencies are required.

## Preview locally

Open `index.html` in a browser, or serve this directory with a local static server.

## Structure

- Home: introduction and four featured project areas linking to detailed work sections.
- Work: Professional Work, Independent Creative Production and Academic Research.
- Professional experience: Brainist (Yettel and BGYH client projects), DLX Media, Postareni.hu, Freelance — Digital Marketing & Web Solutions, and VMLY&R.
- About: interdisciplinary background and professional interests. VMLY&R is included under Professional Work.
- Skills and tools: capabilities grounded in the supplied work inventory.
- Contact: confirmed email and LinkedIn profile, plus GitHub.

Project details use same-page anchors so all content remains accessible without JavaScript. `script.js` updates the footer year.

## GitHub Pages

The intended repository is `marcell-faniszlo/portfolio`, served at `https://marcell-faniszlo.github.io/portfolio/`. In the repository's Settings → Pages, select the intended deployment branch and its root directory. Keep `index.html`, `styles.css` and `script.js` together at that root. Local assets use relative URLs to support the `/portfolio/` subpath.

No deployment, commit or push is performed as part of this content update.

## Information still needed

- Actual project visuals and approved external project links; the layout uses text summaries until actual assets are supplied.
- Specific contributions to the Brainist client project for Budapest Spas (BGYH), if a fuller account is desired.
- Thesis links and any research status, methods or findings to be shared beyond the supplied descriptions.
- Additional software tools, dates or experience details only after confirmation.

The GitHub profile link uses the username supplied in the repository URL. Review all content before publishing.

## Editorial layout and media desk

Yettel / Brainist leads the homepage, followed by asymmetric features for Cold Grey, DLX Media and academic research. The archive retains all experience and project descriptions, with supporting experience in native expandable sections. Direct fragment links open the relevant section when JavaScript is enabled. Project detail sections support galleries, video, role credits and evidence links. Empty media slots take up no space. Typographic production overviews remain available without JavaScript and do not represent actual project footage or screenshots.

### Preview

From this repository, run:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/`. Stop the server with Ctrl+C. You can also open `index.html` directly; no build, installation or account is required.

### Add actual project material

1. Put approved images and PDFs inside `assets/`, using simple filenames.
2. Edit the matching entry in `project-media.js`. There are separate entries for Yettel and BGYH, both displayed within Brainist. Keep absent media as `[]` or `null`.
3. Add image objects to `images` with `src` (relative asset path), descriptive `alt`, `caption`, and the image's actual `width` and `height`. Up to two valid images replace the corresponding homepage overview and form a layered composition. The lead feature uses Yettel images; research uses MSc images, then BA images. BGYH media stays in its own archive entry.
4. Set `video` to an object containing `url` (the actual YouTube or Vimeo watch/share URL) and a descriptive `title`. Cold Grey's video appears before its gallery, alongside the supplied writer, producer and co-director credits. Vimeo unlisted privacy hashes are supported. Videos are responsive and lazy-loaded, with no autoplay.
5. Add objects to `links` with descriptive `label` and `url` fields. Use these for published campaigns, live websites, video samples and thesis evidence. Each thesis has its own prominent evidence area: add its actual PDF, repository or GitHub link here. Relative PDF paths work under `/portfolio/`. Links open in the same tab.

Images load lazily. Galleries preserve image proportions; homepage covers use editorial crops that can be adjusted in `styles.css`. Earlier SVG placeholders remain under `assets/placeholders/` but are no longer displayed. No real project assets, thesis URLs or video IDs have been supplied yet. Do not replace these with unrelated stock images or fabricated evidence.

`assets/paper.svg` supplies the subtle paper texture. Font stacks preserve the existing bold sans-serif and Georgia identity without external font requests. Links use visible keyboard focus, mobile navigation has at least 44px height, and reduced-motion preferences disable smooth scrolling and hover transitions. Content is fully visible by default.
