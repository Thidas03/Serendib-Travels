import React, { forwardRef } from 'react';
import { ErrorMessage } from './ErrorMessage';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
        <textarea
          ref={ref}
          className={`appearance-none block w-full px-4 py-3 border ${
            error 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300 dark:border-gray-700 focus:ring-emerald-500 focus:border-emerald-500'
          } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed resize-none ${className}`}
          {...props}
        />
        <ErrorMessage message={error} />
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
