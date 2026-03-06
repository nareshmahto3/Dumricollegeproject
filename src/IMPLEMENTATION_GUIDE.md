# Global Button Hover & Export Implementation Guide

## Changes Required

### 1. Update Button Text Hover Color (#2F80ED)
Replace all instances of `hover:text-blue-700` with `hover:text-[#2F80ED]` across all files.

**Files to Update (49 occurrences across 16 files):**
- AccountManagement.tsx (5 occurrences)
- AddStudentForm.tsx (1 occurrence)
- AddTeacherForm.tsx (1 occurrence)
- AdmissionManagement.tsx (4 occurrences)
- AllStudentsData.tsx (11 occurrences)
- AttendanceManagement.tsx (1 occurrence)
- CertificateRequestManagement.tsx (2 occurrences)
- ClassManagement.tsx (2 occurrences)
- ExamManagement.tsx (3 occurrences)
- FeeManagement.tsx (3 occurrences)
- LoginPage.tsx (3 occurrences)
- MessageManagement.tsx (1 occurrence)
- NoticeManagement.tsx (4 occurrences)
- ScheduleManagement.tsx (1 occurrence)
- SubjectManagement.tsx (3 occurrences)
- Reports.tsx (1 occurrence)

**Before:**
```tsx
hover:text-blue-700
```

**After:**
```tsx
hover:text-[#2F80ED]
```

### 2. Add Export Dropdown to Filter Sections

**Import the ExportDropdown component:**
```tsx
import { ExportDropdown } from './ExportDropdown';
```

**Usage Example - Replace single Export buttons:**

**Before:**
```tsx
<Button variant="outline" className="...">
  <Download className="w-4 h-4 mr-2" />
  Export
</Button>
```

**After:**
```tsx
<ExportDropdown
  buttonText="Export"
  onExportPDF={() => console.log('Exporting PDF...')}
  onExportCSV={() => console.log('Exporting CSV...')}
  onExportExcel={() => console.log('Exporting Excel...')}
/>
```

### 3. Files Requiring Export Dropdown

**Admin Pages with Filter Sections:**
1. **AccountManagement.tsx** - Add to filter section (line ~295)
2. **AllStudentsData.tsx** - Already has export buttons, replace with dropdown
3. **AttendanceManagement.tsx** - Replace Export Report button
4. **CertificateRequestManagement.tsx** - Replace Export Report button
5. **ClassManagement.tsx** - Add to filter section
6. **ExamManagement.tsx** - Replace Export button (both tabs)
7. **FeeManagement.tsx** - Replace Export Report button
8. **NoticeManagement.tsx** - Replace Export button
9. **Reports.tsx** - Add to filter sections
10. **SubjectManagement.tsx** - Replace Export button
11. **TeacherManagement.tsx** - Add if needed
12. **AdmissionManagement.tsx** - Add if needed

### 4. Complete Color Change Pattern

**Find and Replace Pattern:**
```
Find:    hover:text-blue-700
Replace: hover:text-[#2F80ED]
```

**Additional patterns to check:**
```
Find:    group-hover:text-blue-700
Replace: group-hover:text-[#2F80ED]
```

## Implementation Priority

### Phase 1: Color Updates (High Priority)
✅ Replace all `hover:text-blue-700` → `hover:text-[#2F80ED]`
- This is a simple find-and-replace across all files
- Affects 16 files, 49 occurrences total

### Phase 2: Export Dropdown Integration (Medium Priority)
✅ Add ExportDropdown component to filter sections
- Replace existing Export buttons with ExportDropdown
- Maintain consistent styling across all admin pages

### Example Complete Implementation
See `/components/AccountManagement.tsx` for reference implementation combining both changes.

## Testing Checklist
- [ ] All buttons show #2F80ED color on hover
- [ ] Export dropdowns show PDF, CSV, Excel options
- [ ] Dropdowns close when clicking outside
- [ ] All filter sections have export functionality
- [ ] Consistent styling across all admin pages
