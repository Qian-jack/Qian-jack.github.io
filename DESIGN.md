# Design System: Five Elements Mood Fragrance
**Project ID:** 15111105433440753655

## 1. Visual Theme & Atmosphere
This design system embodies a **Luxury Minimalist Editorial** aesthetic, specifically tailored for a high-end wellness and fragrance brand. The brand personality is serene, intellectual, and deeply rooted in a modern interpretation of traditional Eastern philosophy. It aims to evoke a sense of "quiet luxury"—where the absence of noise allows the quality of the content and the "scent" of the brand to permeate. The style leverages Advanced Editorial Minimalism, characterized by expansive airy whitespace, a sophisticated use of vertical typography, and subtle textural depth to mimic the organic feel of high-grade washi paper or sun-bleached stone, ensuring the interface feels tactile rather than clinical.

## 2. Color Palette & Roles
- **Scholarly Teal / Wood (#108474):** Used as the primary brand color (`primary-container`), focus states, and primary actions.
- **Pristine White / Background (#fcf9f8):** Serves as the primary surface and background, providing an expansive canvas for luxury minimalism.
- **Deep Charcoal / Text (#1c1b1b):** Used for primary typography (`on-surface`), ensuring maximum legibility and high-contrast sophistication against the light surfaces.
- **Sun-baked Terracotta / Fire (#984630):** Applied sparingly as an accent (`secondary`) for secondary actions or specific scent family highlights.
- **Soft Sandy Ochre / Earth (#715930):** Used for categorization tags and subtle highlights (`tertiary`) representing the Earth element.
- **Deep Indigo / Water (#77d7c5):** Used as a complementary accent color (`inverse-primary`) indicating water elements.
- **Cool Silver-Grey / Outline (#bdc9c5):** Used for extremely thin horizontal lines (`outline-variant`), borders, and structural outlines without adding visual clutter.

## 3. Typography Rules
- **Headings (Montserrat):** Provides a heavy, grounded structure. Used for displays and headlines (`display-lg` at 64px, `headline-lg` at 40px, `headline-md` at 24px) with bold weights (700). Headings utilize generous leading (1.1 - 1.3) and occasional tight tracking adjustments (-0.02em) for a high-end "gallery" feel.
- **Body Text (Source Sans 3):** Offers a clean, humanist sans-serif experience that remains legible in long-form editorial pieces. The font weights are normal (400), and the line height is intentionally spacious (1.7–1.8) to maintain the "airy" feel throughout the body content.
- **Auxiliary Labels (Assistant):** Used for navigation, overlines, and small metadata. Uses a light weight (300) with increased letter spacing (0.1em) and smaller size (`label-sm` at 12px) to add a delicate, elevated touch.

## 4. Component Stylings
- **Buttons:** Primary buttons are solid Deep Charcoal (#1c1b1b) with pristine white text, featuring a subtle lift on hover. Secondary buttons use a fine 1px border with no background. All buttons utilize the `label-sm` typography style for an elegant, understated look. Corner roundness is minimal (0.25rem / 4px) to take the "edge" off the minimalism without losing architectural structure.
- **Cards/Containers:** Borderless surfaces with a very soft ambient shadow on hover. Images within cards should have a slight "zoom" (scale) effect when interacted with. Container radii are typically slightly larger (0.5rem / 8px) to evoke the organic smoothness of fragrance bottles or stones.
- **Inputs/Forms:** Employs minimalist "bottom-border only" styling or very light-grey backgrounds. Focus states use the Scholarly Teal (#108474) for a thin bottom highlight.
- **Chips/Tags:** Pill-shaped (`rounded-full`) used for "Element" categorization. These feature a very pale background tint of the element color (e.g., 10% opacity) and dark text.
- **Editorial Dividers:** Utilizes extremely thin (0.5px) horizontal lines in Cool Silver-Grey (#bdc9c5) or whitespace alone to separate content.

## 5. Layout Principles
- **Grid Strategy:** This design system utilizes a Fixed Grid approach for desktop to maintain the integrity of white space, switching to a Fluid Grid for mobile devices. Desktop features a 12-column grid with a maximum width of 1440px. 
- **Margins & Gutters:** Gutters are kept tight (24px), but outer margins are expansive (80px+) to frame the content like a luxury magazine.
- **Whitespace & Rhythm:** Vertical rhythm is dictated by large "breathing rooms." Gaps between major sections should be significant (120px on desktop) to allow the eye to rest.
- **Asymmetry:** Asymmetrical layouts—such as images spanning 7 columns and text spanning 4 columns with a 1-column offset—are highly encouraged to reinforce the high-end editorial feel.
- **Elevation & Depth:** Hierarchy is achieved through Ambient Shadows and Tonal Layering rather than heavy borders. Shadows use extremely diffused, large-radius blurs with low opacity (3-5%), slightly tinted with the Primary color (#108474) to avoid "dirty" grey shadows and maintain a soft, ethereal glow. Floating elements utilize subtle glassmorphism (backdrop blur) with the surface background at 95% opacity.
