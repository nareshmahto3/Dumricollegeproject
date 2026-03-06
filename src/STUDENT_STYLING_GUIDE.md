# Student Dashboard Styling Updates

## Overview
Updated student dashboard components to match the admin portal's minimalist professional theme with consistent fonts, colors, and alignment.

## Design System Applied

### Color Scheme
- **Primary Blue**: `#2563EB` (blue-600) for buttons and icons
- **Hover Blue**: `#2F80ED` for hover states
- **Border Colors**: 
  - Default: `border-slate-200`
  - Hover: `hover:border-blue-300`
- **Background**: White cards with `bg-white`
- **Text Colors**:
  - Headings: `text-slate-900` with `font-bold`
  - Body: `text-slate-600` with `font-medium`
  - Labels: `text-slate-700` with `font-semibold`

### Typography
- **Headings**: Use `font-bold` consistently
- **Body Text**: Use `font-medium` for readability
- **Labels**: Use `font-semibold` for emphasis
- **Buttons**: Use `font-semibold` for all button text

### Spacing & Alignment
- **Card Padding**: `p-6` for consistency
- **Gap Spacing**: `gap-2`, `gap-3`, `gap-4` based on content density
- **Margins**: Use `mb-3`, `mb-4`, `mb-6` for vertical rhythm
- **Icon Sizes**: 
  - Small: `w-4 h-4`
  - Medium: `w-5 h-5`
  - Large: `w-6 h-6`

### Button Styling
- **Primary Buttons**: 
  ```tsx
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200"
  ```
- **Outline Buttons**: 
  ```tsx
  className="border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 transition-all duration-200"
  ```

### Card Hover Effects
```tsx
className="border border-slate-200 hover:border-blue-300 transition-all duration-200 hover:shadow-md"
```

### Badge Styling
- **Success**: `bg-emerald-50 text-emerald-700 border-emerald-200 font-medium`
- **Info**: `bg-blue-50 text-blue-700 border-blue-200 font-medium`
- **Warning**: `bg-amber-50 text-amber-700 border-amber-200 font-medium`

### Icon Backgrounds
```tsx
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
  <Icon className="w-6 h-6 text-blue-600" />
</div>
```

## Motion/React Animations
- **Page Entry**: Fade in with slide up
- **Staggered Cards**: Delayed animations (0.1s, 0.2s, 0.3s...)
- **Hover Effects**: Subtle lift with `whileHover={{ y: -2 }}`

## Components Updated

### ✅ StudentDashboard.tsx
- Updated all text to use bold/semibold/medium fonts
- Changed icon colors to blue-600
- Applied consistent hover effects
- Added motion animations
- Changed purple accent to blue for consistency

### 🔄 Remaining Components (Apply Same Pattern):
1. StudentClasses.tsx
2. StudentSchedule.tsx
3. StudentAttendance.tsx
4. StudentExams.tsx
5. StudentResults.tsx
6. StudentAssignments.tsx
7. StudentNotices.tsx
8. StudentMessages.tsx
9. StudentLibrary.tsx
10. StudentGallery.tsx

## Implementation Checklist for Each Component

- [ ] Import `motion` from "motion/react"
- [ ] Update all headings to `font-bold`
- [ ] Update all body text to `font-medium`
- [ ] Update all labels to `font-semibold`
- [ ] Change icon backgrounds to `bg-blue-50`
- [ ] Change icon colors to `text-blue-600`
- [ ] Update button styling to blue-600/700
- [ ] Add hover effects to cards: `hover:border-blue-300`
- [ ] Update badge font weights to `font-medium`
- [ ] Add motion animations with staggered delays
- [ ] Ensure consistent spacing (gap-2, gap-3, gap-4)
- [ ] Update all transitions to `duration-200`

## Example Pattern

```tsx
import { motion } from "motion/react";

export function StudentComponent() {
  return (
    <PortalLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="p-6 bg-white border border-slate-200 hover:border-blue-300 transition-all duration-200">
          <h3 className="font-bold text-slate-900 flex items-center gap-2">
            <Icon className="w-5 h-5 text-blue-600" />
            Section Title
          </h3>
          <p className="text-sm font-medium text-slate-600">Body text</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200">
            Action
          </Button>
        </Card>
      </motion.div>
    </PortalLayout>
  );
}
```
