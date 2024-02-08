'use client';
import React, { ReactNode, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { joinClasses } from '../utils/ClassUtils';

interface ModalOptions {
  contentClassName?: string;
}

const Modal = ({
  children,
  open,
  onChange,
  options,
}: {
  children: ReactNode;
  options?: ModalOptions;
  open: boolean;
  onChange: (value: boolean) => void;
}) => {
  useEffect(() => {
    // Remove scrollbar on <html> when modal is open
    if (open) {
      document.documentElement.classList.add('modal-open');
    } else {
      document.documentElement.classList.remove('modal-open');
    }
    () => {
      document.documentElement.classList.remove('modal-open');
    };
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className='z-50 backdrop-blur-sm bg-black/50 fixed inset-0 bottom-0 left-0 w-screen h-screen animate-fadeInFast overflow-y-auto grid place-items-center'>
          <Dialog.Content
            className={joinClasses(
              'bg-base-100 border flex flex-col border-content-300/10 relative m-4 max-sm:m-0  max-sm:p-0 p-10  p-2 rounded-lg items-center ',
              options?.contentClassName
            )}
          >
            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};


export default Modal;
