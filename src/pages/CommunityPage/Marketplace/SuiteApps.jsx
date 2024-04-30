import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import MonstarSuiteBlack from "../../../assets/logo/MonstarSuiteBlack.svg";

export default function SuiteApps() {
  const cardsData = [
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/8b1c/1306/dee35bc6cef89ffa15eb9e90fce47cda?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MiBwaiEDkOdBwCvtWj3TLEkgr6Y1Rx8B7AiIsbNJAWNJGJXlunCdBgHOhv~VcUrRC2tmkdaQOd1BUcxP2NEbVE1JnsO4W3DjL48N-xNJh8Shk4GyiIkoJodITOs3olto3wDYfmc2effQJ2qfYdR2kkX851adf~M876t6-HV6O2LNVS53ZiU8b5nSFx35fku2Lmv9qAjmQ0Z2-ynuoMNHS6wj~ujgdIeD-xLouENea6HOMhPGOtpLwjMGqdi48EvlY6WImJ5B-yhlX-81-~qPRoXqHc5wGMe5Byjdqpy-v8NZK3r-33arax-yMXr8DFjkL3vn5NwCyQK8mYzU3a39rw__",
      title: "MonstarERP",
      description:
        "Empower your enterprise with a comprehensive suite of tools meticulously crafted to streamline operations and enhance productivity.",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/595c/1fe6/277794838f123288a2df12a11ddacb8f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vc4yWUpVj2WJtyNLkWG4ItNTqO2Vm7emlr-ovm6BapyxM6~--8ZrpDvrVCMbje~wnRpqDUaOPD9EvmvxvvpLBU43nOFwVmqs3z7eDyGKV3XrWEaUKPzn5kbKd6OZ4f9dczcKvbVnNbeUBzjL3LKx2ZcUZmUE6kiI7r-ZOezJSKR9-q6LV8izQ1YGcDIptjWrgU3fHDapQl9SfE1VYEdhIZZpzNuyqArNUF480Wc0toR~XMGDlSajQiNr7zQ4-Lm9kIZQs8wb75OaTF-UoN9tFxZ4fGkqRZtPSoH9S81tT7II2lBnDWq9wNhHnhKpm0KKPCGkSpviqDWJNZW-K~AZbQ__",
      title: "MonstarBill",
      description:
        "Discover its efficient interface designed to optimize billing processes and enhance financial operations for businesses of all sizes.",
    },
  ];

  return (
    <div className="-mx-10 md:-mx-[70px] bg-[#1199ED]/25 px-10 py-20">
      <div className="flex items-center justify-center gap-20">
        <div className="space-y-16">
          {cardsData.map((card, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Card className="w-[35rem] bg-[#E9E9E9] flex-row shadow-md hover:cursor-pointer hover:scale-105 transition duration-150">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="w-1/3 shrink-0 rounded-r-none flex justify-center items-center bg-[#E9E9E9]"
                >
                  <img
                    src={card.imageUrl}
                    alt="card-image"
                    className="h-[150px] w-[150px] object-cover rounded-md select-none pointer-events-none"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 select-none"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    color="gray"
                    className="mb-8 font-normal select-none"
                  >
                    {card.description}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={MonstarSuiteBlack}
            alt="card-image"
            className="w-[306px] h-[49px] object-cover select-none pointer-events-none"
          />

          <Typography variant="h6" color="gray" className="mt-2 select-none">
            Applications
          </Typography>
        </div>
      </div>
    </div>
  );
}
