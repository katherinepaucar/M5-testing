import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';

let mockPromiseInProgress = false;
jest.mock('react-promise-tracker', () => ({
  usePromiseTracker: () => ({ promiseInProgress: mockPromiseInProgress }),
}));

describe('./src/common/components/spinner/spinner.component.tsx', () => {
  it('should render spinner component', async () => {
    mockPromiseInProgress = true;
    render(<SpinnerComponent />);
    const spinner = screen.getByRole('presentation');

    expect(spinner).toBeInTheDocument();
  });
  it('should not render spinner component', async () => {
    mockPromiseInProgress = false;
    render(<SpinnerComponent />);
    const spinner = screen.queryByRole('presentation');

    expect(spinner).toEqual(null);
  });
});
