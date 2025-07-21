'use client';
import DateRangePicker from "@/components/DateRangePicker";
import RecurrenceOptions from "@/components/RecurrenceOptions";
import DaySelector from "@/components/DaySelector";
import CalendarPreview from "@/components/CalendarPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-emerald-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl border border-gray-100">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-8 drop-shadow-sm">
          Recurring Date Picker
        </h1>
        <DateRangePicker />
        <RecurrenceOptions />
        <DaySelector />
        <CalendarPreview />
      </div>
    </main>
  );
}
