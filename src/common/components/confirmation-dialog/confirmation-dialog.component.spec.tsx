import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';
describe('./src/common/components/confirmation-dialog/confirmation-dialog.component.tsx', () => {
  const propsDialog = {
    isOpen: true,
    onAccept: jest.fn(),
    onClose: jest.fn(),
    title: 'test dialog',
    labels: {
      closeButton: 'close',
      acceptButton: 'accept',
    },
    children: <h1>child Data</h1>,
  };
  it('should open dialog', () => {
    render(<ConfirmationDialogComponent {...propsDialog} />);
    const dialogElement = screen.getByRole('dialog');

    expect(dialogElement).toBeInTheDocument();
  });

  it('should open dialog with title and labels mock', () => {
    render(<ConfirmationDialogComponent {...propsDialog} />);
    const dialogElement = screen.getByRole('dialog');

    expect(
      within(dialogElement).getByText(propsDialog.title)
    ).toBeInTheDocument();
    expect(
      within(dialogElement).getByText(propsDialog.labels.acceptButton)
    ).toBeInTheDocument();
    expect(
      within(dialogElement).getByText(propsDialog.labels.closeButton)
    ).toBeInTheDocument();
  });
  it('should  call onAccept and onClose if we click accept button', async () => {
    render(<ConfirmationDialogComponent {...propsDialog} />);
    const dialogElement = screen.getByRole('dialog');
    const acceptButton = within(dialogElement).getByRole('button', {
      name: propsDialog.labels.acceptButton,
    });
    await userEvent.click(acceptButton);
    expect(propsDialog.onAccept).toHaveBeenCalledTimes(1);
    expect(propsDialog.onClose).toHaveBeenCalledTimes(1);
  });
  it('should  not open dialog with isOpen a false', () => {
    const props = {
      ...propsDialog,
      isOpen: false,
    };
    render(<ConfirmationDialogComponent {...props} />);
    const dialogElement = screen.queryAllByRole('dialog');

    expect(dialogElement.length).toBe(0);
  });
});
