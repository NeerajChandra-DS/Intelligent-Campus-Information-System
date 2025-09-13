import React, { useState, useEffect } from 'react';
import { MOCK_SCHEDULE } from '../constants';
import type { Course } from '../types';
import { BookOpenIcon } from './icons';
import { DashboardCard } from './DashboardCard';

export const AcademicSchedule: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const loadCourses = () => {
      const registeredCourses: Course[] = JSON.parse(localStorage.getItem('registeredCourses') || '[]');
      // Prevent duplicates by checking IDs
      const combined = [...MOCK_SCHEDULE];
      registeredCourses.forEach(regCourse => {
        if (!MOCK_SCHEDULE.some(mockCourse => mockCourse.id === regCourse.id)) {
            combined.push(regCourse);
        }
      });
      setCourses(combined);
    };

    loadCourses();

    // Listen for the custom event dispatched from the registration form
    window.addEventListener('coursesUpdated', loadCourses);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('coursesUpdated', loadCourses);
    };
  }, []);

  return (
    <DashboardCard title="Academic Schedule" icon={<BookOpenIcon />}>
       {courses.length > 0 ? (
        <ul className="space-y-4">
          {courses.map((course: Course) => (
            <li key={course.id} className="border-l-4 border-indigo-200 pl-4">
              <p className="font-semibold text-slate-700">{course.id}: {course.name}</p>
              <p className="text-sm text-slate-500">{course.instructor}</p>
              <p className="text-sm text-slate-500">{course.time} - {course.room}</p>
            </li>
          ))}
        </ul>
       ) : (
         <p className="text-slate-500">Your schedule is empty. Register for courses to see them here.</p>
       )}
    </DashboardCard>
  );
};