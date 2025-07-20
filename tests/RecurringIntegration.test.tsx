import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/app/page';

describe('Recurring Date Picker Integration', () => {
  it('renders and interacts correctly', async () => {
    render(<Home />);
    const startInput = screen.getByLabelText(/start date/i);
    await userEvent.type(startInput, '2025-07-01');
    expect(startInput).toHaveValue('2025-07-01');
  });
});
