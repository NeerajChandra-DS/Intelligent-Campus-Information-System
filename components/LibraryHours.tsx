import React from 'react';
import { MOCK_LIBRARY } from '../constants';
import { ClockIcon } from './icons';
import { DashboardCard } from './DashboardCard';

export const LibraryHours: React.FC = () => {
  return (
    <DashboardCard title={`${MOCK_LIBRARY.name} Hours`} icon={<ClockIcon />}>
      <div className="space-y-3">
        <div>
          <p className="font-semibold text-slate-700">Weekdays</p>
          <p className="text-slate-500">{MOCK_LIBRARY.hours.weekdays}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-700">Weekends</p>
          <p className="text-slate-500">{MOCK_LIBRARY.hours.weekends}</p>
        </div>
      </div>
    </DashboardCard>
  );
};