import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('./src/common/components/confirmation-dialog/confirmation-dialog.component.tsx', () => {
  const propsDialog = {
    isOpen: true,
    onAccept: jest.fn(),
    onClose: jest.fn(),
    title: 'test',
    labels: {
      closeButton: 'close',
      acceptButton: 'accept',
    },
    children: <h1>child Data</h1>,
  };
  it('should open dialog with data mock', () => {
    render(<ConfirmationDialogComponent {...propsDialog} />);
    const dialogElement = screen.getByRole('dialog');

    expect(dialogElement).toBeInTheDocument();
  });
});
