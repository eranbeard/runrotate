# RunRotate Homepage Design System

## 1. Color Palette

### 1.1 Light Mode
- **Primary Color**: `#03FCBA` (Bright Teal/Green)
  - Used for: Buttons, active states, accents, and interactive elements
  - Hover: `#02e0a7` (Slightly darker teal)
- **Background**: 
  - Main: `#FFFFFF` (White)
  - Secondary: `#F9FAFB` (Light Gray, used for section backgrounds)
- **Text**:
  - Primary: `#111827` (Dark Gray, for main content)
  - Secondary: `#6B7280` (Medium Gray, for less important text)
  - Muted: `#9CA3AF` (Light Gray, for disabled/placeholder text)
- **Borders & Dividers**: `#E5E7EB` (Light Gray)
- **Cards/Containers**: 
  - Background: White
  - Shadow: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`
  - Hover Shadow: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`

### 1.2 Dark Mode
- **Background**:
  - Main: `#111827` (Dark Blue-Gray)
  - Secondary: `#1F2937` (Slightly Lighter Blue-Gray, for cards/sections)
- **Text**:
  - Primary: `#F9FAFB` (Off-White)
  - Secondary: `#9CA3AF` (Light Gray)
- **Borders & Dividers**: `#374151` (Dark Gray)
- **Cards/Containers**:
  - Background: `#1F2937`
  - Shadow: `0 1px 3px 0 rgb(0 0 0 / 0.25), 0 1px 2px -1px rgb(0 0 0 / 0.25)`
  - Hover Shadow: `0 4px 6px -1px rgb(0 0 0 / 0.25), 0 2px 4px -2px rgb(0 0 0 / 0.25)`

## 2. Typography

### 2.1 Font Family
- **Primary**: System UI, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Monospace**: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace

### 2.2 Type Scale
- **H1 (Hero)**: 
  - Mobile: `2.25rem` (36px)
  - Tablet: `3rem` (48px)
  - Desktop: `3.75rem` (60px)
  - Line height: 1.2
  - Weight: 800
  - Letter spacing: -0.025em

- **H2 (Section Headings)**: 
  - Mobile: `1.5rem` (24px)
  - Desktop: `2.25rem` (36px)
  - Line height: 1.25
  - Weight: 700
  - Letter spacing: -0.025em

- **H3 (Card Titles)**: 
  - Size: `1.25rem` (20px)
  - Line height: 1.5
  - Weight: 600

- **Body Text**: 
  - Size: `1rem` (16px)
  - Line height: 1.625
  - Weight: 400
  - Color: Primary text color

- **Small/Secondary Text**:
  - Size: `0.875rem` (14px)
  - Line height: 1.5
  - Color: Secondary text color

### 2.3 Text Styles
- **Lead Paragraph**: 
  - Size: `1.25rem` (20px)
  - Line height: 1.75
  - Weight: 400
  - Max-width: 42rem

- **Label/Button Text**:
  - Size: `0.875rem` (14px)
  - Weight: 600
  - Letter spacing: `0.05em`
  - Text transform: uppercase

## 3. Buttons & Interactive Elements

### 3.1 Primary Button
- **Default State**:
  - Background: `#03FCBA`
  - Text: `#111827` (Dark Gray)
  - Padding: `0.75rem 1.5rem`
  - Border radius: `9999px` (Fully rounded)
  - Font weight: `600`
  - Font size: `1rem`
  - Box shadow: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
  - Transition: `all 0.2s ease-in-out`

- **Hover State**:
  - Background: `#02e0a7`
  - Transform: `translateY(-1px)`
  - Box shadow: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`

- **Focus State**:
  - Outline: `2px solid #03FCBA`
  - Outline offset: `2px`

- **Active State**:
  - Transform: `translateY(0)`
  - Box shadow: `0 1px 2px 0 rgb(0 0 0 / 0.05)`

### 3.2 Secondary Button
- **Default State**:
  - Background: `transparent`
  - Border: `1px solid #E5E7EB` (Light Gray)
  - Text: `#111827` (Dark Gray)
  - Padding: `0.75rem 1.5rem`
  - Border radius: `9999px`
  - Font weight: `500`
  - Font size: `1rem`
  - Transition: `all 0.2s ease-in-out`

- **Hover State**:
  - Background: `#F9FAFB` (Light Gray)
  - Transform: `translateY(-1px)`
  - Box shadow: `0 1px 2px 0 rgb(0 0 0 / 0.05)`

- **Dark Mode Adjustments**:
  - Border: `1px solid #374151`
  - Text: `#F9FAFB`
  - Hover Background: `#1F2937`

### 3.3 Icon Button
- **Size**: `2.5rem` × `2.5rem`
- **Border radius**: `9999px`
- **Background**: Transparent
- **Hover Background**: `rgba(0, 0, 0, 0.05)` in light mode, `rgba(255, 255, 255, 0.1)` in dark mode
- **Icon Size**: `1.25rem`
- **Transition**: `all 0.2s ease-in-out`

## 4. Cards

### 4.1 Rotation Card
- **Container**:
  - Background: White (Dark: `#1F2937`)
  - Border radius: `0.75rem`
  - Border: `1px solid #E5E7EB` (Dark: `#374151`)
  - Box shadow: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`
  - Transition: `all 0.2s ease-in-out`
  - Overflow: `hidden`

- **Hover State**:
  - Transform: `translateY(-4px)`
  - Box shadow: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
  - Border color: `#D1D5DB` (slightly darker border on hover)

- **Image Grid**:
  - Grid: `grid-cols-2` (2 columns)
  - Gap: `0.5rem`
  - Margin bottom: `1rem`
  - Image aspect ratio: `3/2`
  - Border radius: `0.5rem`
  - Background: `#F3F4F6` (Dark: `#374151`)
  - Position: `relative` (for tags)

- **Tag (Pill)**:
  - Position: `absolute top-2 left-2`
  - Background: `#03FCBA`
  - Text: `#111827`
  - Font size: `0.75rem`
  - Font weight: `500`
  - Padding: `0.125rem 0.5rem`
  - Border radius: `9999px`
  - Text transform: `uppercase`
  - Letter spacing: `0.05em`

- **Content Area**:
  - Padding: `1rem`
  - User info: Flex layout with avatar, name, and country flag
  - Stats: Small text with icons (hearts, comments)
  - Spacing: Consistent vertical rhythm

## 5. Navigation

### 5.1 Header
- **Container**:
  - Position: `sticky top-0 z-50`
  - Background: White (Dark: `#111827`)
  - Border bottom: `1px solid #E5E7EB` (Dark: `#1F2937`)
  - Padding: `0 1.5rem`
  - Height: `4rem`
  - Display: `flex`
  - Align items: `center`
  - Justify content: `space-between`

- **Logo**:
  - Height: `2rem`
  - Width: `auto`
  - Object fit: `contain`

- **Nav Links**:
  - Display: `flex`
  - Gap: `1.5rem`
  - Font weight: `500`
  - Font size: `0.9375rem`
  - Text color: `#4B5563` (Dark: `#9CA3AF`)
  - Hover color: `#111827` (Dark: `#FFFFFF`)
  - Transition: `color 0.2s ease-in-out`

- **Mobile Menu Button**:
  - Display: `none` on desktop, `flex` on mobile
  - Padding: `0.5rem`
  - Border radius: `0.375rem`
  - Hover background: `#F3F4F6` (Dark: `#1F2937`)
  - Icon size: `1.5rem`

### 5.2 Mobile Menu
- **Container**:
  - Position: `fixed`
  - Top: `4rem`
  - Left/Right: `0`
  - Background: White (Dark: `#111827`)
  - Border bottom: `1px solid #E5E7EB` (Dark: `#1F2937`)
  - Padding: `1rem 0`
  - Z-index: `40`
  - Box shadow: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`

- **Links**:
  - Display: `block`
  - Padding: `0.75rem 1.5rem`
  - Hover background: `#F9FAFB` (Dark: `#1F2937`)
  - Transition: `all 0.2s ease-in-out`

## 6. Hero Section

### 6.1 Container
- **Layout**:
  - Padding: `6rem 1rem` (Mobile), `8rem 1.5rem` (Desktop)
  - Max width: `80rem`
  - Margin: `0 auto`
  - Text align: `center`
  - Display: `flex`
  - Flex direction: `column`
  - Align items: `center`
  - Justify content: `center`
  - Gap: `2rem`

### 6.2 Content
- **Headline**:
  - Font size: `3rem` (Mobile), `3.75rem` (Desktop)
  - Font weight: `800`
  - Line height: `1.2`
  - Letter spacing: `-0.025em`
  - Max width: `56rem`
  - Margin: `0 auto`

- **Subheadline**:
  - Font size: `1.25rem`
  - Color: `#4B5563` (Dark: `#9CA3AF`)
  - Max width: `42rem`
  - Line height: `1.75`
  - Margin: `0 auto`

### 6.3 CTA Buttons
- **Container**:
  - Display: `flex`
  - Gap: `1rem`
  - Flex wrap: `wrap`
  - Justify content: `center`
  - Margin top: `1.5rem`

## 7. Featured Rotations Section

### 7.1 Container
- **Layout**:
  - Padding: `5rem 1.5rem`
  - Max width: `90rem`
  - Margin: `0 auto`

### 7.2 Header
- **Layout**:
  - Display: `flex`
  - Justify content: `space-between`
  - Align items: `center`
  - Margin bottom: `2.5rem`

- **Title**:
  - Font size: `1.875rem`
  - Font weight: `700`
  - Line height: `2.25rem`

- **View All Button**:
  - Text: `View All`
  - Color: `#3B82F6` (Blue-500)
  - Font weight: `500`
  - Hover: Underline
  - Display: `flex`
  - Align items: `center`
  - Gap: `0.5rem`

### 7.3 Grid Layout
- **Desktop (lg+)**: `grid-cols-3`
- **Tablet (md)**: `grid-cols-2`
- **Mobile**: `grid-cols-1`
- **Gap**: `1.5rem`

## 8. Footer

### 8.1 Container
- **Layout**:
  - Background: `#F9FAFB` (Dark: `#111827`)
  - Padding: `4rem 1.5rem`
  - Border top: `1px solid #E5E7EB` (Dark: `#1F2937`)

### 8.2 Content
- **Grid Layout**:
  - Display: `grid`
  - Grid template columns: `repeat(auto-fit, minmax(200px, 1fr))`
  - Gap: `3rem`
  - Max width: `90rem`
  - Margin: `0 auto`

### 8.3 Links
- **Category Title**:
  - Font weight: `600`
  - Font size: `0.875rem`
  - Color: `#111827` (Dark: `#F9FAFB`)
  - Text transform: `uppercase`
  - Letter spacing: `0.05em`
  - Margin bottom: `1rem`

- **Link Items**:
  - Display: `block`
  - Padding: `0.5rem 0`
  - Color: `#4B5563` (Dark: `#9CA3AF`)
  - Hover color: `#111827` (Dark: `#FFFFFF`)
  - Transition: `color 0.2s ease-in-out`

### 8.4 Copyright
- **Container**:
  - Margin top: `4rem`
  - Padding top: `2rem`
  - Border top: `1px solid #E5E7EB` (Dark: `#1F2937`)
  - Text align: `center`
  - Color: `#6B7280` (Dark: `#9CA3AF`)
  - Font size: `0.875rem`

## 9. Responsive Breakpoints

- **sm (640px)**: Small screens (mobile)
- **md (768px)**: Medium screens (tablets)
- **lg (1024px)**: Large screens (small desktops)
- **xl (1280px)**: Extra large screens
- **2xl (1536px)**: Extra extra large screens

## 10. Spacing Scale

- **Base unit**: `0.25rem` (4px)
- **Common spacings**:
  - `0.5rem` (8px)
  - `0.75rem` (12px)
  - `1rem` (16px)
  - `1.5rem` (24px)
  - `2rem` (32px)
  - `2.5rem` (40px)
  - `3rem` (48px)
  - `4rem` (64px)
  - `5rem` (80px)
  - `6rem` (96px)

## 11. Shadows

- **sm**: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **DEFAULT**: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`
- **md**: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
- **lg**: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`
- **xl**: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`

## 12. Transitions & Animations

### 12.1 Timing Functions
- **Ease-in-out**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Ease-out**: `cubic-bezier(0, 0, 0.2, 1)`
- **Ease-in**: `cubic-bezier(0.4, 0, 1, 1)`

### 12.2 Durations
- **Fast**: `150ms`
- **Normal**: `200ms`
- **Slow**: `300ms`

### 12.3 Keyframe Animations
- **Fade In**:
  ```css
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  ```

- **Slide Up**:
  ```css
  @keyframes slideUp {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  ```

## 13. Icons

### 13.1 Sizes
- **Small**: `1rem` (16px)
- **Medium**: `1.25rem` (20px)
- **Large**: `1.5rem` (24px)
- **XLarge**: `2rem` (32px)

### 13.2 Colors
- **Default**: Current text color
- **Primary**: `#03FCBA`
- **Muted**: `#6B7280` (Light), `#9CA3AF` (Dark)

## 14. Form Elements

### 14.1 Input Fields
- **Height**: `2.5rem`
- **Padding**: `0.5rem 0.75rem`
- **Border**: `1px solid #D1D5DB` (Dark: `#374151`)
- **Border Radius**: `0.375rem`
- **Background**: White (Dark: `#1F2937`)
- **Text Color**: `#111827` (Dark: `#F9FAFB`)
- **Placeholder**: `#9CA3AF`
- **Focus**:
  - Outline: `2px solid #03FCBA`
  - Outline offset: `2px`
  - Border color: `#03FCBA`

### 14.2 Labels
- **Font Size**: `0.875rem`
- **Font Weight**: `500`
- **Color**: `#111827` (Dark: `#F9FAFB`)
- **Margin Bottom**: `0.5rem`
  
### 14.3 Checkboxes & Radio Buttons
- **Size**: `1rem` × `1rem`
- **Border**: `1px solid #D1D5DB` (Dark: `#4B5563`)
- **Border Radius**: `0.25rem` (Checkbox), `9999px` (Radio)
- **Checked Background**: `#03FCBA`
- **Checked Border Color**: `#03FCBA`
- **Hover**: `#E5E7EB` (Dark: `#4B5563`)

## 15. Accessibility

### 15.1 Focus States
- **Focus Ring**:
  ```css
  :focus {
    outline: 2px solid #03FCBA;
    outline-offset: 2px;
  }
  ```

### 15.2 Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text (18pt+ or 14pt+bold)**: Minimum 3:1 contrast ratio
- **UI Components**: Minimum 3:1 contrast ratio

### 15.3 Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 16. Dark Mode Implementation

### 16.1 Class Toggle
- Root element has `.dark` class for dark mode
- Implemented using `prefers-color-scheme` media query as fallback

### 16.2 Color Adjustments
- Text colors are inverted for better contrast
- Background colors are darkened
- Border colors are adjusted for better visibility
- Shadows are slightly more pronounced in dark mode

### 16.3 Images
- SVGs and icons automatically adjust based on theme
- Consider using `filter: invert(1)` for dark mode images if needed

## 17. Component-Specific Notes

### 17.1 Rotation Card Tags
- **Available Tags**:
  - TEMPO
  - RACE
  - LONG
  - TRAIL
  - RECOVERY
- **Colors**: All use the primary teal color for consistency
- **Positioning**: Top-left corner with small offset from edges

### 17.2 User Avatars
- **Default**: Colored circle with user initial
- **With Image**: Circular image with border
- **Size**: `2rem` × `2rem`
- **Border**: `2px solid white` (with shadow for contrast)

## 18. Performance Considerations

### 18.1 Image Optimization
- Use `loading="lazy"` for below-the-fold images
- Specify `width` and `height` to prevent layout shifts
- Use modern formats like WebP with fallbacks

### 18.2 Font Loading
- Preload critical fonts
- Use `font-display: swap` for non-blocking text rendering
- Consider using system fonts for better performance

## 19. Browser Support
- Latest 2 versions of major browsers (Chrome, Firefox, Safari, Edge)
- IE11 and older browsers have limited support (consider progressive enhancement)
- Mobile browsers (latest iOS and Android)

## 20. Development Notes

### 20.1 CSS Methodology
- Utility-first approach using Tailwind CSS
- Custom components for complex UI elements
- CSS Custom Properties for theming

### 20.2 Naming Conventions
- BEM (Block Element Modifier) for custom components
- kebab-case for class names
- Semantic HTML5 elements

### 20.3 Testing
- Test on various screen sizes
- Verify color contrast
- Test keyboard navigation
- Check screen reader compatibility
