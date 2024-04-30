import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { motion } from "framer-motion";

import LockIcon from "../../assets/icons/Lock.svg";
import Footer from "../../components/Footer";
import FooterUpper from "../../components/FooterUpper";

export default function PricingPublic() {
  const cardData = [
    {
      title: "MonstarSuite HR+",
      price: "US$79/mo",
      description:
        "Unify HR, Expenses, and Billing. MonstarPeople for payroll, MonstarExpense for expenses, and MonstarBill for invoicing—seamless integration for efficient business management.",
      bestValue: true,
    },

    {
      title: "MonstarSuite HR+",
      price: "US$59/mo",
      description:
        "Unify HR, Expenses, and Billing. MonstarPeople for payroll, MonstarExpense for expenses, and MonstarBill for invoicing—seamless integration for efficient business management.",
      bestValue: false,
    },

    {
      title: "MonstarSuite HR+",
      price: "US$59/mo",
      description:
        "Unify HR, Expenses, and Billing. MonstarPeople for payroll, MonstarExpense for expenses, and MonstarBill for invoicing—seamless integration for efficient business management.",
      bestValue: false,
    },

    // Add more objects for additional cards
  ];

  return (
    <div>
      {/* 1st section - Begin Your MonstarSuite Journey Today! */}
      <section className="leading-normal tracking-normal text-suitefontblack mt-20 p-20 md:p-20 lg:p-40 md:mx-0 bg-suiteorange bg-opacity-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight antialiased mb-4">
            Special Offers
          </h1>
          <p className="text-gray-700 tracking-wide text-sm md:text-base lg:text-lg max-w-3xl antialiased">
            Shop and save with the latest deals and promotions on Adobe
            creativity and design products.
          </p>
        </div>
      </section>

      {/* 2nd section - Pricing */}
      <section className="leading-normal tracking-normal text-suitefontblack bg-gray-50 border-gray-100 border-b px-12 pb-20">
        <div className="flex flex-col items-center justify-center text-center py-10">
          {/* Render the "Best Value" cards */}
          <div className="grid grid-cols-2 w-full gap-6">
            {cardData
              .filter((card) => card.bestValue)
              .map((card, index) => (
                <Card
                  key={index}
                  className={`${
                    cardData.filter((card) => card.bestValue).length % 2 !==
                      0 &&
                    index + 1 ===
                      cardData.filter((card) => card.bestValue).length
                      ? "col-span-2"
                      : "w-full"
                  }
                   bg-gray-100 px-10 pt-5 antialiased drop-shadow-md mb-6`}
                >
                  <CardBody>
                    <div className="flex flex-col md:flex-row items-center justify-start">
                      <Typography className="text-2xl font-bold tracking-wider text-gray-800">
                        {card.title}
                      </Typography>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-start mt-2">
                      <Typography className="text-xl tracking-wider text-gray-800">
                        {card.price}
                      </Typography>
                    </div>
                    <div className="absolute top-5 right-0">
                      <div className="bg-[#E6AF20] px-5 py-1 rounded-bl-md rounded-tl-md relative shadow-md">
                        <Typography className="text-lg font-bold">
                          Best Value
                        </Typography>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-start mt-10">
                      <Typography className="text-lg text-left text-gray-800">
                        {card.description}
                      </Typography>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-start mt-2">
                      {/* See plans and pricings */}
                      <Typography className="text-sm font-medium text-suiteblue hover:underline hover:cursor-pointer">
                        See plans and pricings
                      </Typography>
                    </div>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <img src={LockIcon} alt="Lock Icon" className="mr-2" />
                        <Typography color="gray" className="text-sm">
                          Secured Transaction
                        </Typography>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          variant="filled"
                          size="md"
                          className="px-10 rounded-md bg-suiteblue normal-case text-base tracking-wide font-medium shadow-none hover:shadow-none"
                        >
                          <span>Select</span>
                        </Button>
                      </motion.div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>

          {/* Render the remaining cards in a two-column grid */}
          {cardData.length > 0 && (
            <div className="grid grid-cols-2 w-full gap-6">
              {cardData
                .filter((card) => !card.bestValue)
                .map((card, index) => (
                  <Card
                    key={index}
                    className={`
                        ${
                          cardData.filter((card) => !card.bestValue).length %
                            2 !==
                            0 &&
                          index + 1 ===
                            cardData.filter((card) => !card.bestValue).length
                            ? "col-span-2"
                            : "w-full"
                        }
                    bg-gray-100 px-10 pt-5 antialiased drop-shadow-md`}
                  >
                    <CardBody>
                      <div className="flex flex-col md:flex-row items-center justify-start">
                        <Typography className="text-2xl font-bold tracking-wider text-gray-800">
                          {card.title}
                        </Typography>
                      </div>
                      <div className="flex flex-col md:flex-row items-center justify-start mt-2">
                        <Typography className="text-xl tracking-wider text-gray-800">
                          {card.price}
                        </Typography>
                      </div>
                      <div className="flex flex-col md:flex-row items-center justify-start mt-10">
                        <Typography className="text-lg text-left text-gray-800">
                          {card.description}
                        </Typography>
                      </div>

                      <div className="flex flex-col md:flex-row items-center justify-start mt-2">
                        {/* See plans and pricings */}
                        <Typography className="text-sm font-medium text-suiteblue hover:underline hover:cursor-pointer">
                          See plans and pricings
                        </Typography>
                      </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <img
                            src={LockIcon}
                            alt="Lock Icon"
                            className="mr-2"
                          />
                          <Typography color="gray" className="text-sm">
                            Secured Transaction
                          </Typography>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            variant="filled"
                            size="md"
                            className="px-10 rounded-md bg-suiteblue normal-case text-base tracking-wide font-medium shadow-none hover:shadow-none"
                          >
                            <span>Select</span>
                          </Button>
                        </motion.div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* 4th section - Semi Footer */}
      <FooterUpper />

      {/* 5th section - Footer */}
      <Footer />
    </div>
  );
}
