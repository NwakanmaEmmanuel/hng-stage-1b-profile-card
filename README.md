# HNG Stage 1B — Testable Profile Card

## 🔗 Live Demo
[View Project](https://your-live-url-here)

## 📁 GitHub Repo
[View Repository](https://github.com/your-username/your-repo-name)

---

## 📌 Overview
A clean, accessible, responsive Profile Card built with plain HTML, CSS, and JavaScript as part of the HNG Internship Stage 1B task. Every visible element includes a `data-testid` attribute for automated testing.

---

## 🛠️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate into the folder:
   ```bash
   cd your-repo-name
   ```
3. Open `index.html` directly in your browser — no build step needed.

---

## 🧱 File Structure

```
├── index.html   — markup and structure
├── index.css    — all styling
├── index.js     — epoch time logic
└── README.md
```

---

## ✅ Required data-testid Checklist

| Element              | data-testid                        |
|---------------------|------------------------------------|
| Card container       | `test-profile-card`               |
| Name                 | `test-user-name`                  |
| Bio                  | `test-user-bio`                   |
| Epoch time           | `test-user-time`                  |
| Avatar image         | `test-user-avatar`                |
| Social links list    | `test-user-social-links`          |
| Twitter link         | `test-user-social-twitter`        |
| GitHub link          | `test-user-social-github`         |
| LinkedIn link        | `test-user-social-linkedin`       |
| Hobbies list         | `test-user-hobbies`               |
| Dislikes list        | `test-user-dislikes`              |

---

## 🔑 Design Decisions

- **Two-column layout on desktop** — avatar on the left, content on the right. Stacks vertically on mobile for clean responsive behavior.
- **`Date.now()` updates every 1000ms** — the `test-user-time` element shows the live epoch time in milliseconds, updated every second.
- **`aria-live="polite"` on the time element** — allows screen readers to announce time updates without interrupting the user.
- **SVG icons inline** — social link icons are inline SVGs so they render without any external dependency.
- **Semantic HTML throughout** — `<article>`, `<figure>`, `<figcaption>`, `<header>`, `<nav>`, `<section>` used correctly.

---

## ♿ Accessibility Notes

- Avatar has meaningful `alt` text describing the person.
- All links have `aria-label` attributes for screen reader clarity.
- Social links open in `target="_blank"` with `rel="noopener noreferrer"` for security.
- All interactive elements are keyboard-focusable with visible `:focus-visible` styles.
- Hobbies and Dislikes sections use `aria-labelledby` pointing to their respective headings.
- Color contrast meets WCAG AA for all text elements.
- `aria-live="polite"` on the epoch time element notifies screen readers of updates.

---

## ⚖️ Trade-offs

- Avatar uses a placeholder image URL — replace `src` in the `<img>` tag with your actual photo URL.
- No image upload UI — the spec allows a plain URL, which is what's implemented.
- Social links use placeholder `href` values — update with real profile URLs before submitting.

---

## ⚠️ Known Limitations

- Epoch time updates every 1000ms — there may be a rendering delta of up to ~1 second from true `Date.now()` at the moment of testing, which is within the spec's acceptable delta.
