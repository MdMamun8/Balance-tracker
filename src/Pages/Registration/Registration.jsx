import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className='w-[1200px] mt-4'>
      <div className=''>
        <div className=' flex flex-col justify-center items-center gap-5 w-2/5 my-0 mx-auto p-6 border-2 border-orange-300'>
          <div className='heading'>
            <h1>CREATE AN ACCOUNT</h1>
          </div>
          <div className='inputs'>
            <form className=''>
              <div className=' block justify-center my-0 mx-auto'>
                <label>
                  <input
                    className='w-96 h-14 rounded-lg border-2 border-orange-300 mb-5 p-5'
                    type='text'
                    placeholder='Your Name'
                  />
                </label>
                <br></br>
                <label>
                  <input
                    className='w-96 h-14 rounded-lg border-2 border-orange-300 mb-5 p-5'
                    type='email'
                    placeholder='Your Mail'
                  />
                </label>
                <br></br>
                <label>
                  <input
                    className='w-96 h-14 rounded-lg border-2 border-orange-300 mb-5 p-5'
                    type='text'
                    placeholder='Your Password'
                  />
                </label>
                <br></br>
                <label>
                  <input
                    className='w-96 h-14 rounded-lg border-2 border-orange-300 mb-5 p-5'
                    type='text'
                    placeholder='Confirm Your Password'
                  />
                </label>
              </div>
            </form>
            <button className='w-96 rounded-lg border-2 border-orange-300 hover:text-white hover:bg-orange-300 hover:border-white ease-in-out duration-500 h-8'>
              register
            </button>
          </div>
          <small>
            already have an account? <Link to='/login'>log in</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Registration;
