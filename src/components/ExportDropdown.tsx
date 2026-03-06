import { useState, useRef, useEffect } from 'react';
import { Download, FileSpreadsheet, File, FileText, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface ExportDropdownProps {
  onExportPDF?: () => void;
  onExportCSV?: () => void;
  onExportExcel?: () => void;
  className?: string;
  buttonText?: string;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

export function ExportDropdown({
  onExportPDF,
  onExportCSV,
  onExportExcel,
  className = '',
  buttonText = 'Export',
  variant = 'outline',
  size = 'default',
}: ExportDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleExport = (type: 'pdf' | 'csv' | 'excel', callback?: () => void) => {
    if (callback) {
      callback();
    } else {
      // Default export logic
      console.log(`Exporting as ${type.toUpperCase()}...`);
      alert(`Export as ${type.toUpperCase()} functionality will be implemented soon!`);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant={variant}
        size={size}
        onClick={() => setIsOpen(!isOpen)}
        className={`border-slate-300 bg-white text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] hover:border-blue-500 transition-all duration-200 gap-2 ${className}`}
      >
        <Download className="w-4 h-4" />
        {buttonText}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
          <button
            onClick={() => handleExport('pdf', onExportPDF)}
            className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] flex items-center gap-3 transition-colors"
          >
            <File className="w-4 h-4 text-red-500" />
            <span>Export as PDF</span>
          </button>
          <button
            onClick={() => handleExport('csv', onExportCSV)}
            className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] flex items-center gap-3 transition-colors"
          >
            <FileText className="w-4 h-4 text-green-500" />
            <span>Export as CSV</span>
          </button>
          <button
            onClick={() => handleExport('excel', onExportExcel)}
            className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-blue-50 hover:text-[#2F80ED] flex items-center gap-3 transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Export as Excel</span>
          </button>
        </div>
      )}
    </div>
  );
}
