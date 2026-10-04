# a2rtech.com

The marketing website for a2rtech. Plain HTML and CSS — no build step, no framework, nothing to install. What's in this repository is exactly what gets served.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page |
| `about.html`, `services.html`, `approach.html`, `insights.html`, `contact.html` | Main pages |
| `privacy.html`, `terms.html` | Legal pages |
| `styles.css` | All styling for every page (colours, fonts, layout, dark mode) |
| `site.js` | Mobile menu and the "Copy address" button on the Contact page |
| `favicon.svg`, `logo.svg` | Logo mark (browser tab icon and site header) |
| `logo-full.svg` | Logo mark with the a2rtech wordmark, for documents, email signatures and social profiles |
| `og-image.png` | Preview image shown when a link is shared (1200 × 630) |
| `robots.txt`, `sitemap.xml` | For search engines |

## Making a change

**Small text change (easiest):** open the page on GitHub, click the pencil icon, edit the text, and commit. If the site is connected to the host (see below), it goes live within a minute or two.

**Bigger change:** clone the repository, edit the files in any text editor, preview locally, then commit and push.

### Preview locally

From this folder:

```
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser. Opening the `.html` files directly also works.

## Things to keep consistent

- **Navigation and footer are repeated on every page.** A new page, a changed contact detail or a renamed link has to be updated in all eight HTML files. Search the whole folder for the old text to find every copy.
- **Contact details** (email `hello@a2rtech.com`, WhatsApp `+1 (346) 583-0944`) appear in the footer of every page, on Contact, in the call-to-action bands on Home and About, and in the Contact page's `<meta name="description">`.
- **Colours** are defined once, at the top of `styles.css` (`--accent`, `--ink`, etc.), with a second set for dark mode. Change them there, not in individual rules.
- **Page addresses:** the host serves pages without `.html` (e.g. `a2rtech.com/about`). Canonical links, `og:url` tags and `sitemap.xml` use that form. Links between pages use `about.html` so they also work when previewing locally — keep both conventions.
- **Adding a page:** copy an existing page as the template, update its `<title>`, description, canonical and `og:` tags, set `aria-current="page"` on its nav link, add it to the nav/footer of every page if it should appear there, and add it to `sitemap.xml`.
- **Legal pages:** update the "Last updated" date at the top whenever the wording changes.

## Hosting

The live site is served through Cloudflare. Until this repository is connected to the host, pushing here does **not** change the live site — upload the files to Cloudflare as before.

To make pushes go live automatically, create a Cloudflare Pages project from this repository with no build command and the repository root as the output directory, then move the `a2rtech.com` custom domain to it. (A Pages project that was originally created by uploading files can't be switched to Git later — Cloudflare requires a new project for that.)
