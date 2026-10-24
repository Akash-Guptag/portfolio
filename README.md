# Akash Gupta — AI Product Manager & Builder

A responsive portfolio rebuilt from the existing React 18 / Create React App repository. The supplied **Akash_Gupta_Application_Executive (2).pdf** is the content authority; the original PDF is available at `public/Akash-Gupta-Resume.pdf`.

## Run locally

Use Node.js 22 LTS or a compatible recent Node release with npm. The rebuild was verified with Node 25.2.1 and npm 11.6.2.

```sh
npm ci --legacy-peer-deps
npm start
```

Open http://localhost:3000. The legacy-peer-deps flag accommodates the original dependency tree.

```sh
npm run build
CI=true npm test -- --watchAll=false --runInBand
```

To preview the production output:

```sh
python3 -m http.server 3000 --bind 127.0.0.1 --directory build
```

## Architecture and changes

- Preserved React 18, react-scripts 5, the original npm lockfile and local Centra fonts.
- Replaced the active page in `src/App.js`, with focused `Workflow`, `ProjectArt` and `Arrow` components. Content is directly editable here.
- Rebuilt responsive styles in `src/App.css` and foundation/font styles in `src/index.css`.
- Removed Bootstrap, carousel, animation-library and viewport-tracker imports from the active page. Existing unused legacy components and assets remain in the repository for reference but are not loaded by the page.
- Replaced the localhost-only contact form with verified email and LinkedIn links. No backend or credentials are required. The old `server/` directory is unused.
- Added a three-state illustrative workflow, native expandable Redcell context, mobile navigation, section anchors and résumé link.
- Updated metadata, title and SVG favicon in `public/`.
- Replaced the stale starter test with workflow, navigation and destination checks.

## Content boundaries

ModelsLab Product Manager, Jan 2023–present; Redcell is explicitly in development. Image/video products are described as shipped, and marketing/testing agents as built. No numeric outcome claims, invented client names, project URLs or unsupported tools have been added. The 24-hour figure is a launch **target**, not an asserted delivery result. Diagram content is illustrative, not a live agent or product screenshot. Project metrics and case-study links can be added once verified.

## Accessibility and performance

Semantic landmarks and heading hierarchy, skip link, visible focus outlines, keyboard-operable native controls, expanded/pressed states, an announced workflow caption, and reduced-motion support. Layout adapts to phone, tablet and desktop. Project visuals are CSS. The hero uses a portrait cutout; Centra and the OFL-licensed Anton display font are served locally. No new runtime dependencies, external font service, tracking or API calls.

Production build: approximately 50 kB gzipped main JavaScript and 5 kB CSS. The inherited Create React App toolchain emits old Browserslist/Babel maintenance warnings; build and tests pass. Modernizing that toolchain can be a separate change.

## Delivery status

Source repository: https://github.com/Akash-Guptag/portfolio.git. Deployment is managed separately from source updates. Production files are generated in `build/`. See the accompanying preview screenshots for the reviewed design.

## Reference-led visual redesign

Dark charcoal and warm gold, condensed Anton typography, the supplied portrait layered over an oversized title, numbered section navigation, four project concept visuals, expandable project context and responsive contact section. Content remains résumé-based.

Portrait asset: `public/images/akash-cutout.png`. Prepared with the built-in image generation/editing tool from the supplied Professional Office Headshot (1).png. Prompt: “Use case: background-extraction. Edit target: provided professional portrait. Remove the office background and chair entirely, producing a clean transparent-background cutout of the same man, hair, face, black jacket and white shirt. Preserve the exact facial identity, pose, expression, hair, beard, lighting and clothing. Do not beautify, restyle or alter his face. Retain the head and visible torso at the original crop, with natural detailed hair edges. No text, no additions. This is for layering over a dark portfolio hero.”
