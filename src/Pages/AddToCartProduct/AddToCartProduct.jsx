import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddToCartProduct = () => {
    const { addToCart, setAddToCart } = useContext(AuthContext)

    const handleDelate = (id) => {

        const slice = addToCart.filter(item => {
            return item.productId !== id
        })
        setAddToCart([...slice])

    }
    console.log(addToCart)
    return (
        <div className="text-white bg-black h-screen pt-3">
            <div className="flex justify-end pe-5">
                <button className="px-4 py-2 bg-blue-600 rounded-md ">Payment</button>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="border-y-2 text-center border-white">
                        <th>Name</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Quentity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    {
                        addToCart?.map(({ productId, color, price, size, quentity, productName }, index) => (
                            <tr className="mt-8 text-center border-b-2 border-white" key={index}>
                                <td>{productName}</td>
                                <td>{color}</td>
                                <td>{size}</td>
                                <td>{quentity}</td>
                                <td>{price}</td>
                                <td><button onClick={() => handleDelate(productId)} className="bg-red-600 px-3  py-3 my-3">Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>


            </table>
        </div>
    );
};

export default AddToCartProduct;