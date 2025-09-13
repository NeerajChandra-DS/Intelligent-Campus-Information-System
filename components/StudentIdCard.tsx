import React from 'react';
import { MOCK_STUDENT } from '../constants';
import { IdCardIcon } from './icons';
import { DashboardCard } from './DashboardCard';

const Barcode = () => (
    <svg className="w-full h-16" aria-hidden="true">
        <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
        <g fill="#000">
            <rect x="5%" y="10%" width="2%" height="80%" />
            <rect x="9%" y="10%" width="4%" height="80%" />
            <rect x="15%" y="10%" width="1%" height="80%" />
            <rect x="18%" y="10%" width="3%" height="80%" />
            <rect x="23%" y="10%" width="2%" height="80%" />
            <rect x="27%" y="10%" width="1%" height="80%" />
            <rect x="30%" y="10%" width="5%" height="80%" />
            <rect x="37%" y="10%" width="2%" height="80%" />
            <rect x="42%" y="10%" width="1%" height="80%" />
            <rect x="45%" y="10%" width="3%" height="80%" />
            <rect x="50%" y="10%" width="2%" height="80%" />
            <rect x="55%" y="10%" width="4%" height="80%" />
            <rect x="61%" y="10%" width="1%" height="80%" />
            <rect x="64%" y="10%" width="2%" height="80%" />
            <rect x="68%" y="10%" width="5%" height="80%" />
            <rect x="75%" y="10%" width="2%" height="80%" />
            <rect x="79%" y="10%" width="3%" height="80%" />
            <rect x="84%" y="10%" width="1%" height="80%" />
            <rect x="87%" y="10%" width="2%" height="80%" />
            <rect x="91%" y="10%" width="4%" height="80%" />
        </g>
    </svg>
);

export const StudentIdCard: React.FC = () => {
  const { name, studentId, program } = MOCK_STUDENT;

  return (
    <DashboardCard title="Student ID Card" icon={<IdCardIcon />} className="xl:col-span-1">
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 border border-slate-200 h-full flex flex-col justify-between">
        <div>
            <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center border-4 border-white shadow-md select-none">
                    <span className="text-4xl font-bold text-white">{name[0]}</span>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-slate-900">{name}</h4>
                    <p className="text-sm text-slate-500">{studentId}</p>
                    <p className="text-sm text-slate-500">{program}</p>
                </div>
            </div>
            <div className="mt-4 text-center">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Active Student
                </span>
            </div>
        </div>
        <div className="mt-4">
          <p className="text-xs text-center text-slate-400 mb-1">{studentId}</p>
          <Barcode />
        </div>
      </div>
    </DashboardCard>
  );
};