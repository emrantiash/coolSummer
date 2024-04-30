import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import cookieCutter from 'cookie-cutter';
import cookiesNames from '../../../../utils/constant/Constant';
import { getProductAccess } from '../../../../redux/slices/productSlice';
import LandingRotateShape from "../../../../assets/layout/LandingRotateShape.svg";
import OfficeLandingPrivate from "../../../../assets/illustration/OfficeLandingPrivate.png";

import MonstarPeople from "../../../../assets/logo/MonstarPeopleBlack.svg";
import MonstarBooks from "../../../../assets/logo/MonstarBooksBlack.svg";
import MonstarExpense from "../../../../assets/logo/MonstarExpenseBlack.svg";
import MonstarBill from "../../../../assets/logo/MonstarBillBlack.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

// const products = [
//   {
//     name: "Monstar People",
//     logo: MonstarPeople,
//     description:
//       "A human resource management system that helps you manage your employees and their data.",
//     access: false,
//     colorcode: "logocyan",
//   },
//   {
//     name: "Monstar Books",
//     logo: MonstarBooks,
//     description:
//       "A cloud-based accounting software that helps you manage your business finance.",
//     access: false,
//     colorcode: "suiteorange",
//   },
//   {
//     name: "Monstar Expense",
//     logo: MonstarExpense,
//     description:
//       "A cloud-based expense management software that helps you manage your business expenses.",
//     access: false,
//     colorcode: "suiteorange",
//   },
//   {
//     name: "Monstar Bill",
//     logo: MonstarBill,
//     description:
//       "A cloud-based billing software that helps you manage your business billing.",
//     access: false,
//     colorcode: "suiteblue",
//   },
// ];


export default function Products() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [products,setProducts] = useState([])

  useEffect(()=>{
    dispatch(getProductAccess()).then(function(e){
      console.log(e)
      e.payload && e.payload.success &&
      setProducts(e.payload.data)
    })
  },[dispatch])

  console.log(products)

 
  
 

  return (
    <div className="-mt-32 xl:-mt-20 text-suitefontblack mb-10 xl:mb-0">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:px-10">
        <div
          className="col-span-1"
          style={{
            backgroundImage: `url(${LandingRotateShape})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative w-full overflow-hidden">
            <div className="flex flex-col items-center ">
              <div className="w-full h-auto grid grid-cols-1 xl:grid-cols-2 gap-5 pb-10 pt-10 ">
                {products.map((product, index) => (
                  <div
                  // onClick={_goPeople}
                    className={`flex items-end bg-[#E9E9E9] h-fit bottom-0 rounded-lg p-10 ${
                      index === 1 && "xl:mt-20"
                    } ${index === 2 && "xl:-mt-12"}`}
                    key={index}
                  >
                    <div>
                      <img
                        src={product.logo=="MonstarBook" ? MonstarBooks : product.logo == "MonstarBill" ? MonstarBill :product.logo == "MonstarPeople" ? MonstarPeople : product.logo =="MonstarExpense" ? MonstarExpense : ""}
                        alt={product.name}
                        className="w-40 h-auto mb-5 select-none pointer-events-none"
                      />

                      <p className="text-gray-700 mb-5">
                        {product.description}
                      </p>

                      <span className={`text-${product.colorcode} font-bold`} style={{cursor : 'pointer' ,color : product.access &&  'green',letterSpacing : 0.5}}>
                      <a  href={product.access ?   "http://localhost:3000" : "" } target={product.access ? '_blank' : ""} > {product.access ? "Accessed" : "Try Now"} {">"}</a> 
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 hidden xl:flex">
          <div className="flex flex-col justify-center ml-36">
            <h1 className="text-6xl font-bold leading-snug">
              <p>Unify, Simplify, </p>
              <span className="bg-blue-200 p-1">Conquer</span>
            </h1>
            <p className="text-gray-700 text-lg text-wrap pr-20">
              You can continue using the services you have subscribed for or
              view all the products we offer. Hope you have an excellent time.
            </p>
            <Button
              onClick={() => navigate("/products")}
              variant="filled"
              size="md"
              className="mt-10 w-fit rounded-md bg-suiteblue normal-case text-base tracking-wide font-medium"
            >
              <span>View all Products</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
