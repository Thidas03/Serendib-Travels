import React from 'react';

interface ErrorMessageProps {
  message?: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return (
    <p className="mt-1 text-sm text-red-500 animate-in fade-in slide-in-from-top-1 duration-300">
      {message}
    </p>
  );
}
