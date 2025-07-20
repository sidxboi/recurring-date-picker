export function generateRecurringDates(
  start: Date,
  end: Date | null,
  frequency: string,
  interval: number,
  daysOfWeek?: number[]
): Date[] {
  const dates: Date[] = [];
  let current = new Date(start);
  const endDate = end || new Date(start.getFullYear(), start.getMonth() + 12, start.getDate());

  while (current <= endDate) {
    if (frequency === 'weekly') {
      if (daysOfWeek && daysOfWeek.includes(current.getDay())) {
        dates.push(new Date(current));
      }
      current.setDate(current.getDate() + 1); // daily step when filtering
    } else {
      dates.push(new Date(current));
      switch (frequency) {
        case 'daily':
          current.setDate(current.getDate() + interval);
          break;
        case 'monthly':
          current.setMonth(current.getMonth() + interval);
          break;
        case 'yearly':
          current.setFullYear(current.getFullYear() + interval);
          break;
      }
    }
  }

  return dates;
}
