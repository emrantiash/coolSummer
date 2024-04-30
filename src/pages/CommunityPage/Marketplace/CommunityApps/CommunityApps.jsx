import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

export default function CommunityApps() {
  const [activeCategory, setActiveCategory] = useState("crm");
  const categories = [
    {
      id: 1,
      label: "crm",
      name: "CRM",
    },
    {
      id: 2,
      label: "ecommerce",
      name: "eCommerce",
    },
    {
      id: 3,
      label: "financial-services",
      name: "Financial services",
    },
    {
      id: 4,
      label: "productivity",
      name: "Productivity",
    },
  ];
  const cardsData = [
    {
      category: "crm",
      imageUrl:
        "https://media.licdn.com/dms/image/C4D0BAQFl6lC72edeEA/company-logo_200_200/0/1667969642867/crmnext_logo?e=2147483647&v=beta&t=IA4RxQN2gS4y9g5TkSWQo_fUWxLIbZs8y7E5QGZN5U8",
      title: "CRMNext",
      description:
        "Manage customer relationships effectively. Streamline sales, marketing, and customer service processes to enhance customer satisfaction.",
      chipValue: "DFT",
      chipColor: "deep-purple",
    },

    {
      category: "ecommerce",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/8b1c/1306/dee35bc6cef89ffa15eb9e90fce47cda?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MiBwaiEDkOdBwCvtWj3TLEkgr6Y1Rx8B7AiIsbNJAWNJGJXlunCdBgHOhv~VcUrRC2tmkdaQOd1BUcxP2NEbVE1JnsO4W3DjL48N-xNJh8Shk4GyiIkoJodITOs3olto3wDYfmc2effQJ2qfYdR2kkX851adf~M876t6-HV6O2LNVS53ZiU8b5nSFx35fku2Lmv9qAjmQ0Z2-ynuoMNHS6wj~ujgdIeD-xLouENea6HOMhPGOtpLwjMGqdi48EvlY6WImJ5B-yhlX-81-~qPRoXqHc5wGMe5Byjdqpy-v8NZK3r-33arax-yMXr8DFjkL3vn5NwCyQK8mYzU3a39rw__",
      title: "ERPNext",
      description:
        "Empower your enterprise with a comprehensive suite of tools meticulously crafted to streamline operations and enhance productivity.",
      chipValue: "DFT",
      chipColor: "deep-purple",
    },
    {
      category: "financial-services",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/595c/1fe6/277794838f123288a2df12a11ddacb8f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vc4yWUpVj2WJtyNLkWG4ItNTqO2Vm7emlr-ovm6BapyxM6~--8ZrpDvrVCMbje~wnRpqDUaOPD9EvmvxvvpLBU43nOFwVmqs3z7eDyGKV3XrWEaUKPzn5kbKd6OZ4f9dczcKvbVnNbeUBzjL3LKx2ZcUZmUE6kiI7r-ZOezJSKR9-q6LV8izQ1YGcDIptjWrgU3fHDapQl9SfE1VYEdhIZZpzNuyqArNUF480Wc0toR~XMGDlSajQiNr7zQ4-Lm9kIZQs8wb75OaTF-UoN9tFxZ4fGkqRZtPSoH9S81tT7II2lBnDWq9wNhHnhKpm0KKPCGkSpviqDWJNZW-K~AZbQ__",
      title: "MonstarBill",
      description:
        "Simplify billing management effortlessly. Streamline invoicing, payment tracking, and client communication for efficient financial operations.",
      chipValue: "Monstarlab",
      chipColor: "yellow",
    },
    {
      category: "productivity",
      imageUrl:
        "https://en.francevelotourisme.com/sites/default/files/styles/sit_full/public/sit/aquitaine/ASCAQU040FS00085/joebikebyvtt-3.jpg?itok=oEjg6jIJ",
      title: "Joe Bike",
      description:
        "Discover the best cycling routes in France. Explore the most beautiful places on two wheels.",
      chipValue: "Xbyte",
      chipColor: "blue",
    },
  ];

  return (
    <div className="bg-gray-100 md:pt-5 pb-28 h-[50rem]">
      <div
        className="mx-10 md:mx-[70px]"
        // style={{ position: "sticky", top: 70, zIndex: 999 }}
      >
        <h1 className="text-xl font-bold text-suitefontblack antialiased select-none pb-10 border-b-2 border-gray-300">
          Community Applications
        </h1>

        <div className="flex items-start justify-start gap-20">
          <div className="flex flex-col gap-2 mt-5">
            <h1 className="text-xl font-bold text-suitefontblack antialiased select-none">
              Categories
            </h1>
            <div className="flex flex-col border-r pr-16 pb-40 border-gray-300">
              {categories.map((category, index) => (
                <Typography
                  key={index}
                  variant="paragraph"
                  color="blue-gray"
                  className={`mb-2 select-none hover:cursor-pointer
                    ${
                      activeCategory === category.label
                        ? "text-suiteblue transition duration-100"
                        : "hover:text-suiteblue/80 transition duration-100"
                    }
                  `}
                  onClick={() => setActiveCategory(category.label)}
                >
                  {category.name}
                </Typography>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-start gap-10 mt-5">
            {cardsData
              .filter((card) => card.category === activeCategory)
              .map((card, index) => (
                <Card
                  key={index}
                  className="mt-6 w-[300px] bg-gray-200 hover:cursor-pointer hover:scale-105 transition duration-150"
                >
                  <CardHeader
                    color="blue-gray"
                    className="mx-0 mt-0 rounded-t-xl rounded-b-none shadow-none flex justify-center"
                    floated={false}
                  >
                    <img
                      src={card.imageUrl}
                      className="w-fit h-[250px] object-cover"
                      alt="card-image"
                    />
                  </CardHeader>
                  <CardBody className="rounded-b-xl p-4">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-2 select-none"
                    >
                      {card.title}
                    </Typography>
                    <Typography className="select-none">
                      {card.description}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Chip
                      value={card.chipValue}
                      color={card.chipColor}
                      className="w-fit"
                    />
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
