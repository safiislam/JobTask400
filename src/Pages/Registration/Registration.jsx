import image from '../../assets/Animation - 1703254750743.json'
import Lottie from "lottie-react";
import { useContext, useState } from 'react';
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import { uploadImage } from '../../utils/getImageLink';
import toast from 'react-hot-toast';
// import uploadImage from '../../utils/getImageLink';

const Registration = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { signUp, setName } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const { email, name, image, password } = data
        const imageData = image[0]
        data.role = 'customer'
        signUp(email, password)
            .then(() => {
                uploadImage(imageData)
                    .then((imageData) => {
                        const url = imageData.data.display_url;
                        data.image = url
                        delete data['password']
                        setName({ name, url })
                        toast.success('Registration Successfull')
                        reset()
                        fetch(`${import.meta.env.VITE_SERVER_LINK}/user`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(data)
                        })
                            .then(res => {
                                console.log(res)
                            })
                    })

            })
            .catch(err => {
                if (err) {
                    toast.error('Registration failed ')
                }
            })


    }
    return (
        <div>
            <div>
                <div className="relative min-h-screen  grid bg-black ">
                    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">

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
                                                Registration
                                            </p>
                                            <form onSubmit={handleSubmit(onSubmit)} className="  flex flex-col space-y-3  mt-10">
                                                <label className="font-bold text-lg text-white " >Email</label>
                                                <input {...register("email")} required type="email" placeholder="Enter Email" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
                                                <label className="font-bold text-lg text-white " >Name</label>
                                                <input {...register("name")} type="text" placeholder="Enter Name" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
                                                <label className="font-bold text-lg text-white " >Name</label>
                                                <input {...register("image")} type="file" placeholder="Enter Name" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
                                                <label className="font-bold text-lg text-white">Pin</label>
                                                <div className='relative'>
                                                    <input {...register("password", { reqrequired: true, pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: 'Must contain at least one uppercase, lowercase, number, and special character' } })} type={!isOpen ? 'password' : 'text'} placeholder="****" className="border rounded-lg py-3 px-3 w-full bg-black border-indigo-600 placeholder-white-500 text-white" />
                                                    <span className='text-white cursor-pointer absolute top-4 right-4' onClick={() => setIsOpen(!isOpen)}>
                                                        {
                                                            !isOpen ? <FaEye size={18} /> : <FaEyeSlash size={18} />
                                                        }
                                                    </span>
                                                </div>
                                                <div className='text-red-600'>
                                                    {
                                                        errors?.password && <span>{errors?.password?.message}</span>
                                                    }
                                                </div>

                                                <button className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold" >Create Account</button>
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

export default Registration;