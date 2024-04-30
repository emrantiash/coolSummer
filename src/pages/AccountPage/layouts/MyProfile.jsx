import {
  Avatar,
  Button,
  Input,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

// import { Country, State, City } from "country-state-city";
const inputStyle =
  "peer h-full w-full rounded-[7px] !border !border-gray-200 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-300 focus:border-2 focus:!border-blue-300 focus:border-t-transparent focus:!border-t-blue-300 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-100/40 disabled:text-blue-gray-700";

export default function MyProfile() {
  const [editOptions, setEditOptions] = useState({
    personalEdit: false,
    addressEdit: false,
  });

  const [gender, setGender] = useState(null);

  const [country, setCountry] = useState("BD");
  const [city, setCity] = useState({ name: "Dhaka" });
  const Gender = ["I don't want to say", "Male", "Female", "Other"];

  const Country = [
    {
      name: "Bangladesh",
      flag: "🇧🇩",
      isoCode: "BD",
      cities: [
        {
          name: "Dhaka",
        },
        {
          name: "Chittagong",
        },
        {
          name: "Khulna",
        },
        {
          name: "Rajshahi",
        },
        {
          name: "Sylhet",
        },
        {
          name: "Barisal",
        },
        {
          name: "Rangpur",
        },
        {
          name: "Mymensingh",
        },
      ],
    },
  ];

  const handleCountryChange = (e) => {
    const selectedCountry = e;

    setCountry(selectedCountry);

    setCity({
      name: Country.find((c) => c.isoCode === selectedCountry).cities.sort(
        (a, b) => a.name.localeCompare(b.name)
      )[0],
    });
  };

  const handleCityChange = (e) => {
    const selectedCity = e;

    setCity({ name: selectedCity });
  };

  return (
    <div>
      <div className="flex justify-between items-center py-5 border-b">
        <Typography
          variant="h6"
          className="text-lg text-suitefontblack antialiased"
        >
          Personal informations
        </Typography>

        <Button
          color="blue"
          size="sm"
          className="px-8 py-2 rounded-md normal-case antialiased tracking-wide"
          onClick={() => {
            setEditOptions({
              ...editOptions,
              personalEdit: !editOptions.personalEdit,
            });
          }}
        >
          {!editOptions.personalEdit ? "Edit" : "Save"}
        </Button>
      </div>

      <div className="py-5">
        <Avatar
          src="https://s3-alpha-sig.figma.com/img/2ef2/683c/6be208bf1353cf655d9d836efe9c4b71?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JE9cVX3G7ZXRAmNXvvoVznGFW~3tZfmB8Pt88jUmuWf8T6K7g5oswNprVDyd2dPaIZpLzFfk1~3P9TmZjgi0bDMjYq3e7NiOFYs~-0I4V51M9PsuwpwvEtO~M8L8INlueOyhCUnElGSsTKHSKgLbl39snbDSu3MwdWxs3aONl7~KdK27fkbGRFrP9wXA08gElrF16EEYSSJ2d5r8CacoxET8hX1bw5bj4kejkSiJI8ZbAk39U5UDMNHJzOAIWSOcece0~LsJ9~GkN5ksRrB-YrveQON83RJ4R7KMRYn7DJC54NC48ufXDIavuk99gnEo~tMliZaKf-SqxNenK-9pjg__"
          size="xl"
          className="mb-5"
        />
        <div className="flex flex-col gap-5 text-suitefontblack antialiased pb-10 border-b">
          {/* First Name and Last Name */}
          <div className="flex items-center justify-between gap-10">
            <Typography variant="paragraph" className="w-1/3">
              Name
            </Typography>

            <div className="flex gap-5 w-full">
              <input
                type="text"
                placeholder="First Name"
                className={inputStyle}
                disabled={!editOptions.personalEdit}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={inputStyle}
                disabled={!editOptions.personalEdit}
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center justify-between gap-10">
            <Typography variant="paragraph" className="w-1/3">
              Email
            </Typography>

            <div className="flex gap-5 w-full">
              <input
                type="email"
                placeholder="dft@monstarsuite.com"
                className={inputStyle}
                disabled={!editOptions.personalEdit}
              />
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between gap-10">
            <Typography variant="paragraph" className="w-1/3">
              Phone Number
            </Typography>

            <div className="flex gap-5 w-full">
              <input
                type="tel"
                placeholder="+880 1712-345678"
                className={inputStyle}
                disabled={!editOptions.personalEdit}
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="flex items-center justify-between gap-10">
            <Typography variant="paragraph" className="w-1/3">
              Date of Birth
            </Typography>

            <div className="flex gap-5 w-full">
              <Datepicker
                primaryColor={"cyan"}
                asSingle={true}
                useRange={false}
                inputClassName={inputStyle + " disabled:bg-blue-gray-100/40"}
                dateFormat={"dd/MM/yyyy"}
                placeholder="Date of birth"
                disabled={!editOptions.personalEdit}
              />
            </div>
          </div>

          {/*Gender*/}
          <div className="flex items-center justify-between gap-10">
            <Typography variant="paragraph" className="w-1/3">
              Gender
            </Typography>

            <div className="flex gap-5 w-full">
              <Select
                value={gender}
                onChange={(e) => setGender(e)}
                className={
                  "mb-5 !disabled:bg-blue-gray-50 border-none" + inputStyle
                }
                labelProps={{
                  className:
                    "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                }}
                label={!gender ? "Select Gender" : ""}
                disabled={!editOptions.personalEdit}
              >
                {Gender.map((value, index) => (
                  <Option key={index} value={value}>
                    {value}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pb-5 border-b">
        <Typography
          variant="h6"
          className="text-lg text-suitefontblack antialiased"
        >
          Address
        </Typography>

        <Button
          color="blue"
          size="sm"
          className="px-8 py-2 rounded-md normal-case antialiased tracking-wide"
          onClick={() => {
            setEditOptions({
              ...editOptions,
              addressEdit: !editOptions.addressEdit,
            });
          }}
        >
          {!editOptions.addressEdit ? "Edit" : "Save"}
        </Button>
      </div>

      <div className="py-5">
        <div className="flex flex-col gap-5 text-suitefontblack antialiased pb-10 border-b">
          {/* Country */}
          <div className="flex items-center justify-between gap-10">
            <Typography variant="paragraph" className="w-1/3">
              Country
            </Typography>

            <div className="flex gap-5 w-full">
              <Select
                value={country}
                onChange={handleCountryChange}
                className={
                  "mb-5 !disabled:bg-blue-gray-50 border-none" + inputStyle
                }
                labelProps={{
                  className:
                    "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                }}
                label={!country ? "Select Country" : ""}
                disabled={!editOptions.addressEdit}
              >
                {Country?.sort((a, b) => a.name.localeCompare(b.name)).map(
                  ({ name, flag, isoCode }, index) => (
                    <Option key={index} value={isoCode}>
                      <span className="flex items-center gap-2">
                        <span>{flag}</span>
                        <span>{name}</span>
                      </span>
                    </Option>
                  )
                )}
              </Select>
            </div>
          </div>

          {/* City */}
          <div className="flex items-center justify-between gap-10">
            <Typography variant="paragraph" className="w-1/3">
              City
            </Typography>

            {/* Not fully implemented */}
            <div className="flex gap-5 w-full">
              <Select
                value={city.name}
                onChange={handleCityChange}
                className={
                  "mb-5 !disabled:bg-blue-gray-50 border-none" + inputStyle
                }
                labelProps={{
                  className:
                    "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                }}
                label={!city.name ? "Select City" : ""}
                disabled={!editOptions.addressEdit}
              >
                {Country?.find((c) => c.isoCode === country)
                  .cities.sort((a, b) => a.name.localeCompare(b.name))
                  .map(({ name }, index) => (
                    <Option key={index} value={name}>
                      {name}
                    </Option>
                  ))}
              </Select>
            </div>
          </div>

          {/* Postal Code */}
          <div className="flex items-center justify-between gap-10">
            <Typography variant="paragraph" className="w-1/3">
              Postal Code
            </Typography>

            <div className="flex gap-5 w-full">
              <input
                type="text"
                placeholder="1230"
                className={inputStyle}
                disabled={!editOptions.addressEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
