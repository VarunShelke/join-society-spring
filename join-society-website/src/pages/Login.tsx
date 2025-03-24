import { HttpStatusCode } from 'axios';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { post } from '../axios/api';
import { Button } from '../components';
import { LOGIN } from '../constants/endpoints';
import { setLoginStatus } from '../features/auth/authSlice';
import { store } from '../store';
import { checkLoginFormData } from '../utils/checkLoginFormData';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Get form data
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // Check if form data is valid
    if (!checkLoginFormData(data)) return;

    const response = await post({ endpoint: LOGIN, data: data });
    if (response?.status === HttpStatusCode.Ok) {
      toast.success('Login successful!');
      localStorage.setItem('user', JSON.stringify(response.data));
      store.dispatch(setLoginStatus({ loginStatus: true, loggedInUser: response.data }));
      navigate('/');
      return;
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/user-profile');
    }
  }, [navigate]);

  return (
    <div className="max-w-screen-2xl mx-auto pt-24 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="max-w-5xl mx-auto flex flex-col gap-5 max-sm:gap-3 items-center justify-center max-sm:px-5"
      >
        <h2 className="text-5xl text-center mb-5 font-thin max-md:text-4xl max-sm:text-3xl max-[450px]:text-xl max-[450px]:font-normal">
          Welcome Back! Login here:
        </h2>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Your email</label>
            <input
              type="email"
              className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
              placeholder="Enter email address"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Your password</label>
            <input
              type="password"
              className="bg-white border border-black text-xl py-2 px-3 w-full outline-none max-[450px]:text-base"
              placeholder="Enter password"
              name="password"
            />
          </div>
        </div>
        <Button type="submit" text="Login" mode="brown" />
        <Link to="/register" className="text-xl max-md:text-lg max-[450px]:text-sm">
          Don’t have an account? <span className="text-secondaryBrown">Register now</span>.
        </Link>
      </form>
    </div>
  );
};

export default Login;
