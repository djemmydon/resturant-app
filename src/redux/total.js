
import { useSelector } from "react-redux";

function useTotal() {
  const cart = useSelector((state) => state.cart.itemList);
  const totalPrice = cart.reduce((a, b) => {
    return (a += b.totalPrice);
  }, 0);
    
  const totalQty = cart.reduce((a, b) => {
    return (a += b.qty);
  }, 0);
  return {totalPrice, totalQty};
}

export default useTotal;
