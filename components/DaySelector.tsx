'use client';
import { useRecurringStore } from '@/store/useRecurringStore';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function DaySelector() {
  const { daysOfWeek, setDaysOfWeek, frequency } = useRecurringStore();

  if (frequency !== 'weekly') return null;

  const toggleDay = (index: number) => {
    setDaysOfWeek(
      daysOfWeek.includes(index)
        ? daysOfWeek.filter((d) => d !== index)
        : [...daysOfWeek, index]
    );
  };

  return (
    <div className="mb-8">
      <label className="block text-sm text-gray-700 mb-2">📆 Select Days of the Week</label>
      <div className="flex flex-wrap gap-3">
        {days.map((day, index) => (
          <button
            key={day}
            onClick={() => toggleDay(index)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition border
              ${
                daysOfWeek.includes(index)
                  ? 'bg-gradient-to-br from-violet-500 to-indigo-500 text-white border-transparent shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-violet-100'
              }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
