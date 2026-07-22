# Haus of Craft Portfolio 2.0

디자이너 panda의 포트폴리오 사이트 2.0 작업 폴더입니다.  
목표는 Figma 디자인을 순수 HTML/CSS/JavaScript로 직접 구현하고, 이후 GitHub와 Vercel을 통해 배포하는 것입니다.

## Project

- 이름: Haus of Craft
- 유형: UI/UX/BI 디자인 포트폴리오 원페이지 사이트
- 구조: Hero -> About -> Works -> Footer
- 디자인 기준: Figma 1920px 데스크톱 화면
- 기술 스택: HTML, CSS, JavaScript
- 개발 방식: 프레임워크 없이 기본기를 익히는 학습 중심 작업

## Folder Structure

```text
020_portfolio-2.0/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── bg_front.png
│   ├── bg_img.png
│   ├── circle-logo.svg
│   └── work-minibook.png
├── fonts/
│   ├── Interop-Light.woff2
│   ├── Interop-Regular.woff2
│   ├── Interop-Medium.woff2
│   └── Interop-SemiBold.woff2
├── GUIDE.md
└── HANDOFF.md
```

## Current Status

### Done

- Hero section
  - Header logo marquee
  - Tagline marquee
  - `mix-blend-mode: difference`
  - Rotating circle logo SVG
  - Background/front image layering
  - Language buttons and copyright text positioning

- About section
  - Two-column layout
  - 1:2 column ratio
  - Border and spacing structure
  - Bottom-aligned body text and list area

- Works section, mostly done
  - Two-column layout
  - Title and up/down button row
  - Subtitle group
  - Bullet list
  - Body description
  - Three image elements are already in HTML

### In Progress

The next main task is the Works image card styling.

Current CSS has this selector:

```css
.works-img {
  border-radius: 16px;
  width: auto;
  ratio: 1 / 1.27;
}
```

The important correction is that `ratio` is not a valid CSS property.  
The next version should use `aspect-ratio`, with `width: 100%` and `object-fit: cover`.

Before writing the final rule, decide the card ratio:

- Original image ratio: `900 / 704`
- Figma card ratio: use the measured Figma card size if the design intentionally crops the image

## Next Steps

1. Decide the Works card ratio from Figma.
2. Update `.works-img` using `width`, `aspect-ratio`, `object-fit`, and `border-radius`.
3. Check whether `.works { height: 1200px; }` still works after responsive image sizing.
4. Clean up small Works layout decisions:
   - Decide whether to keep `flex: 1` on the subtitle/list/body blocks or use `justify-content: space-between`.
   - Keep related `.works-subtitle-container` rules easy to read.
5. Build Footer CSS.
6. Add responsive layout with media queries.
7. Start JavaScript:
   - Works up/down project switching
   - Korean/Chinese/English language switching
8. Optimize large images, especially `bg_img.png`.
9. Deploy through GitHub and Vercel.

## Design Notes

- Background: `#ebebeb`
- Border: `1px solid #666`
- Main text: `#1a1a1a`, `#333`, `#666`
- Display font: GabiaDunn
- Body font: Interop
- Common spacing: `24px`
- Common layout pattern: two-column sections with borders

## Learning Notes

Concepts already practiced:

- Semantic HTML
- CSS variables
- `@font-face`
- Flexbox
- `position: relative` / `absolute`
- `z-index`
- `calc()`
- `@keyframes`
- Marquee animation pattern
- `mix-blend-mode`
- CSS selectors
- `line-height` vs `height`
- `object-fit`
- `aspect-ratio`

Still upcoming:

- Media queries
- JavaScript DOM control
- Hover and transition interactions
- GitHub / Vercel deployment

## Development

Open `index.html` with VS Code Live Server.  
The project is intentionally kept as plain HTML/CSS/JS so the implementation remains easy to inspect while learning.

## Notes for AI Assistants

This project is being built as a coaching exercise. The user writes the code directly.  
When helping, prefer concept explanations, hints, and code review over pasting full completed solutions.

For detailed handoff context, read `HANDOFF.md`.
For the broader learning roadmap, read `GUIDE.md`.
