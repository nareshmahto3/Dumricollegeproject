# Admin Components Light Theme Update Summary

This file contains patterns to update all dark-themed admin components to light theme.

## Color Pattern Changes:

### Main Container
- FROM: `bg-slate-950`
- TO: Remove (use default or `bg-white`)

### Header Text
- FROM: `text-white` / `text-slate-400`
- TO: `text-black` / `text-slate-600`

### Cards
- FROM: `bg-slate-900 border-slate-800`
- TO: `bg-white border-amber-200 shadow-md` or `shadow-lg`

### Stats Card Text
- FROM: `text-slate-400`
- TO: `text-amber-700 font-medium`

### Inputs/Select
- FROM: `bg-slate-800 border-slate-700 text-white placeholder-slate-400`
- TO: `bg-amber-50 border-amber-200 text-slate-900 placeholder-slate-500`

### Buttons (outline)
- FROM: `border-slate-700 text-slate-300 hover:bg-slate-800`
- TO: `border-amber-300 bg-amber-50 text-slate-700 hover:bg-amber-100 hover:border-amber-400`

### Table Headers
- FROM: `border-b border-slate-800` + `text-slate-400`
- TO: `border-b border-amber-200 bg-amber-50` + `text-amber-700 font-bold uppercase text-sm`

### Table Rows
- FROM: `border-b border-slate-800 hover:bg-slate-800/50` + `text-white` / `text-slate-300`
- TO: `border-b border-amber-100 hover:bg-amber-50` + `text-slate-900` / `text-slate-700`

### Tabs
- FROM: `border-b border-slate-800` + active: `text-amber-500` inactive: `text-slate-400`
- TO: `border-b border-amber-200` + active: `text-amber-600` inactive: `text-slate-600 hover:text-slate-900`

### Search Icon
- FROM: `text-slate-400`
- TO: `text-amber-600`

## Components To Update:
1. ✅ LibraryManagement.tsx - DONE
2. ✅ AttendanceManagement.tsx - DONE  
3. ✅ ExamManagement.tsx - DONE
4. ⏳ HostelManagement.tsx
5. ⏳ MessageManagement.tsx
6. ⏳ NoticeManagement.tsx
7. ⏳ TransportManagement.tsx
8. ⏳ AccountManagement.tsx
