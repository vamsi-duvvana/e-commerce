import { Link } from "react-router-dom"

// const Counter = () => {
//     return (
//         <div>
//             <div className="relative inline-block">
//                 <span className="absolute top-0 right-0 inline-block px-3 py-1 font-semibold text-center rounded-full bg-red-500 text-white">
//                     0
//                 </span>
//             </div>
//         </div>
//     )
// }

const RightHeader = () => {
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
                </Link>
            </div>
            <div>
                <Link to="/cart">
                    <img className="w-5 h-5" src="https://res.cloudinary.com/dhqgc5kzm/image/upload/v1706884366/shopping-cart_watp2r.png" alt="cart-icon" />
                </Link>
            </div>

        </div>
    )
}

export default RightHeader
