import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  isTextarea?: boolean;
}

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ label, error, isTextarea = false, className = '', required, id, ...props }, ref) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const baseStyles = 'w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[var(--neon-green)] focus:ring-2 focus:ring-[var(--neon-green)]/50 transition-all duration-300';
    const errorStyles = error ? 'border-[var(--neon-red)] focus:border-[var(--neon-red)] focus:ring-[var(--neon-red)]/50' : '';

    const combinedClassName = `${baseStyles} ${errorStyles} ${className}`;

    return (
      <div className="w-full">
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {required && <span className="text-[var(--neon-red)] ml-1">*</span>}
        </label>
        {isTextarea ? (
          <textarea
            id={inputId}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={combinedClassName}
            rows={4}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={inputId}
            ref={ref as React.Ref<HTMLInputElement>}
            className={combinedClassName}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-sm text-[var(--neon-red)]" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
