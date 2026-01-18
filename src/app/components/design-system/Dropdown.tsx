// Design System: Dropdown Component

import { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export function Dropdown({ options, value, onChange, placeholder = "Select..." }: DropdownProps) {
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

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-2 border-gray-300 px-3 py-2 text-left flex justify-between items-center bg-white"
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <span className="text-gray-400">{isOpen ? "▲" : "▼"}</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 border-2 border-gray-300 bg-white mt-1 z-50 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                onChange?.(option);
                setIsOpen(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
