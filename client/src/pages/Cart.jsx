import { useEffect, useState } from 'react';
import CartItem from './../components/CartItem';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Cart = () => {
  const { productData } = useSelector((state) => state.bazar);
  const { userInfo } = useSelector((state) => state.bazar);
  const [totalAmt, setTotalAmt] = useState('');
  const [payNow, setPayNow] = useState(false);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed());
  }, [productData]);
  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error('Please signin to checkout');
    }
  };
  const payment = async (token) => {
    await axios.post('http://localhost:4000/pay', {
      amount: totalAmt * 100,
      token: token,
    });
  };
  return (
    <div className="max-w-screen-xl mx-auto py-20 flex">
      <CartItem />
      <div className="w-1/3 bg-[#fafafa] py-6 px-4">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
          <h2 className="text-2xl font-medium">Cart totals</h2>
          <p className="flex items-center gap-4 text-base">
            Subtotal <span className="font-bold text-lg">${totalAmt}</span>
          </p>
          <p className="flex items-start gap-4 text-base">
            Shipping{' '}
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
              expedita.
            </span>
          </p>
        </div>
        <p className="font-semibold flex justify-between mt-6">
          Total <span className="text-xl font-bold">${totalAmt}</span>
        </p>
        <button
          onClick={handleCheckout}
          className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
        >
          proceed to checkout
        </button>
        {payNow && (
          <div className="w-full mt-6 flex items-center justify-center">
            <StripeCheckout
              stripeKey="pk_test_51OJvdzGwXkoBUKLLqCjoBdmjGtJDeyDMx5IIezXgRhUXUxtIum6kHk0IF3SyWvdVTb44FhaF13kCbIeorBzGLgbw00ULuqxwlc"
              name="Bazar online Shopping"
              amount={totalAmt * 100}
              label="Pay to bazar"
              description={`Your Payment amount is $${totalAmt}`}
              email={userInfo.email}
              token={payment}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
