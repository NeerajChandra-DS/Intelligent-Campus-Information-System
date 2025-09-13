import React from 'react';
import { AcademicSchedule } from './AcademicSchedule';
import { LibraryHours } from './LibraryHours';
import { CampusEvents } from './CampusEvents';
import { DiningServices } from './DiningServices';
import { CourseRegistration } from './CourseRegistration';
import { StudentIdCard } from './StudentIdCard';

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Campus Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <StudentIdCard />
        <AcademicSchedule />
        <CourseRegistration />
        <LibraryHours />
        <CampusEvents />
        <DiningServices />
      </div>
    </div>
  );
};