import { useCart } from "../context/cartContext";
import { QuantityProps } from "../utils/types";
import Button from "./button";


const QuantityButton =({productid,quantity}:QuantityProps) =>{
  const {dispatch} = useCart();

  const increaseQuantity = () => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: productid });

  };
  const decreaseQuantity = () => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: productid });
  };

  return (
    <div>
      <Button classN="bg-gray-300 hover:bg-gray-600 hover:text-white" title="-" OnClick={()=>decreaseQuantity()}/>
        <span className="text-bold font-xl">{quantity}</span>
      <Button classN="bg-gray-300 hover:bg-gray-600 hover:text-white" title="+" OnClick={()=>increaseQuantity()}/>
    </div>
  );
}

export default QuantityButton;