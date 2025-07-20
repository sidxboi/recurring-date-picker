import { generateRecurringDates } from '../utils/recurrenceUtils';

test('generates daily recurrence', () => {
  const start = new Date('2025-07-01');
  const end = new Date('2025-07-05');
  const result = generateRecurringDates(start, end, 'daily', 1);
  expect(result.length).toBe(5);
});