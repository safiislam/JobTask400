import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa"
import { AuthContext } from "../../Provider/AuthProvider";
import { BsCartFill } from "react-icons/bs";


const ProdcutDetailsPage = () => {
    const { user, addToCart, setAddToCart } = useContext(AuthContext)
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [image, setImage] = useState('')
    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await fetch(`${import.meta.env.VITE_SERVER_LINK}/product/${id}`)
                const data = await res.json()
                setProduct(data)
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [id])
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [cout, setCout] = useState(1)

    const handleAddToCart = () => {
        const itemData = { productId: id, productName : product.title, color, size, quentity: cout, price: product?.price * cout }
        setAddToCart([...addToCart, itemData])

    }
    console.log(addToCart)
    useEffect(() => {
        setImage(product.image)
    }, [product.image])
    return (
        <div className="relative ">
            <Link to={'/cart_product'} className="fixed right-0 top-[50%] bg-[#4F46E5] px-3 py-3 rounded-2xl cursor-pointer">
                <span><BsCartFill className="text-4xl text-amber-300 " /></span>
                <span className="bg-black px-1 text-white absolute -top-3 rounded-full -left-1">{addToCart.length}</span>
            </Link>
            <div className="grid grid-cols-2 gap-5 mt-4" >
                <div className="">
                    <div className="grid grid-cols-4 grid-rows-2 gap-3 place-items-center place-content-center">
                        <div className="col-span-3 row-span-1">
                            <img src={image} alt="" />
                        </div>
                        <div className="col-span-1 space-y-4 row-span-1">
                            {
                                product?.imagGellary?.map((item, index) => <img onClick={() => setImage(item)} key={index} src={item}></img>)
                            }
                        </div>

                    </div>
                </div>
                <div className="  py-4">
                    <div className="border-b-2">
                        <h1 className="text-xl w-[80%] font-semibold">{product.title}</h1>
                        <p>{product.description}</p>
                        <p className="text-4xl pb-8 font-bold text-[#4F46E5]">${product.price}</p>
                    </div>
                    <div className="mt-8">
                        <div>
                            <p className="text-lg font-semibold">Size:</p>
                            <p className="flex gap-5 mt-2 ">
                                {
                                    product?.size?.map((item, index) => <p onClick={() => setSize(item)} className={`border px-3 cursor-pointer hover:bg-black ${size === item && 'bg-black text-white'} hover:text-white transition-all duration-200 border-black`} key={index}>{item}</p>)
                                }
                            </p>
                        </div>
                        <div className="mt-5 border-b-2 pb-8" >
                            <p className="text-lg font-semibold">Color: {color}</p>
                            <div className="flex gap-4 ">
                                {
                                    product?.color?.map(({ name, color }, index) => <p key={index} onClick={() => setColor(name)} style={{ backgroundColor: `${color}` }} className="w-14 cursor-pointer h-14 rounded-full border-2" ></p>)
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex  gap-4 items-center py-8 ps-8">
                                <p onClick={() => cout >= 2 && setCout(cout - 1)} className="text-3xl cursor-pointer font-bold">-</p>
                                <input type="text" value={cout} className="border text-center text-lg border-black outline-none p-1 w-[60px]" />
                                <p onClick={() => setCout(cout + 1)} className="text-3xl font-bold cursor-pointer">+</p>
                            </div>
                            {
                                user && color && size && <button onClick={handleAddToCart} className="relative inline-flex items-center justify-start px-6 h-11 border  overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#4F46E5] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full flex gap-2 text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Button Text <FaLongArrowAltRight size={26} /></span>
                                </button>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdcutDetailsPage;