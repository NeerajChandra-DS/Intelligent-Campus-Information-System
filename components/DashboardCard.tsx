import React from 'react';

interface DashboardCardProps {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  className?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ children, title, icon, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md p-6 flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border border-slate-200/80 ${className}`}>
    <div className="flex items-center text-indigo-600 mb-4">
      {icon}
      <h3 className="text-xl font-bold ml-3 text-slate-800">{title}</h3>
    </div>
    <div className="flex-grow">{children}</div>
  </div>
);