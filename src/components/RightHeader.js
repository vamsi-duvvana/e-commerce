import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const RightHeader = () => {

    const cart = useSelector(store => store.cart);
    const fav = useSelector(store => store.favorites);

    return (
        <div className="flex items-center space-x-5">
            <div>
                <Link to="/login">
                    <img className="w-5 h-5" src="https://res.cloudinary.com/dhqgc5kzm/image/upload/v1706884135/user_zn9xqo.png" alt="user-icon" />
                </Link>
            </div>
            <div className="inline-block relative">
                <Link to="/fav">
                    <img className="w-5 h-5" src="https://res.cloudinary.com/dhqgc5kzm/image/upload/v1706884364/heart_rcvxhc.png" alt="heart-icon" />
                    <div className="absolute right-0 top-0 text-xs bg-gray-700 text-white rounded-full -mt-2 -mr-2 px-1">{fav.favCounter}</div>
                </Link>
            </div>
            <div className="inline-block relative">
                <Link to="/cart">
                    <img className="w-5 h-5" src="https://res.cloudinary.com/dhqgc5kzm/image/upload/v1706884366/shopping-cart_watp2r.png" alt="cart-icon" />
                    <div className="absolute right-0 top-0 text-xs bg-red-700 text-white rounded-full -mt-2 -mr-2 px-1">{cart.cartItems}</div>
                </Link>
            </div>

        </div>
    )
}

export default RightHeader
