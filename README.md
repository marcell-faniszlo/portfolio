# Marcell Faniszló — Portfolio

A responsive portfolio built with plain HTML, CSS and JavaScript. No build step or dependencies are required.

## Preview locally

Open `index.html` in a browser, or serve this directory with a local static server.

## Structure

1. Selected work: Brainist productions for Yettel and Budapest Spas, then freelance digital marketing and WordPress work.
2. Experience: five expandable role rows for Brainist, Freelance, DLX Media, Postareni.hu and VMLY&R. One row opens at a time in supporting browsers. Dates and chronology are not asserted because confirmed employment dates have not been supplied.
3. Education and research: each degree is paired with its thesis.
4. Contact: confirmed email, LinkedIn and GitHub links.
5. Archive: supporting professional work, personal productions, project links and tools.

Native disclosures work with mouse, keyboard and without JavaScript. Fragment links into closed archive entries open the entry through `script.js`, which also updates the footer year and inserts optional project media.

## GitHub Pages

The intended repository is `marcell-faniszlo/portfolio`, served at `https://marcell-faniszlo.github.io/portfolio/`. In the repository's Settings → Pages, select the intended deployment branch and its root directory. Keep `index.html`, `styles.css` and `script.js` together at that root. Local assets use relative URLs to support the `/portfolio/` subpath.

No deployment, commit or push is performed as part of this content update.

## Information still needed

- Actual project visuals and approved external project links; the layout uses text summaries until actual assets are supplied.
- Specific contributions to the Brainist client project for Budapest Spas (BGYH), if a fuller account is desired.
- Thesis links and any research status, methods or findings to be shared beyond the supplied descriptions.
- Additional software tools, dates or experience details only after confirmation.

The GitHub profile link uses the username supplied in the repository URL. Review all content before publishing.

## Studio layout and media desk

The page uses black, white and neutral gray, consistent column alignment and simple rules. Professional projects remain visible without interaction. A vertical experience rail uses native `details` controls, and personal work sits below contact in the archive. Empty media slots take up no space; no simulated screenshots or decorative project posters are displayed.

### Preview

From this repository, run:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/`. Stop the server with Ctrl+C. You can also open `index.html` directly; no build, installation or account is required.

### Add actual project material

1. Put approved images and PDFs inside `assets/`, using simple filenames.
2. Edit the matching entry in `project-media.js`. There are separate entries for Yettel and BGYH, both displayed within Brainist. Keep absent media as `[]` or `null`.
3. Add image objects to `images` with `src` (relative asset path), descriptive `alt`, `caption`, and the image's actual `width` and `height`. Images appear in the matching project’s gallery. Yettel, BGYH, freelance and both theses have media slots in the main page; other projects have slots in their archive entries.
4. Set `video` to an object containing `url` (the actual YouTube or Vimeo watch/share URL) and a descriptive `title`. Cold Grey's video appears before its gallery, alongside the supplied writer, producer and co-director credits. Vimeo unlisted privacy hashes are supported. Videos are responsive and lazy-loaded, with no autoplay.
5. Add objects to `links` with descriptive `label` and `url` fields. Use these for published campaigns, live websites, video samples and thesis evidence. Each thesis has its own prominent evidence area: add its actual PDF, repository or GitHub link here. Relative PDF paths work under `/portfolio/`. Links open in the same tab.

Images load lazily. Galleries preserve image proportions and collapse to one column on mobile. Earlier SVG placeholders remain under `assets/placeholders/` but are no longer displayed. No real project assets, thesis URLs or video IDs have been supplied yet. Do not replace these with unrelated stock images or fabricated evidence.

The previous paper texture and SVG placeholders remain in `assets/` but are not displayed. Typography uses the existing local sans-serif stack. Links have visible keyboard focus, header navigation has 44px minimum target height, and reduced-motion preferences disable smooth scrolling. No content depends on an entrance animation.

### Verification

The studio layout was inspected in headless Edge at 1440px and 390px widths. Checks covered horizontal overflow, header navigation target height, mouse and Enter-key disclosure activation, exclusive role expansion, and direct links opening archive entries. HTML structure, internal destinations and JavaScript syntax were also checked.
