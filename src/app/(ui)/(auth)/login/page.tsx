
"use client";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'; // For App Router
import { useState } from 'react';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const [loginError, setLoginError] = useState('');
// testing modified
    type LoginFormInputs = {
      username: string;
      password: string;
    };
    
    const onSubmit = async (data: LoginFormInputs) => {
      const { username, password } = data;
    
      if (username === 'bansal5451' && password === 'bansal@123') {
        localStorage.setItem('isLoggedIn', 'true');
        router.push('/dashboard');
      } else {
        setLoginError('Invalid username or password');
      }
    };

    return (
     
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200 relative overflow-hidden ">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mt-2">Welcome</h2>
          <p className="text-gray-500 text-sm">Login to continue</p>
        </div>  
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            id="username"
                            type="text"
                            {...register('username', { required: 'Username is required' })}
                            className={`mt-1 block w-full border rounded-md p-2 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            {...register('password', { required: 'Password is required' })}
                            className={`mt-1 block w-full border rounded-md p-2 ${errors.password ? 'border-red-500' : 'border-gray-300'}`} />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>
                      <div className="flex items-center justify-between mt-4">
                         <label className="flex items-center text-sm text-gray-600">
                          <input type="checkbox" className="mr-2 border-gray-300" /> Remember me
                       </label>
                     </div>
                       <br />
                    {loginError && <p className="text-red-500 text-sm mb-4">{loginError}</p>}
                    <div className="flex items-center justify-between">
                       <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                            Login
                      </button>
                    </div>
                    <br />
                </form>
            </div>
        </div>
       
    );
};

export default LoginPage;
