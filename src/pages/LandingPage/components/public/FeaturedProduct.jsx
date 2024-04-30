import MonstarPeopleBlack from "../../../../assets/logo/MonstarPeopleBlack.svg";
import MonstarPeopleLanding from "../../../../assets/illustration/MonstarPeopleLanding.png";
import { Button } from "@material-tailwind/react";

export default function FeaturedProduct() {
  return (
    <div className="flex justify-center items-center mx-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
        <div className="flex flex-col items-center justify-center">
          <img
            src={MonstarPeopleLanding}
            alt="Monstar People"
            className="w-fit mb-5 select-none pointer-events-none"
          />
        </div>
        <div className="flex flex-col justify-start">
          <img
            src={MonstarPeopleBlack}
            alt="Monstar People"
            className="w-48 mb-5 select-none pointer-events-none"
          />

          <p className="text-base font-light mb-10 leading-tight antialiased sm:mx-auto md:mr-auto lg:mr-16">
            Monstar People revolutionises payroll management at a national
            level, offering a sophisticated yet user-friendly platform. This
            innovative application handles payroll intricacies with ease,
            ensuring accurate calculations, tax compliance, and seamless
            processing.
          </p>

          <Button
            variant="filled"
            size="sm"
            className="px-10 w-fit rounded-md bg-logocyan normal-case text-base tracking-wide font-medium"
          >
            <span>Try Now</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
