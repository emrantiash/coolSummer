import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productPurchase } from "../../redux/slices/productSlice";
import { Button, useSelect } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function ConfirmPurchase() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const companyData = useSelector((state) => state.profileReducer.data);
  const product = useSelector((state) => state.productReducer.product);
  const company = useSelector((state) => state.profileReducer.profile);
  const [checkProduct,setCheckProduct ] = useState(false)

console.log(company)

  useEffect(()=>{
   Array.isArray(company.products) && company.products.length > 0 &&  company.products.map((data)=>{
       if(data.id==product.id)
      setCheckProduct(true)
    }
    
    )
   
  },[])


  const _purchase = () => {
    let option = {
      product_id: product.id,
      company_id: company.id,
    };

    console.log(option)
    dispatch(productPurchase(option)).then(function (e) {
      console.log(e)
      e.payload && e.payload.success && navigate("/");
    });
  };
  return (
    <section className="leading-normal tracking-normal text-suitefontblack mt-12 pt-52 mx-10 md:mx-0 bg-gradient-to-b from-blue-50 to-gray-50">
      <div
        className="min-h-[calc(100vh-30rem)]"
        style={{
          backgroundColor: "",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-span-1">
          <div style={{}}>
            {
              !checkProduct  ?
              <Button color="green" onClick={_purchase}>
              Confirm Purchase
            </Button>
            :
            <>
            This Product is Already Purchased For {company.name} Company
            <Button
              color="blue"
              variant="text"
              onClick={_purchase}
              onClickCapture={() => navigate("/select-organisation")}
            >
              GO Back
            </Button>
            </>

            }
           
            
          </div>
        </div>
      </div>
    </section>
  );
}
