import React, { useState } from 'react';
import type { Course } from '../types';
import { PlusCircleIcon } from './icons';
import { DashboardCard } from './DashboardCard';

const InputField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string }> = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-slate-600 mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      required
    />
  </div>
);

export const CourseRegistration: React.FC = () => {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [instructor, setInstructor] = useState('');
  const [time, setTime] = useState('');
  const [room, setRoom] = useState('');
  const [feedback, setFeedback] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCourse: Course = {
      id: courseId,
      name: courseName,
      instructor,
      time,
      room,
    };

    try {
      const existingCourses: Course[] = JSON.parse(localStorage.getItem('registeredCourses') || '[]');
      
      if (existingCourses.some(course => course.id.toLowerCase() === newCourse.id.toLowerCase())) {
        setFeedback({ message: `Course with ID ${newCourse.id} is already registered.`, type: 'error' });
        return;
      }
        
      const updatedCourses = [...existingCourses, newCourse];
      localStorage.setItem('registeredCourses', JSON.stringify(updatedCourses));

      // Dispatch a custom event so other components can update
      window.dispatchEvent(new Event('coursesUpdated'));
      
      // Reset form
      setCourseId('');
      setCourseName('');
      setInstructor('');
      setTime('');
      setRoom('');
      setFeedback({ message: 'Course registered successfully!', type: 'success' });

      // Clear feedback message after 3 seconds
      setTimeout(() => setFeedback(null), 3000);

    } catch (error) {
      console.error("Failed to save course to local storage", error);
      setFeedback({ message: 'Failed to register course.', type: 'error' });
    }
  };

  return (
    <DashboardCard title="Course Registration" icon={<PlusCircleIcon />}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField label="Course ID" value={courseId} onChange={(e) => setCourseId(e.target.value)} placeholder="e.g., ART101" />
        <InputField label="Course Name" value={courseName} onChange={(e) => setCourseName(e.target.value)} placeholder="e.g., Intro to Painting" />
        <InputField label="Instructor" value={instructor} onChange={(e) => setInstructor(e.target.value)} placeholder="e.g., Prof. Picasso" />
        <InputField label="Time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="e.g., Tue/Thu 3:00 PM - 4:30 PM" />
        <InputField label="Room" value={room} onChange={(e) => setRoom(e.target.value)} placeholder="e.g., Fine Arts 102" />
        
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Register Course
        </button>

        {feedback && (
          <p className={`text-sm text-center font-medium ${feedback.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {feedback.message}
          </p>
        )}
      </form>
    </DashboardCard>
  );
};