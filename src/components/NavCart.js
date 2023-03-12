import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../redux/product";

function NavCart({ handleOpen, open }) {
  const cart = useSelector((state) => state.cart.itemList);
  const total = useSelector((state) => state.cart.allTotalPrice);

  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(cartActions.removeCart({ id: item.id }));
  };

  const openn =
    "absolute z-10 top-0   overflow-scroll ease-in-out duration-700";
  return (
    <div className={open ? `${openn} -right-full ` : `${openn} right-0`}>
      <div className=" absolute top-0 left-0 bg-gradient-to-b w-full hidden "></div>
      <div className="w-[300px] h-screen bg-white flex flex-col items-start gap-16">
        <div className=" flex justify-between px-5 items-center h-28 w-full">
          <div>
            <h4 className=" text-md text-[#ed1d24] font-bold">Shopping Cart</h4>
          </div>
          <div
            onClick={handleOpen}
            className="w-7 text-center text-white cursor-pointer"
          >
            <span className="material-symbols-outlined text-black text-2xl">
              cancel
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center w-full ">
          {!cart?.length ? (
            <div className="animate-bounce">
              <h1 className=" text-xl font-bold"> Your Cart Is Empty</h1>
            </div>
          ) : (
            cart?.map((item) => (
              <div key={item._id} className="flex justify-around w-full  ">
                <div className=" h-12 flex gap-10 justify-around items-center ">
                  <img className="h-full" src={item.image} alt={item.image} />
                </div>
                <div className=" text-grey w-20">
                  <h4 className=" text-grey text-xl font-light">{item.name}</h4>
                  <p>
                    {item.qty} * ${item.price}
                  </p>
                </div>
                <div
                  onClick={() => handleRemove(item)}
                  className=" w-7 h-7 text-center text-white"
                >
                  <span className="material-symbols-outlined text-black text-2xl">
                    cancel
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className=" flex justify-between px-5 items-center h-28 w-full border-t-2 border-b-2">
          <div>
            <h4 className=" text-md text-[#ed1d24] font-bold">Shopping Cart</h4>
          </div>
          <div className="  text-center text-grey">
            <span className="font-bold text-md">
              NGN {total.toLocaleString()}
            </span>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center w-full mx-auto first-letter: font-small gap-4">
          <button className=" w-[200px] h-10 text-white text-md font-bold border-2 mx-auto border-[#ed1d24] bg-[#ed1d24] hover:bg-white hover:text-black ease-in-out duration-200  ">
            Checkout
          </button>
          <Link to="/cart" onClick={handleOpen}>
            <button className=" w-[200px] h-10 text-black border-2 mx-auto border-[#ed1d24]  text-md font-bold  hover:text-white hover:bg-[#ed1d24] ease-in-out duration-200 ">
              View Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavCart;
