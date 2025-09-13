export interface Course {
  id: string;
  name: string;
  instructor: string;
  time: string;
  room: string;
}

export interface CampusEvent {
  id: string;
  name:string;
  date: string;
  time: string;
  location: string;
}

export interface DiningOption {
  name: string;
  hours: string;
  specials?: string[];
}

export interface LibraryInfo {
  name: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
}

export interface Student {
    name: string;
    studentId: string;
    program: string;
    avatarUrl?: string;
}

export enum Sender {
  User = 'user',
  Bot = 'bot',
}

export interface Message {
  text: string;
  sender: Sender;
}