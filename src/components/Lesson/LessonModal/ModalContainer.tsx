import { Fragment, ReactNode } from 'react';
import { Transition } from '@headlessui/react';

interface ModalContainerProps {
  children: ReactNode;
  bottomClick: boolean;
}

export default function ModalContainer({
  children,
  bottomClick,
}: ModalContainerProps) {
  return (
    <>
      <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity' />
      </Transition.Child>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div
          className={`flex min-h-full justify-center p-16 text-center sm:py-40 ${bottomClick ? 'items-start' : 'items-end'}`}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            {children}
          </Transition.Child>
        </div>
      </div>
    </>
  );
}
