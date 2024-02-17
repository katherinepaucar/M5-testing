
import {
  renderHook,
  act,
} from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';
describe('./src/common/components/confirmation-dialog/confirmation-dialog.hook.ts', () => {
  it('useConfirmationDialog hook should return deafult values when it calls', () => {
    const objectLookUp: Lookup = { id: '', name: '' };
    const { result } = renderHook(() => useConfirmationDialog());

    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual(objectLookUp);
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });
  it('if it calls onAccept should return object  itemToDelete with empty values', () => {
    const objectLookUp: Lookup = { id: '', name: '' };
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onAccept();
    });

    expect(result.current.itemToDelete).toEqual(objectLookUp);
  });
  it('if it calls onClose should return isOpen to false', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onClose();
    });
    expect(result.current.isOpen).toEqual(false);
  });
  it('if it calls onOpenDialog with correct values  should return correct object', () => {
    const object: Lookup = { id: '1', name: 'test' };
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(object);
    });
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(object);
  });
});
