import React from 'react';
import { MOCK_DINING } from '../constants';
import type { DiningOption } from '../types';
import { FoodIcon } from './icons';
import { DashboardCard } from './DashboardCard';

export const DiningServices: React.FC = () => {
  return (
    <DashboardCard title="Dining Services" icon={<FoodIcon />}>
      <ul className="space-y-4">
        {MOCK_DINING.map((option: DiningOption) => (
          <li key={option.name} className="border-l-4 border-indigo-200 pl-4">
            <p className="font-semibold text-slate-700">{option.name}</p>
            <p className="text-sm text-slate-500">{option.hours}</p>
            {option.specials && <p className="text-sm text-slate-500 italic">Specials: {option.specials.join(', ')}</p>}
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
};