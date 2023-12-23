import { NavLink } from "react-router-dom";
import { useContext, useState, } from "react";
import Hamburger from "hamburger-react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
// import { useTranslation } from "react-i18next";
// import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);
  const { user, signout } = useContext(AuthContext)
  const handelLogOut = () => {
    signout()
      .then(() => {
        setOpen1(false)
        toast.success('Log Out Succesfull')
      })
  }
  //   const { t } = useTranslation();
  //   const { setLang } = useContext(AuthContext)
  //   const options = [
  //     { value: '', text: '--Choose an option--' },
  //     { value: 'en', text: 'English' },
  //     { value: 'ba', text: 'Bangla' },
  //   ]
  //   const [selected, setSelected] = useState(options[0].value);
  //   useEffect(()=>{
  //     const langValue = localStorage.getItem('lang')
  //     if(langValue === 'en'){
  //       setSelected('English')
  //     }
  //     setSelected('--Choose an option--')
  //   },[selected])
  const navLinks = [
    {
      path: "/",
      title: `Home`,
    },
    {
      path: "/product",
      title: `Prodcut`,
    },
    {
      path: "/login",
      title: `Login`,
    },
    {
      path: "/registration",
      title: `Registration`,
    },
    // {
    //   path:"/team_member",
    //   title:`${t('navber.team_member')}`
    // },
    // {
    //   path:"/contact",
    //   title:`${t('navber.contact')}`
    // }
  ];

  //   const handleLanguage = (event) => {
  //     setSelected(event.target.value);
  //     setLang(event.target.value)
  //     localStorage.setItem('lang',event.target.value)
  //   }
  //   const handleClick =()=>{
  //     setOpen(false)
  //   }

  return (
    <nav className="flex  relative   justify-between items-center px-5 md:px-9 lg:px-12 h-20 bg-black text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
      <img className="h-[80px] rounded-full" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg" alt="img" />
      <span className="block lg:hidden" ><Hamburger toggled={isOpen} size={20} toggle={setOpen} /></span>

      <div className={`flex flex-col lg:flex-row gap-3 z-50  lg:gap-8 transition-all lg:transition-none duration-300 pt-16 lg:pt-0 absolute lg:static top-20  h-[calc(100vh-80px)] lg:h-fit w-full md:w-1/3 lg:w-fit bg-gray-400  lg:bg-transparent items-center ${isOpen ? ' left-0  ' : '-left-[10000px]  '}`}>


        {
          navLinks.map(({ path, title }, index) => (
            <NavLink
              // onClick={handleClick}
              key={index}
              to={path}
              className={({ isActive }) =>
                isActive ? "text-white font-semibold isActive " : " text-white "
              }
            >
              {title}
            </NavLink>
          ))
        }
        <div className="cursor-pointer relative">
          {
            user && <span onClick={() => setOpen1(!isOpen1)} className="" ><img className="h-16 w-16 border-2 border-white rounded-full" src={user?.photoURL} alt="" /></span>
          }
          <div className="bg-white  text-black absolute right-0 top-20 rounded-md ">
            {
              isOpen1 && user && <div className="p-5 " >
                <p>Email: {user?.email}</p>
                <p onClick={handelLogOut} className="px-2 bg-[#4F46E5] text-white text-center mt-2 py-1 rounded-md">Log Out</p>
              </div>
            }
          </div>
        </div>
      </div>

    </nav >
  );
};

export default Navbar;

