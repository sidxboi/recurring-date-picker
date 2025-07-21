'use client';
import { useRecurringStore } from '@/store/useRecurringStore';

export default function DateRangePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useRecurringStore();

  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm text-gray-700 mb-1">📅 Start Date</label>
        <input
          type="date"
          value={startDate ? startDate.toISOString().split('T')[0] : ''}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="border rounded-2xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition bg-white shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-1">End Date (optional)</label>
        <input
          type="date"
          value={endDate ? endDate.toISOString().split('T')[0] : ''}
          onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
          className="border rounded-2xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition bg-white shadow-sm"
        />
      </div>
    </div>
  );
}
