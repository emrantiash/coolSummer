import { Input, Button } from "@material-tailwind/react";
import MonstarSuiteWhite from "../assets/logo/MonstarSuiteWhite.png";

export default function FooterUpper() {
  return (
    <div className="flex items-center justify-center bg-blue-50">
      <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2 md:gap-20">
        <div className="flex items-center justify-center">
          <img
            src={MonstarSuiteWhite}
            alt="Monstar Suite"
            className="w-fit select-none pointer-events-none"
          />
        </div>

        <div>
          <h1 className="text-suitefontblack mb-2">
            Subscribe to the monthly newsletter
          </h1>

          <Input
            label="Email Address"
            variant="outlined"
            className="bg-gray-50"
          />

          <div className="mt-4">
            <Button color="deep-orange" className="normal-case">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
