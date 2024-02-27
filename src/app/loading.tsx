import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Loading() {
  return (
    <div className='flex h-full'>
      <div className='m-auto w-full max-w-xs'>
        <div className='flex justify-center'>
          <FontAwesomeIcon icon={faSpinner} spin size='3x' />
        </div>
      </div>
    </div>
  );
}
