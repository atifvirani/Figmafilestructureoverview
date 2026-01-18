// Design System: Card Component

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Card({ children, title, className = "" }: CardProps) {
  return (
    <div className={`border-2 border-gray-300 bg-white p-4 ${className}`}>
      {title && (
        <div className="mb-3 pb-2 border-b-2 border-gray-300">
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
}
