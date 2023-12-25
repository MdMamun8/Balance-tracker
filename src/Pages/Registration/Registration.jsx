import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
const Registration = () => {
  const [currUser, setCurrUser] = useState({});
  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };
  const handlehome = () => {
    navigate("/");
  };
  const user = auth.currentUser;
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please fill the form",
      });
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 8 characters, one uppercase letter, one lowercase letter, and one number",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            sendEmailVerification(auth.currentUser).then((res) => {
              console.log(userCredential);
              navigate("/");
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrUser(user);
    });
  }, [user]);

  return (
    <div className=' text-center '>
      <div className='uppercase text-orange-300 shadow-xl p-1 m-2'>
        <h1>Name : {currUser?.displayName}</h1>
      </div>
      <div className=''>
        <div className=' flex flex-col justify-center items-center gap-1 w-[30rem] my-0 mx-auto p-6 border-2 border-orange-300'>
          <div className='heading'>
            <h1>CREATE AN ACCOUNT</h1>
          </div>
          <div className='inputs'>
            <form onSubmit={handleSubmit} className=''>
              <div className=' block justify-center my-0 mx-auto'>
                <label>
                  <input
                    className='w-96 h-10 rounded-lg border-2 border-orange-300 mb-2 p-5'
                    type='text'
                    placeholder='Your Name'
                    name='name'
                  />
                </label>
                <br></br>
                <label>
                  <input
                    className='w-96 h-10 rounded-lg border-2 border-orange-300 mb-2 p-5'
                    type='email'
                    placeholder='Your Mail'
                    name='email'
                  />
                </label>
                <br></br>
                <label>
                  <input
                    className='w-96 h-10 rounded-lg border-2 border-orange-300 mb-2 p-5'
                    type='text'
                    placeholder='Your Password'
                    name='password'
                  />
                </label>
                <br></br>
                <label>
                  <input
                    className='w-96 h-10 rounded-lg border-2 border-orange-300 mb-3 p-5'
                    type='text'
                    placeholder='Confirm Your Password'
                    name='confirmPassword'
                  />
                </label>
              </div>
              <button className='w-96 rounded-lg border-2 border-orange-300 hover:text-white hover:bg-orange-300 hover:border-white ease-in-out duration-500 h-8'>
                register
              </button>
            </form>
          </div>
          <small>
            already have an account? <Link to='/login'>log in</Link>
          </small>
          <div className='mt-5 flex gap-3'>
            <button
              className='w-24 bg-slate-300 rounded-xl hover:bg-slate-400 ease-in-out duration-300'
              onClick={handleback}>
              Go back
            </button>
            <button
              className='w-24 bg-slate-300 rounded-xl hover:bg-slate-400 ease-in-out duration-300'
              onClick={handlehome}>
              Go Home
            </button>
          </div>
          <div className=' text-black-300 text-center'>
            <h1>or</h1>
            <h2 className=' uppercase text-2xl'>login with</h2>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Registration;
