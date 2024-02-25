import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Session } from 'next-auth';

interface DefinitionProps {
  modalOpen: boolean;
  onHideHandler: () => void;
  bottomClick: boolean;
  phrase: string;
  translation: string;
  session: Session | null;
}

const Definition = ({
  modalOpen,
  onHideHandler,
  bottomClick,
  phrase,
  translation,
  session,
}: DefinitionProps) => {
  const addWordHandler = async () => {
    if (!session || !session.user) return;

    await fetch(`/api/add-word`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phrase,
        language: 'en',
        userId: session.user.id,
        translation
      }),
    });

    onHideHandler();
  };

  if (!modalOpen) return null;

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
        <div className='bg-opacity-20 fixed inset-0 bg-gray-500 transition-opacity' />
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
            <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
              <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mt-3 w-full text-center sm:mt-0 sm:text-left'>
                    <div className='mt-2 w-full'>
                      <div className='w-full'>
                        {!session && <div>Must log in to add words.</div>}
                        {session && !translation && (
                          <div className='flex items-center justify-center'>
                            <div
                              className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                              role='status'
                            >
                              <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                                Loading...
                              </span>
                            </div>
                          </div>
                        )}
                        {session && translation && (
                          <>
                            <div>Phrase: {phrase}</div>
                            <div>Definition: {translation}</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                <button
                  type='button'
                  className='btn btn-primary w-full sm:ml-3 sm:mt-0 sm:w-auto'
                  onClick={addWordHandler}
                  disabled={!session}
                >
                  Add
                </button>
                <button
                  type='button'
                  className='btn btn-secondary mt-3 w-full sm:mt-0 sm:w-auto'
                  onClick={onHideHandler}
                >
                  Cancel
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </>
  );
};

export default Definition;
