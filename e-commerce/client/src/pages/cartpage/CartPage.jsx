import CartItem from "./CartItem";
import ButtonRed from "../../components/ui/ButtonRed";
import ButtonWhite from "../../components/ui/ButtonWhite";
import { useSelector } from "react-redux";
import { selectCartEntities } from "../../features/cartSlice";
import { useState } from "react";
import ConfirmationModal from "../../components/sections/ConfirmationModal";

const CartPage = () => {
  const cartItems = useSelector(selectCartEntities);
  const total = useSelector((state) => state.cart.cartTotal);

  const cartItemsArray = Object.values(cartItems || {});
  return (
    <div className="mx-15 lg:mx-30">
      <div className="flex gap-3 my-10">
        <a className="text-gray-400" href="/">
          Home
        </a>
        <p>/</p>
        <a href="#">Cart</a>
      </div>

      <div className="flex flex-col ">
        <div className=" flex text-lg py-5 shadow-sm my-10 rounded">
          <h3 className="text-center w-1/4">Product</h3>
          <h3 className="w-1/4 text-center">Price</h3>
          <h3 className="w-1/4 text-center">Quantity</h3>
          <h3 className="w-1/4 text-center">Subtotal</h3>
        </div>
        {cartItemsArray.length ? (
          cartItemsArray.map((item) => <CartItem key={item.id} cartId={item} />)
        ) : (
          <p className="p-25 text-center">No Items In Cart</p>
        )}
      </div>
      <div className="flex justify-between ">
        <ButtonWhite text={"Return To Shop"} />
        <ButtonWhite text={"Update cart"} />
      </div>

      <TotalDisplay total={total} />
    </div>
  );
};

export default CartPage;

const TotalDisplay = ({ total }) => {
  const [isOpen, setIsOpen] = useState(false);
  const subTotal = useSelector((state) => state.cart.cartSubtotal);

  return (
    <div className="my-20 flex items-start justify-between">
      <div className="flex gap-5">
        <input
          className="border-2 p-3 rounded text-lg pr-15"
          type="text"
          placeholder="Coupon Code"
        />
        <ButtonRed text={"Apply Coupon"} />
      </div>

      <div className="border-2 px-5 py-8 rounded lg:w-2/5">
        <h4 className="text-2xl my-5">Cart Total</h4>
        <div className="my-3 flex text-lg justify-between">
          <p>Total:</p>
          <p>{`$${total.toFixed(2)}`}</p>
        </div>
        <div className="py-3 flex text-lg justify-between border-t-2 border-gray-300">
          <p>SubTotal:</p>
          <p>{`$${subTotal.toFixed(2)}`}</p>
        </div>
        <div className="py-3 flex text-lg justify-between border-y-2 border-gray-300">
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <div className="my-3 flex text-lg justify-between">
          <p>To Pay:</p>
          <p>{`$${subTotal.toFixed(2)}`}</p>
        </div>
        <div className="text-center">
          <ButtonRed
            onClick={() => {
              setIsOpen(true);
            }}
           text={"Proceed To Checkout"} />
        </div>
      </div>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        onConfirm={() => {
          console.log("confirmed");
        }}
        title="Are you sure?"
        message="Are you sure you want to remove this item from your cart?"
        confirmText="Proceed"
        cancelText="Cancel"
      />
    </div>
  );
};
