import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Product = () => {
    const [porduct, setProdcut] = useState([])
    // const product =
    //     [
    //         {
    //             "id": 1,
    //             "image": "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fHww",
    //             "title": "Product 1",
    //             "description": "A fantastic product with great features.",
    //             "price": 29.99,
    //             "variations": [
    //                 {
    //                     "id": 1,
    //                     "color": "red",
    //                     "size": "S",
    //                     "available": true,
    //                     "price": 29.99
    //                 },
    //                 {
    //                     "id": 2,
    //                     "color": "blue",
    //                     "size": "M",
    //                     "available": false
    //                 },
    //                 {
    //                     "id": 3,
    //                     "color": "green",
    //                     "size": "L",
    //                     "available": true,
    //                     "price": 32.99
    //                 }
    //             ]
    //         },
    //         {
    //             "id": 1,
    //             "image": "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fHww",
    //             "title": "Product 1",
    //             "description": "A fantastic product with great features.",
    //             "price": 29.99,
    //             "variations": [
    //                 {
    //                     "id": 1,
    //                     "color": "red",
    //                     "size": "S",
    //                     "available": true,
    //                     "price": 29.99
    //                 },
    //                 {
    //                     "id": 2,
    //                     "color": "blue",
    //                     "size": "M",
    //                     "available": false
    //                 },
    //                 {
    //                     "id": 3,
    //                     "color": "green",
    //                     "size": "L",
    //                     "available": true,
    //                     "price": 32.99
    //                 }
    //             ]
    //         },
    //         {
    //             "id": 1,
    //             "image": "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fHww",
    //             "title": "Product 1",
    //             "description": "A fantastic product with great features.",
    //             "price": 29.99,
    //             "variations": [
    //                 {
    //                     "id": 1,
    //                     "color": "red",
    //                     "size": "S",
    //                     "available": true,
    //                     "price": 29.99
    //                 },
    //                 {
    //                     "id": 2,
    //                     "color": "blue",
    //                     "size": "M",
    //                     "available": false
    //                 },
    //                 {
    //                     "id": 3,
    //                     "color": "green",
    //                     "size": "L",
    //                     "available": true,
    //                     "price": 32.99
    //                 }
    //             ]
    //         },
    //         {
    //             "id": 1,
    //             "image": "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fHww",
    //             "title": "Product 1",
    //             "description": "A fantastic product with great features.",
    //             "price": 29.99,
    //             "variations": [
    //                 {
    //                     "id": 1,
    //                     "color": "red",
    //                     "size": "S",
    //                     "available": true,
    //                     "price": 29.99
    //                 },
    //                 {
    //                     "id": 2,
    //                     "color": "blue",
    //                     "size": "M",
    //                     "available": false
    //                 },
    //                 {
    //                     "id": 3,
    //                     "color": "green",
    //                     "size": "L",
    //                     "available": true,
    //                     "price": 32.99
    //                 }
    //             ]
    //         }
    //         // ... more products
    //     ]
    console.log(porduct)
    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await fetch(`${import.meta.env.VITE_SERVER_LINK}/products`)
                const data = await res.json()
                setProdcut(data)
            }
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <div className="bg-black md:h-screen pt-3 px-5">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                    className="w-full h-64 object-cover rounded-lg"
                    src={product.image}
                    alt={product.title}
                />
                <div className="p-4">
                    <h2 className="text-lg font-medium">{product.title}</h2>
                    <div className="mt-2">
                        {product.variations.map((variation) => (
                            <div key={variation.id} className="flex items-center mb-2">
                                <span className="w-32 mr-4">{variation.color}</span>
                                <span className="w-32 mr-4">{variation.size}</span>
                                {variation.available && (
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                {
                    porduct.map(({ _id, image, title, price }) => (
                        <div key={_id} className="bg-white shadow-md rounded-lg max-w-sm w-full dark:bg-gray-800 dark:border-gray-700">
                            <Link to={`/product/${_id}`} className="flex  justify-center" href="#">
                                <img className="rounded-t-lg w-full h-80 " src={image} alt="product image" />
                            </Link>
                            <div className="px-5 pb-5">
                                <a href="#" >
                                    <h3 className="text-gray-900 mt-2 font-semibold text-xl tracking-tight dark:text-white">{title}</h3>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                                    <Link to={`/product/${_id}`} href="#"
                                        className="text-white text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detils</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Product;