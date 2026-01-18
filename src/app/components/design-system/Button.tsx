// Design System: Button Components

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  onClick,
  disabled = false,
  fullWidth = false
}: ButtonProps) {
  const baseStyles = "border-2 transition-colors font-medium";
  
  const variants = {
    primary: "bg-gray-800 border-gray-800 text-white hover:bg-gray-700",
    secondary: "bg-white border-gray-300 text-gray-800 hover:bg-gray-50",
    danger: "bg-red-600 border-red-600 text-white hover:bg-red-700"
  };
  
  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${disabledClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
