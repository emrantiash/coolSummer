import { Button } from "@material-tailwind/react";
import MonstarBillBlack from "../../../../assets/logo/MonstarBillBlack.svg";
import MonstarExpenseBlack from "../../../../assets/logo/MonstarExpenseBlack.svg";
import MonstarPeopleBlack from "../../../../assets/logo/MonstarPeopleBlack.svg";

import LandingBoxShape from "../../../../assets/layout/LandingBoxShape.svg";

import OfficeLandingPublic from "../../../../assets/illustration/OfficeLandingPublic.png";
export default function Products() {
  return (
    <div className="min-h-screen -mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-10 ">
        <div className="flex flex-col justify-center ml-36">
          <h1 className="text-6xl font-medium mb-4 leading-tight">
            Unify Your <span className="bg-blue-200 p-1">Workflow,</span>{" "}
            <span className="bg-blue-200 p-1">Simplify</span> Your Success.
          </h1>
          <p className="text-gray-700">Unify, Manage, Thrive.</p>
          <p className="text-gray-700">Your all-in-one tech solution.</p>
          <p className="text-gray-700">Elevate your workflow.</p>
          <Button
            variant="filled"
            size="lg"
            className="mt-10 w-fit rounded-md bg-suiteblue normal-case text-base tracking-wide font-medium"
          >
            <span>Discover More</span>
          </Button>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full overflow-hidden">
            <div className="flex justify-center items-center">
              <img
                className="w-full mx-auto slide-in-bottom object-contain select-none pointer-events-none"
                src={LandingBoxShape}
                alt="Office"
              />
              <img
                src={OfficeLandingPublic}
                alt="Office Landing"
                className="absolute w-7/12 object-cover mx-auto lg:mr-0 delay-1 slide-in-bottom select-none pointer-events-none"
              />
            </div>
          </div>

          <div className="absolute right-0 left-0 bottom-20">
            {/* put to top */}
            <div className="flex justify-center mb-4">
              <div className="grid grid-cols-1 text-2xl font-thin">
                Our Products
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-32">
                <img
                  className="w-fit mx-auto slide-in-bottom object-contain grayscale hover:grayscale-0 hover:cursor-pointer transition duration-200 ease-in-out transform hover:scale-105 select-none"
                  src={MonstarExpenseBlack}
                  alt="Monstar Expense"
                />
                <img
                  className="w-fit mx-auto slide-in-bottom object-contain grayscale hover:grayscale-0 hover:cursor-pointer transition duration-200 ease-in-out transform hover:scale-105 select-none"
                  src={MonstarPeopleBlack}
                  alt="Monstar People"
                />
                <img
                  className="w-fit mx-auto slide-in-bottom object-contain grayscale hover:grayscale-0 hover:cursor-pointer transition duration-200 ease-in-out transform hover:scale-105 select-none"
                  src={MonstarBillBlack}
                  alt="Monstar Bill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our product */}
    </div>
  );
}
