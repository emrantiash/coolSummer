import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCompany ,thisProfile} from "../../redux/slices/profileSlice";
import { PhotoIcon } from "@heroicons/react/24/solid";

import { Button, Input, Option, Radio, Select } from "@material-tailwind/react";

import { useNavigate } from 'react-router-dom';


export default function CreateOrganisation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataset, setrDataset] = useState([]);
  
  const [uploading, setUploading] = useState(false);
  const [createOrganisation, setCreateOrganisation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
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
      console.log(e.payload)
        e.payload && e.payload.success && (
          dispatch(thisProfile(e.payload.data)),
          navigate("/confirm-purchase")
        )
       
    })
  } 

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
    }, 3000);
  };

  const handleCreateOrganisation = () => {
    setCreateOrganisation(true);
    setTimeout(() => {
      setCreateOrganisation(false);
    }, 3000);
  };

  const handleSelectChange = (event) => {
    console.log(event);
    setSelectedOption(event);
  };

  return (
    <div className="pt-24 pb-20 md:mt-0 min-h-screen flex justify-center items-center text-suitefontblack antialiased mx-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex justify-center items-center w-[200px] h-[200px] bg-gray-200 rounded-md">
            <PhotoIcon className="w-fit p-14 text-gray-400" />
          </div>
          <p className="text-base font-normal text-gray-600">
            Upload an Organisation Logo
          </p>
          <Button
            color="blue"
            size="lg"
            variant="filled"
            className="px-8 py-2 normal-case rounded-md"
            loading={uploading}
            onClick={handleUpload}
          >
            <span>Upload</span>
          </Button>
        </div>

        {/* Left */}
        <div className="flex flex-col gap-4">
          {/* Company Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-normal">
              Company Name
            </label>

            <input
              type="text"
              id="name"
              className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-200"
              name = "cname"
              onChange={(e) => changeUserFieldHandler(e)}
            />
          </div>

          {/* Industry */}
          <div className="flex flex-col gap-1">
            <label htmlFor="industry" className="text-sm font-normal">
              Industry
            </label>
            <input
              type="text"
              id="industry"
              className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-200"
            />
          </div>

          {/* Website */}
          <div className="flex flex-col gap-1">
            <label htmlFor="contactPerson" className="text-sm font-normal">
              Contact Person
            </label>
            <input
              type="text"
              id="contactPerson"
              className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-200"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-normal">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-200"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm font-normal">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-200"
            />
          </div>

          {/* Currency */}
          <div className="flex flex-col gap-1">
            <label htmlFor="currency" className="text-sm font-normal">
              Currency
            </label>
            <input
              type="text"
              id="currency"
              className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-200"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          {/* Country */}
          <div className="flex flex-col gap-1">
            <label htmlFor="country" className="text-sm font-normal">
              Country
            </label>
            <input
              type="text"
              id="country"
              className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-200"
            />
          </div>

          {/* State */}
          <div className="flex flex-col gap-1">
            <label htmlFor="state" className="text-sm font-normal">
              State/Province
            </label>
            <input
              type="text"
              id="state"
              className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-200"
            />
          </div>

          {/* City */}
          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="text-sm font-normal">
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-200"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col gap-1">
            <label htmlFor="address1" className="text-sm font-normal">
              Address Line 1
            </label>
            <input
              type="text"
              id="address1"
              className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-200"
            />
          </div>

          {/* Address 2 */}
          <div className="flex flex-col gap-1">
            <label htmlFor="address2" className="text-sm font-normal">
              Address Line 2
            </label>

            <input
              type="text"
              id="address2"
              className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-200"
            />
          </div>

          {/* Zip */}
          <div className="flex flex-col gap-1">
            <label htmlFor="zip" className="text-sm font-normal">
              Zip
            </label>
            <input
              type="text"
              id="zip"
              className="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-200"
            />
          </div>
        </div>

        <div className="hidden md:block md:col-span-1" />

        <div className="flex flex-col gap-5 -mt-12">
          <div className="flex flex-row items-center gap-2">
            <label
              htmlFor="parent"
              className="text-sm font-normal md:text-nowrap"
            >
              This is The Parent Company
            </label>

            <div className="flex gap-2">
              <Radio name="type" label="Yes" color="blue" />
              <Radio name="type" label="No" color="blue" defaultChecked />
            </div>
          </div>

          <div className="flex flex-row items-center gap-5">
            <label
              htmlFor="parent"
              className="text-sm font-normal md:text-nowrap"
            >
              Parent Company
            </label>
            <Select
              id="parent"
              className="border-suitefontblack/50 bg-gray-200 rounded-md w-full px-4 py-2 border border-gray-300"
              labelProps={{
                className:
                  "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                style: selectedOption && { visibility: "hidden" },
              }}
              label="Select Parent Company"
              value={selectedOption}
              onChange={(e) => handleSelectChange(e)}
            >
              <Option className="p-2" value="MonstarLab Enterprise">
                MonstarLab Enterprise
              </Option>
              <Option className="p-2" value="MonstarLab Inc">
                MonstarLab Inc
              </Option>
              <Option className="p-2" value="MonstarLab Ltd">
                MonstarLab Ltd
              </Option>
              <Option className="p-2" value="MonstarLab Pte Ltd">
                MonstarLab Pte Ltd
              </Option>
              <Option className="p-2" value="MonstarLab Asia">
                MonstarLab Asia
              </Option>
            </Select>
          </div>
        </div>

        {/* horizontal line */}
        <div className="hidden md:block" />
        <div className="hidden md:block" />
        <div className="col-span-1 md:col-span-2 border-t border-gray-300 -mt-10">
          <div className="flex justify-start items-center gap-5 mt-4">
            <Button
            onClick={()=>navigate("/products")}
              color="blue"
              size="lg"
              variant="outlined"
              className="px-8 py-2 normal-case rounded-md"
            >
              <span>Cancel</span>
            </Button>

            <Button
              color="blue"
              size="lg"
              variant="filled"
              className="px-8 py-2 normal-case rounded-md"
              loading={createOrganisation}
              // onClick={handleCreateOrganisation}
              onClick ={_submit}
            >
              <span>Save</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
