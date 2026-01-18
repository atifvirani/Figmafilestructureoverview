// Design System: Input Components

interface InputProps {
  type?: 'text' | 'search' | 'number' | 'email' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export function Input({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange,
  fullWidth = false,
  icon
}: InputProps) {
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <div className={`relative ${widthClass}`}>
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border-2 border-gray-300 px-3 py-2 ${icon ? 'pl-10' : ''} ${widthClass} focus:outline-none focus:border-gray-500`}
      />
    </div>
  );
}

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ placeholder = "Search...", value, onChange }: SearchInputProps) {
  return (
    <Input 
      type="search" 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange}
      icon={<span>🔍</span>}
    />
  );
}
