import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

export function CountdownTimer({ targetDate, className = '' }: CountdownTimerProps) {
  // Default to end of current month if no target date provided
  const getEndOfMonth = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  };

  const [timeLeft, setTimeLeft] = useState(() => {
    const target = targetDate || getEndOfMonth();
    return Math.floor((target.getTime() - Date.now()) / 1000);
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
          {pad(days)}
        </div>
        <span className="text-gray-700 font-semibold">дн</span>
      </div>
      <span className="text-gray-400 font-bold">:</span>
      <div className="flex items-center gap-1">
        <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
          {pad(hours)}
        </div>
        <span className="text-gray-700 font-semibold">час</span>
      </div>
      <span className="text-gray-400 font-bold">:</span>
      <div className="flex items-center gap-1">
        <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
          {pad(minutes)}
        </div>
        <span className="text-gray-700 font-semibold">мин</span>
      </div>
      <span className="text-gray-400 font-bold">:</span>
      <div className="flex items-center gap-1">
        <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
          {pad(seconds)}
        </div>
        <span className="text-gray-700 font-semibold">сек</span>
      </div>
    </div>
  );
}
