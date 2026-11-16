# Portfolio design

The approved direction is a professional monochrome production portfolio. The page leads with relevant work, follows with expandable experience, education and research, then contact. The archive and independent projects follow the contact point.

## Visual system

- Background: white (`#ffffff`); opening: near black (`#111111`); secondary surface: neutral gray (`#f5f5f5`).
- Main text: `#111111`; secondary text: `#5c5c5c`; rules: `#d8d8d8`. No neon, rust accents, paper textures or rotated compositions.
- Typography: Helvetica Neue, Helvetica, Arial, sans-serif. Weight 600 for headings; body 16px with 1.65 line height. Display heading is fluid from 44px to 88px, with smaller mobile sizing.
- Layout: 1184px maximum content width; 96px desktop total gutters, 40px mobile total gutters. Project and experience sections share a 280px context column and flexible content column, separated by 64px. Below 720px, content becomes a single column in DOM order.
- Spacing scale: 8, 16, 24, 32, 48, 64 and 96px. Major sections use 96px vertical padding on desktop and 56px on mobile.

## Behavior and content

Selected projects are visible without clicks. Native details/summary controls disclose experience and archive entries. Experience controls share an exclusive group, with Brainist initially open. Native keyboard behavior and visible focus are preserved. Direct links disclose their target archive entry. Reduced motion disables smooth scrolling.

Employment dates and chronological ordering remain unasserted until confirmed. Project media and external work links come from project-media.js; empty slots are hidden. Actual media is not replaced with stock imagery or fabricated project evidence.
