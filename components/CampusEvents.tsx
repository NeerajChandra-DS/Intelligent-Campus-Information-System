import React from 'react';
import { MOCK_EVENTS } from '../constants';
import type { CampusEvent } from '../types';
import { CalendarIcon } from './icons';
import { DashboardCard } from './DashboardCard';


export const CampusEvents: React.FC = () => {
  return (
    <DashboardCard title="Upcoming Events" icon={<CalendarIcon />}>
      <ul className="space-y-4">
        {MOCK_EVENTS.map((event: CampusEvent) => (
          <li key={event.id} className="border-l-4 border-indigo-200 pl-4">
            <p className="font-semibold text-slate-700">{event.name}</p>
            <p className="text-sm text-slate-500">{event.date} @ {event.time}</p>
            <p className="text-sm text-slate-500">{event.location}</p>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
};