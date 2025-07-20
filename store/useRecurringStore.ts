import { create } from 'zustand';

type Frequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

interface RecurrenceState {
  startDate: Date | null;
  endDate: Date | null;
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  daysOfWeek: number[]; // <--- ADD THIS
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date | null) => void;
  setFrequency: (f: RecurrenceState['frequency']) => void;
  setInterval: (i: number) => void;
  setDaysOfWeek: (days: number[]) => void; // <--- ADD THIS
}

export const useRecurringStore = create<RecurrenceState>((set) => ({
  startDate: null,
  endDate: null,
  frequency: 'monthly',
  interval: 1,
  daysOfWeek: [], // ✅ INITIALIZE HERE
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setFrequency: (frequency) => set({ frequency }),
  setInterval: (interval) => set({ interval }),
  setDaysOfWeek: (days) => set({ daysOfWeek: days }),
}));
