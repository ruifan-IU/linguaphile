export default function Login() {
  return (
    <div className='flex h-[calc(100vh-76px)] bg-base-200'>
      <div className='w-full max-w-xs m-auto bg-base-100 rounded-box p-10'>
        <h1 className='text-2xl font-bold mb-10 text-center'>Login</h1>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input type='text' placeholder='email' className='input input-bordered' />
        </div>
        <div className='form-control mt-3'>
          <label>
            <span className='label-text'>Password</span>
          </label>
          <input type='password' placeholder='password' className='input input-bordered' />
        </div>
        {/* <div className='form-control mt-6 flex-row gap-2'>
          <input type='checkbox' className='checkbox' />
          <label>
            <span className='label-text'>Remember me</span>
          </label>
        </div> */}
        <div className='form-control mt-20'>
          <button className='btn btn-primary text-xl w-full'>Login</button>
        </div>
      </div>
    </div>
  );
}
