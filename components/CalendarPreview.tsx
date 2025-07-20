'use client';
import { useRecurringStore } from '@/store/useRecurringStore';
import { generateRecurringDates } from '@/utils/recurrenceUtils';

export default function CalendarPreview() {
  const { startDate, endDate, frequency, interval, daysOfWeek } = useRecurringStore();

  if (!startDate) return null;

  const dates = generateRecurringDates(startDate, endDate, frequency, interval, daysOfWeek);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3 text-indigo-700">🗓️ Preview</h2>
      <div className="max-h-64 overflow-y-auto border border-gray-200 bg-white rounded-2xl p-4 text-sm shadow-inner">
        <ul className="space-y-1 text-gray-800">
          {dates.map((date, i) => (
            <li key={i}>📅 {date.toDateString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
