# SEO Change Log — Strategyverse

Running log of every SEO-related change, per the action plan's ground rules.

| Date | URL / File | Field | Old value | New value | Reason |
|------|-----------|-------|-----------|-----------|--------|
| 2026-11-09 | `/insights/` | 20 below-fold grid thumbnail `<img>` tags | no `loading` attribute | `loading="lazy"` added | Defer off-screen blog covers so the page no longer downloads ~23 heavy images at once. First 3 (above fold) left eager to protect LCP. (Phase 1.6) |
| 2026-11-09 | `.github/workflows/compress-images.yml` | new workflow | — | Auto-compress on push: JPEG → progressive q82 stripped; PNG → lossless | Blog covers were 500–940 KB each (1360×768). Recompression cuts them ~80% with no visible loss, on every push. Inactive until committed + pushed. (Phase 1.6) |

## Notes / items flagged (no change made)
- **4 Insights cards still use external Pexels URLs** instead of local signature covers: `service-pr-clients`, `whats-wrong-pr`, `truth-press-release`, `thought-leadership-program`. Inconsistent with the house cover style (CLAUDE.md). Candidate for a later content pass.
- **`.htaccess`** in repo root is inert on GitHub Pages (Nginx) — safe to delete; left in place pending approval.
- **www → apex 301** and all canonicals already correct; no change needed (Phase 1.1).
- The old PDF `/wp-content/uploads/.../How-to-select-a-PR-agency-3.pdf` already returns 404 (Phase 1.3 moot).
