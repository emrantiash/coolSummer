import milify from "millify";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";

import MonstarPeopleBlack from "../../../assets/logo/MonstarPeopleBlack.svg";
import MonstarBillBlack from "../../../assets/logo/MonstarBillBlack.svg";
import MonstarBooksBlack from "../../../assets/logo/MonstarBooksBlack.svg";
import MonstarExpenseBlack from "../../../assets/logo/MonstarExpenseBlack.svg";

export default function ForumCards() {
  const cardData = [
    {
      title: "MonstarPeople",
      image: MonstarPeopleBlack,
      description:
        "Join the Monstar People community—a hub for payroll professionals and businesses to share insights, tackle challenges, and stay updated on the latest payroll trends, fostering collaboration and expertise exchange.",
      posts: 3742,
      replies: 10201,
      forums: 6,
    },
    {
      title: "MonstarBill",
      image: MonstarBillBlack,
      description:
        "Welcome to the MonstarBill community, where businesses converge to exchange insights, troubleshoot billing challenges, and explore innovative approaches to streamline invoicing and financial operations.",
      posts: 1201,
      replies: 1602,
      forums: 7,
    },
    {
      title: "MonstarBooks",
      image: MonstarBooksBlack,
      description:
        "Discover the MonstarBooks community—a gathering of finance enthusiasts and professionals discussing accounting best practices, software tips, and innovative solutions for efficient financial management and bookkeeping.",
      posts: 1222,
      replies: 1623,
      forums: 7,
    },
    {
      title: "MonstarExpense",
      image: MonstarExpenseBlack,
      description:
        "Join the MonstarExpense community—a collaborative space where users share tips, troubleshoot issues, and explore efficient expense management techniques, fostering expertise and support for seamless financial tracking.",
      posts: 15201,
      replies: 1702,
      forums: 75,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-7 mx-10 md:mx-[70px] pt-5 pb-20">
      {cardData.map((card, index) => (
        <Card key={index} className="w-full overflow-hidden bg-gray-200">
          <CardHeader className="bg-gray-300 text-left py-4 px-5 rounded-none m-0 shadow-sm">
            <img
              src={card.image}
              alt={card.title}
              className="w-40 h-auto select-none pointer-events-none"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="paragraph"
              color="gray"
              className="font-normal text-justify"
            >
              {card.description}
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between pt-0">
            <div className="flex items-center space-x-2 text-gray-700">
              <Tooltip content={`${card.posts} Posts`}>
                <Typography className="text-sm font-normal select-none">
                  {milify(card.posts)} Posts
                </Typography>
              </Tooltip>
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              <Tooltip content={`${card.replies} Replies`}>
                <Typography className="text-sm font-normal select-none">
                  {milify(card.replies)} Replies
                </Typography>
              </Tooltip>
              <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              <Tooltip content={`${card.forums} Forums`}>
                <Typography className="text-sm font-normal select-none">
                  {milify(card.forums)} Forums
                </Typography>
              </Tooltip>
            </div>
            <ArrowRightIcon className="w-6 h-6 hover:cursor-pointer" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
