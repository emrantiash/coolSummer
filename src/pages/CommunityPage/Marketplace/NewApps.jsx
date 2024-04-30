import React, { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { LeftArrow, RightArrow } from "./Arrow";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Typography,
} from "@material-tailwind/react";

export default function NewApps() {
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
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/71f4/734f/62dc1bb0563a3d4fde6d947e9da82bc1?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VCDbs44MqKKlA6z5gIbaXOonGkhjrHQ7weXOB6KWyv11SW2F5Ig66-s1W8gOVdpIhnIR6d~v3gHslaTU9jeISNZ6JqsEZ2CoSFuO2GYRRSRcBgWY1TYd0u1~SRyI0VVPi7grLYDY~anaIzAqk7bOeHKOXY3v9NX~BI8NWT-GApVTtTbnpDFECUhxvcWnZZLhEroaMvILBVYW2hFRQa~I0w58ot-mKivSFkyEq2PEZAZrPw4RH7RjKLIPtRS7vGjt940y~xM3nGDzuWThSD2kBXXYE5GFl~gH1nEv~j8BLaoi9ifC2mfqfaBQspRh2tag3BOTaxBiBRFd9~ineDw7~A__",
      title: "AeroNext",
      description:
        "Engage in an insightful discussion about various effective strategies and practical approaches to optimize tax deductions during the tax season.",
      chipValue: "Aero Devs Ltd.",
      chipColor: "cyan",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/8f29/9569/748d498a6583a73f74feea3627172263?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qI9Kq3wyApfa5g3uRqAjexIyEviO0S5zWfcpfnfBJsqh4Ko9rMa2tr28MJvtD-qr-5VC2t8z2tPl1Pl3C1bGreCoII4qAR83wOU8eWazrlnhKO7F8~MR6tgk8EQvSUY4oe3l-BuzzauG~z1xyTGwCFzDb6~YK75C1ZEh2RlCBXlWVcvuNDpJhUL7FOXMLDHHpzazgsRC1Yb1aSgykk4vgtgfbqgBkLAWf~nz0Q4SwTW1FH~eOe8o0mo4ls~9tKIRA0dY8CJBcgTaToxsjpyXSHw0tHnx31xSDkQI4kS6lp8B4jP~JZVvaJCB-zIOKli-9zC4lPZHeL1wTu9HmOhirg__",
      title: "Gplanner",
      description:
        "Share experiences, tips, and methods that can help individuals and businesses identify and leverage eligible deductions to reduce tax liabilities.",
      chipValue: "Aero Devs Ltd.",
      chipColor: "yellow",
    },
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
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      scrollContainerClassName="gap-10"
    >
      {cardsData.map((card, index) => (
        <Card
          key={index}
          className="mt-6 w-[350px] bg-gray-200 mb-10 hover:cursor-pointer hover:scale-105 transition duration-150"
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
            <Typography className="select-none">{card.description}</Typography>
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
    </ScrollMenu>
  );
}
