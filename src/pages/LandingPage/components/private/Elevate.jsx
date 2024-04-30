import { Button } from "@material-tailwind/react";

import MonstarSuiteBlack from "../../../../assets/logo/MonstarSuiteBlack.svg";

import LandingBoxShape from "../../../../assets/layout/LandingBoxShape.svg";

import OfficeLandingPrivate from "../../../../assets/illustration/OfficeLandingPrivate.png";
export default function Elevate() {
  return (
    <div className="text-suitefontblack">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-10">
        <div className="flex flex-col justify-center items-center">
          <img
            src={MonstarSuiteBlack}
            alt="Monstar Suite"
            className="w-48 mb-5 select-none pointer-events-none"
          />
          <h1 className="text-4xl font-bold mb-4 leading-snug tracking-wide">
            Elevate Your <span className="bg-blue-200 p-1">Workflow</span>
          </h1>
          <p className="text-gray-700 text-lg text-wrap text-center">
            Your all-in-one hub for seamless productivity and collaboration.
          </p>
          <Button
            variant="filled"
            size="md"
            className="mt-10 w-fit rounded-md bg-suiteblue normal-case text-base tracking-wide font-medium"
          >
            <span>Learn More</span>
          </Button>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full overflow-hidden">
            <div className="flex justify-center items-end">
              <img
                className="w-full mx-auto slide-in-bottom object-contain select-none pointer-events-none"
                src={LandingBoxShape}
                alt="Office"
              />
              <img
                src={OfficeLandingPrivate}
                alt="Office Landing"
                className="absolute w-fit object-cover mx-auto lg:mr-0 delay-1 slide-in-bottom select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
