import {useRef,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  clearItem,
  toggleSelection,
  selectCartItemById,
} from "../../features/cartSlice";
import { productData } from "../../assets/data/data"

const CartItem = ({ cartId }) => {
  const product = productData.find((item) => item.id === cartId.id);
  const cartItem =
    useSelector((state) => selectCartItemById(state, product.id)) || [];
  const dispatch = useDispatch();
  const itemRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    ref={itemRef} className="flex my-5 shadow rounded py-5 items-center relative"
    >
      <div className="flex w-1/4 pl-20 items-center gap-5 overflow-ellipsis">
        <input
          type="checkbox"
          className="w-5"
          checked={cartId.selected}
          onChange={() => dispatch(toggleSelection(cartId.id))}
        />
         <img className="w-10" src={product.image} alt="product image" />
        <p>{product.title.substring(0, 20)}</p>
      </div>
      <p className="w-1/4 text-center">${product.price}</p>
      <div className="w-1/4 flex justify-center ">
        <div className="flex justify-center border-2 rounded-sm items-center border-gray-300 ">
          <div className="p-3">
            {cartItem.quantity.toString().padStart(2, "0")}
          </div>
          <div className="flex h-full flex-col">
            <button
              className="h-1/2 px-1 active:bg-gray-200 transition-active duration-200 hover:cursor-pointer"
              onClick={() => {
                dispatch(addItem({ id: product.id }));
              }}
            >
              <img src="cart/arrowUp.svg" alt="increase icon" />
            </button>
            <button
              className="h-1/2 px-1 active:bg-gray-200 transition-active duration-200 hover:cursor-pointer"
              onClick={() => {
                dispatch(removeItem(product.id));
              }}
            >
              <img src="cart/arrowDown.svg" alt="decrease icon" />
            </button>
          </div>
        </div>
      </div>
      <p className="w-1/4 text-center">
        ${(product.price * cartItem.quantity).toFixed(2)}
      </p>
      <button 
       onClick={()=>{dispatch(clearItem(product.id))}}
       className={`h-1/4 hover:cursor-pointer absolute -top-2 -right-2 text-white text-lg flex justify-center items-center p-4 pb-5 rounded-full ${isHovered? "bg-gray-300":""}`}>x</button>
    </div>
  );
};

export default CartItem;
