import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCompany } from "../../redux/slices/profileSlice";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export default function CreateProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataset, setrDataset] = useState([]);
  const [userField, setUserField] = useState({
    cname : ""
  })



  const changeUserFieldHandler = (e) => {
    const {name,value} = e.target
    setUserField({
        ...userField,
        [e.target.name]: e.target.value,
      });
  }

  const _submit = () =>{
    let options = {
        name: userField.cname
    }
    options.name !== "" &&
    dispatch(createCompany(options)).then(function(e){
        e.payload && e.payload.success && 
        navigate("/confirm-purchase")
    })
  } 

  console.log(userField.cname);
  return (
    <section className="leading-normal tracking-normal text-suitefontblack mt-12 pt-52 mx-10 md:mx-0 bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="min-h-[calc(100vh-30rem)]">
        <div className="col-span-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-10 flex row">
            <div></div>
            <div className="col-span-1 flex justify-center  items-center">
              <div className="flex flex-col justify-center ml-36">
                <Card color="transparent" shadow={false}>
                  <Typography variant="h4" color="blue-gray">
                    Add Company Profile
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to purchase.
                  </Typography>
                  <form className="mt-12 mb-2 w-100 max-w-screen-lg sm:w-96">
                  <div className="flex row">
                  <div className="mb-1 flex flex-col gap-6">
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Company  Name
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        name = "cname"
                        onChange={(e) => changeUserFieldHandler(e)}
                      />
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Industry
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Contact person
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Email
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                       <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal"
                        >
                         Parent company
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5" }}
                    />
                    <div style={{
                        // backgroundColor : 'red',
                        display : 'flex',
                        flexDirection : 'row'
                    }}>
                    <Button className="" fullWidth
                    variant="outlined"
                    onClick ={_submit}
                    >
                      Submit
                    </Button>
                    &nbsp;
                    {/* <Button className="mt-6" fullWidth>
                      sign up
                    </Button> */}
                    </div>
                      
                    </div>
                    &nbsp;
                    <div>
                    <div className="mb-1 flex flex-col gap-6">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Country
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                       State
                      </Typography>
                      <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        City
                      </Typography>
                      <Input
                        // type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                       <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                       Address
                      </Typography>
                      <Input
                        // type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    {/* <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal"
                        >
                         Parent company
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth>
                      sign up
                    </Button> */}
                    {/* <Typography
                      color="gray"
                      className="mt-4 text-center font-normal"
                    >
                      Already have an account?{" "}
                      <a href="#" className="font-medium text-gray-900">
                        Sign In
                      </a>
                    </Typography> */}
                    </div>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
