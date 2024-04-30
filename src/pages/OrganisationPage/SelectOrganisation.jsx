import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thisProfile } from "../../redux/slices/profileSlice";
import { useNavigate } from 'react-router-dom';

import { Button } from "@material-tailwind/react";

import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import MonstarSuiteBlack from "../../assets/logo/MonstarSuiteBlack.svg";

export default function SelectOrganisation() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const companyData = useSelector((state)=>state.profileReducer.data)
  const product = useSelector((state)=>state.productReducer.product)
  const [cIndex ,setCIndex]  = useState(-1)
  const [company,setComoany] = useState({})

  console.log(product.id,company)

  const findMyIndex = (index,data) =>{
      setCIndex(index)
      setComoany(data)
  }

  const _continue = () =>{
    
      if(Object.keys(company).length  > 0 ){
        dispatch(thisProfile(company))
      navigate("/confirm-purchase")
      }
     

  }
  // const companyData = [
  //   {
  //     name: "ERPNext",
  //     logo: "https://erpnext.com/files/ERPNext%20-%20Blue%20Background-64.png",
  //   },
  //   {
  //     name: "Volkswagen",
  //     logo: "https://static-00.iconduck.com/assets.00/volkswagen-icon-2048x2048-hwweg9lh.png",
  //   },
  //   {
  //     name: "Microsoft",
  //     logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
  //   },
  // ];

  return (
    <div className="h-screen flex flex-col items-center justify-center text-suitefontblack">
      <img
        src={MonstarSuiteBlack}
        alt="MonstarSuite"
        className="w-full max-w-[250px]"
      />
      <p className="text-base font-bold text-center mt-4">
        Your all-in-one tech solution
      </p>

      {/* Select Organisation */}
      <div className="w-full max-w-[400px] mt-10">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-bold text-center">
            Select Organisation to Continue
          </p>
        </div>

        <div className="mt-6" >
          <div className="grid grid-cols-4 gap-4 flex " style={{
                display : 'flex',
                justifyContent : 'center',
                // backgroundColor : 'red'
              }}>
            {companyData.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 hover:cursor-pointer hover:transform hover:scale-105  hover:duration-100"
                onClick={()=>findMyIndex(index,company)}
              >
                
                 <div style={{
                   backgroundColor : index==cIndex ? '#41b959' : "",
                   color  : index==cIndex ? '#fff' : "",
                  border : '2px solid #eeeeee',
                  heignt :  300 ,
                  weight :  100,
                  padding  : 25,
                  borderRadius : 8
                 }}> {company.name }</div>
                
                {/* <img
                  src={company.logo}
                  alt={company.name}
                  className="w-20 h-20 object-contain rounded-md border border-gray-200 p-4 bg-gray-300"
                /> */}
              </div>
            ))}

            {/* Add Icon */}
            <div 
            onClick={()=>navigate("/search-organisation")}
            className="flex items-center justify-center gap-4 hover:cursor-pointer hover:transform hover:scale-105  hover:duration-100">
              <PlusIcon className="w-20 h-20 rounded-md border border-gray-200 p-4 bg-gray-300" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
          <Button
            onClick={_continue}
              color="green"
              variant="outlined"
              className="normal-case text-base rounded-md antialiased"
              size="lg"
            >
              <span>Continue</span>
            </Button>
            &nbsp;
            <Button
           variant="text"
              color="blue"
              className="normal-case text-base rounded-md antialiased"
              size="sm"
            >
              <span>Go Back</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
