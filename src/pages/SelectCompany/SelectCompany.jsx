import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thisProfile } from "../../redux/slices/profileSlice";
import { Button } from "@material-tailwind/react";
import _iamge from '../../assets/icons/plus.png';
import { useNavigate } from 'react-router-dom';

export default function SelectCompany() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const data = useSelector((state)=>state.profileReducer.data)
    const product = useSelector((state)=>state.productReducer.product)
    const [cIndex ,setCIndex]  = useState(-1)
    const [companyId,setComoanyId] = useState(0)

    console.log(product.id)

    const findMyIndex = (index,data) =>{
        setCIndex(index)
        setComoanyId(data.id)
    }

    const _continue = () =>{
        console.log(companyId)
       dispatch(thisProfile(companyId))
        navigate("/confirm-purchase")

    }

    console.log(data)
  return (
    <section className="leading-normal tracking-normal text-suitefontblack mt-12 pt-52 mx-10 md:mx-0 bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="min-h-[calc(100vh-30rem)]">
        <div className="col-span-1">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {
                data.map((data,index)=>
                <div key={index} onClick={()=>findMyIndex(index,data)}>
                    <div style={{
                        backgroundColor : index==cIndex ? 'red' : "",
                        color  : index==cIndex ? '#fff' : "",
                        cursor : 'pointer',
                        margin:10 ,
                        padding : 10 ,
                        border : index==cIndex ? '4px solid white' : '2px solid white',
                        borderRadius : 8
                    }}>{data.name}</div>
                </div>
                )

                
            }
            <div 
             onClick={()=>navigate('/create-profile')}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems : 'center',
              cursor : 'pointer'
            }}>
                <img src={_iamge}  width={50} />
            </div>
            
          </div>
          <div
          className="mt-20"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
           variant="outlined"
          onClick={_continue}
            >
             Continue
            </Button>
          </div>
          
        </div>
      </div>
    </section>
    // <section className="leading-normal tracking-normal text-suitefontblack mt-12 pt-52 mx-10 md:mx-0 bg-gradient-to-b from-blue-50 to-gray-50">
    //   <div className="min-h-[calc(100vh-30rem)]">
    //     <div className="col-span-1">
    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-10 flex row">
    //         <div>Here</div>
    //         <div className="col-span-1 flex justify-center  items-center">
    //             hello
    //             </div>
    //             </div>
    //     </div>
    //   </div>
    // </section>
  );
}
