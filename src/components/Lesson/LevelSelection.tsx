import { selectLevels } from '@/lib/actions';

const LevelSelection = () => {
  return (
    <form
      action={selectLevels}
      className='mt-4 flex w-3/5 flex-col items-center space-y-4'
    >
      <select
        defaultValue={[]}
        name='levels'
        multiple={true}
        className='block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:leading-6'
      >
        <option disabled value='DEFAULT'>
          Level
        </option>
        <option value='A1'>Beginner</option>
        <option value='A2'>Elementary</option>
        <option value='B1'>Lower Intermediate</option>
        <option value='B2'>Upper Intermediate</option>
        <option value='C1'>Advanced</option>
        <option value='C2'>Proficency</option>
      </select>
      <button
        type='submit'
        className='rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Choose Level
      </button>
    </form>
  );
};

export default LevelSelection;
