import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Typography,
} from "@material-tailwind/react";

import NewApps from "./NewApps";
import SuiteApps from "./SuiteApps";

export default function MarketPlace({ setActiveTab }) {
  const cardsData = [
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/8b1c/1306/dee35bc6cef89ffa15eb9e90fce47cda?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MiBwaiEDkOdBwCvtWj3TLEkgr6Y1Rx8B7AiIsbNJAWNJGJXlunCdBgHOhv~VcUrRC2tmkdaQOd1BUcxP2NEbVE1JnsO4W3DjL48N-xNJh8Shk4GyiIkoJodITOs3olto3wDYfmc2effQJ2qfYdR2kkX851adf~M876t6-HV6O2LNVS53ZiU8b5nSFx35fku2Lmv9qAjmQ0Z2-ynuoMNHS6wj~ujgdIeD-xLouENea6HOMhPGOtpLwjMGqdi48EvlY6WImJ5B-yhlX-81-~qPRoXqHc5wGMe5Byjdqpy-v8NZK3r-33arax-yMXr8DFjkL3vn5NwCyQK8mYzU3a39rw__",
      title: "ERPNext",
      description:
        "Empower your enterprise with a comprehensive suite of tools meticulously crafted to streamline operations and enhance productivity.",
      chipValue: "DFT",
      chipColor: "blue",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/595c/1fe6/277794838f123288a2df12a11ddacb8f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vc4yWUpVj2WJtyNLkWG4ItNTqO2Vm7emlr-ovm6BapyxM6~--8ZrpDvrVCMbje~wnRpqDUaOPD9EvmvxvvpLBU43nOFwVmqs3z7eDyGKV3XrWEaUKPzn5kbKd6OZ4f9dczcKvbVnNbeUBzjL3LKx2ZcUZmUE6kiI7r-ZOezJSKR9-q6LV8izQ1YGcDIptjWrgU3fHDapQl9SfE1VYEdhIZZpzNuyqArNUF480Wc0toR~XMGDlSajQiNr7zQ4-Lm9kIZQs8wb75OaTF-UoN9tFxZ4fGkqRZtPSoH9S81tT7II2lBnDWq9wNhHnhKpm0KKPCGkSpviqDWJNZW-K~AZbQ__",
      title: "MonstarBill",
      description:
        "Simplify billing management effortlessly. Streamline invoicing, payment tracking, and client communication for efficient financial operations.",
      chipValue: "Monstarlab",
      chipColor: "yellow",
    },
  ];

  return (
    <div className="mx-10 md:mx-[70px] pt-5">
      <Typography
        variant="h6"
        color="gray"
        className="text-xl font-bold text-left text-gray-800 select-none"
      >
        Featured Apps
      </Typography>

      <div className="flex items-center justify-start gap-10">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="mt-6 w-[350px] bg-gray-200 hover:cursor-pointer hover:scale-105 transition duration-150"
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

      <div className="mt-20 mb-10 flex items-center justify-center">
        <Typography
          variant="h6"
          color="gray"
          className="font-bold text-gray-800 select-none cursor-pointer hover:underline"
        >
          Show All Featured Apps
        </Typography>
      </div>

      <div className="space-y-5">
        <Typography
          variant="h6"
          color="gray"
          className="text-xl font-bold text-left text-gray-800 select-none"
        >
          New Apps
        </Typography>

        <div className="-mx-10 md:-mx-[50px]">
          <NewApps />
        </div>

        <div className="mt-20 mb-10 flex items-center justify-center">
          <Typography
            variant="h6"
            color="gray"
            className="font-bold text-gray-800 select-none cursor-pointer hover:underline"
            onClick={() => setActiveTab("community-apps")}
          >
            Show All New Apps
          </Typography>
        </div>

        <SuiteApps />
      </div>
    </div>
  );
}
