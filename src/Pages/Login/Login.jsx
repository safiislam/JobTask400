import React, { useContext, useState } from 'react';
import image from '../../assets/Animation - 1703254750743.json'
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    const { login } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const [isOpen, setIsOpen] = useState(false)
    const onSubmit = (data) => {
        const { email, password } = data
        login(email, password)
            .then(() => {
                toast.success('Login Successfull')
            })
            .catch((err) => {
                // if (err) {
                    toast.error('Login Faild')
                // }
            })
    }
    return (
        <div>
            <div>
                <div className="relative min-h-screen  grid bg-black ">
                    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
                        {/* style={{backgroundImage:`${<Lottie animationData={image} loop={true} />}`}} */}

                        <div className="relative sm:w-1/2 xl:w-3/5  h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover  ">
                            <div className='w-full h-fit flex justify-center items-center '>
                                <Lottie className='' animationData={image} loop={true} />
                            </div>

                        </div>

                        <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
                            <div className="max-w-xl w-full space-y-12">
                                <div className="lg:text-left text-center">

                                    <div className="flex items-center justify-center ">
                                        <div className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                                            <p className='text-white text-lg font-semibold text-center'>
                                                Login
                                            </p>
                                            <form onSubmit={handleSubmit(onSubmit)} className="  flex flex-col space-y-4  mt-10">
                                                <label className="font-bold text-lg text-white " >Email</label>
                                                <input {...register("email")} type="email" required placeholder="Enter Email" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />

                                                <label className="font-bold text-lg text-white">Pin</label>
                                                <div className='relative'>
                                                    <input {...register("password")} type={!isOpen ? 'password' : 'text'} placeholder="****" className="border rounded-lg py-3 px-3 w-full bg-black border-indigo-600 placeholder-white-500 text-white" />
                                                    <span className='text-white cursor-pointer absolute top-4 right-4' onClick={() => setIsOpen(!isOpen)}>
                                                        {
                                                            !isOpen ? <FaEye size={18} /> : <FaEyeSlash size={18} />
                                                        }
                                                    </span>
                                                </div>

                                                <button className="border border-indigo-600 mt-5 bg-black text-white rounded-lg py-3 font-semibold" >Login</button>
                                            </form>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;