'use client';
import { useRecurringStore } from '@/store/useRecurringStore';

export default function RecurrenceOptions() {
  const { frequency, setFrequency, interval, setInterval } = useRecurringStore();

  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm text-gray-700 mb-1">🔁 Frequency</label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as any)}
          className="border rounded-2xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-violet-400 transition bg-white shadow-sm"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-1">📌 Repeat Every</label>
        <input
          type="number"
          value={interval}
          min={1}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="border rounded-2xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-violet-400 transition bg-white shadow-sm"
        />
      </div>
    </div>
  );
}
