import type { Course, CampusEvent, DiningOption, LibraryInfo, Student } from './types';

export const MOCK_SCHEDULE: Course[] = [
  { id: 'CS101', name: 'Intro to Programming', instructor: 'Dr. Turing', time: 'Mon/Wed 10:00 AM - 11:30 AM', room: 'STEM Hall 301' },
  { id: 'ENGL203', name: 'World Literature', instructor: 'Prof. Austen', time: 'Tue/Thu 1:00 PM - 2:30 PM', room: 'Arts Bldg 112' },
  { id: 'MATH314', name: 'Linear Algebra', instructor: 'Dr. Euler', time: 'Mon/Wed/Fri 9:00 AM - 10:00 AM', room: 'STEM Hall 205' },
  { id: 'PHYS210', name: 'University Physics I', instructor: 'Prof. Newton', time: 'Tue/Thu 11:00 AM - 12:30 PM', room: 'Science Ctr 150' },
];

export const MOCK_EVENTS: CampusEvent[] = [
  { id: 'ev1', name: 'Fall Career Fair', date: 'October 26, 2024', time: '10:00 AM - 3:00 PM', location: 'Student Union Ballroom' },
  { id: 'ev2', name: 'Homecoming Football Game', date: 'October 28, 2024', time: '1:00 PM', location: 'University Stadium' },
  { id: 'ev3', name: 'Midterm Study Session Marathon', date: 'November 5, 2024', time: '6:00 PM - 12:00 AM', location: 'Main Library' },
];

export const MOCK_DINING: DiningOption[] = [
  { name: 'The Hub Cafeteria', hours: 'Mon-Fri: 7am-8pm, Sat-Sun: 9am-7pm', specials: ['Taco Tuesday', 'Pasta Bar on Wednesdays'] },
  { name: 'Cortex Cafe', hours: 'Mon-Fri: 7:30am-5pm', specials: ['Artisan Sandwiches', 'Organic Coffee'] },
];

export const MOCK_LIBRARY: LibraryInfo = {
  name: 'Main Library',
  hours: {
    weekdays: '8:00 AM - 12:00 AM',
    weekends: '10:00 AM - 8:00 PM',
  },
};

export const MOCK_STUDENT: Student = {
    name: 'Neeraj Chandra',
    studentId: 'MRU-12345678',
    program: 'B.S. in Computer Science',
};