import {
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";

export default function ViewTopic() {
  return (
    <div className="grid grid-cols-1 gap-2 mx-10 md:mx-[70px] pt-5 pb-20">
      <Card className="w-full overflow-hidden bg-gray-200">
        <CardHeader className="bg-gray-300 text-left py-6 px-10 rounded-none m-0 shadow-sm relative">
          <Typography
            variant="h6"
            color="gray"
            className="text-xl font-medium text-left text-gray-800"
          >
            Tax Season Tips: Maximizing Deductions
          </Typography>
        </CardHeader>
        <CardBody className="px-10">
          <Typography
            variant="paragraph"
            color="gray"
            className="font-normal text-justify"
          >
            Engage in an insightful discussion about various effective
            strategies and practical approaches to optimize tax deductions
            during the tax season. Share experiences, tips, and methods that can
            help individuals and businesses identify and leverage eligible
            deductions to reduce tax liabilities.
          </Typography>
        </CardBody>

        <CardFooter className="flex items-center justify-between pt-0 px-10">
          <div className="flex items-center space-x-3 text-gray-700">
            <Tooltip content="16 Likes">
              <Typography className="text-sm font-normal select-none">
                16 Likes
              </Typography>
            </Tooltip>
            <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
            <Tooltip content="3 Replies">
              <Typography className="text-sm font-normal select-none">
                3 Replies
              </Typography>
            </Tooltip>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              color="blue"
              className="normal-case text-base rounded-md antialiased px-8 py-1"
              size="sm"
              variant="outlined"
            >
              Like
            </Button>
            <Button
              color="blue"
              className="normal-case text-base rounded-md antialiased px-8 py-1"
              size="sm"
              variant="outlined"
            >
              Reply
            </Button>
          </div>
        </CardFooter>
      </Card>

      <div className="mt-5">
        <Typography
          variant="h6"
          color="gray"
          className="text-xl font-bold text-left text-gray-800"
        >
          Replies
        </Typography>
      </div>

      <div className="mt-2 space-y-5">
        <Card className="w-full overflow-hidden bg-gray-200 rounded-md">
          <CardBody className="flex space-x-5 px-10 py-10">
            <Avatar
              src="https://s3-alpha-sig.figma.com/img/2ef2/683c/6be208bf1353cf655d9d836efe9c4b71?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AexG-Bofr7rj3IIj6w6f9tgjNMH5KvHsdrHs0EnJS0g1f4zoxCA2z8ZNw9Oim1tw1RnQ-aVwhYwJXcbg2W3KarziMRUMn1YM30pCyf8l9Ux8es3sdZK42NuarLhjqGty2ERv2GtlZu1mk9dUWWwnQ9CFyFrlt2~55tI81bgmUsl4m3~68aLfTaN7jzd~ZqF84eMNaHN9Wo-qOP1SsaCUvCpwMXCrDxjtjSM6poHx~4uF18CE9~FTTT0qmDjoe16rhb3Z54Vr1F9iyisQapYmqA8~vV0KcsDlL5ABWaDIT29kKSCfY~UgPIx7UgfwWtEOdxcMOx87Fvqi~1HX0VMoSw__"
              alt="MonstarPeopleBlack"
            />

            <Typography
              variant="paragraph"
              color="gray"
              className="font-normal text-justify"
            >
              Hey everyone! As tax season approaches, let&apos;s dive into some
              effective strategies for maximizing deductions. Keeping meticulous
              records of work-related expenses has been a game-changer for me.
              Even seemingly trivial expenses can be deductible! What approaches
              have you found effective in maximizing your deductions?
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-full overflow-hidden bg-gray-200 rounded-md">
          <CardBody className="flex space-x-5 px-10 py-10">
            <Avatar
              src="https://s3-alpha-sig.figma.com/img/15a0/fbfd/9c51cfdff478ccf6721e16063b65585e?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6K72opmeiYKDNWXB3ubt4SVNhzJmR~KZrhR-XjxkA74ToVopV9z1OFNj4YR3fp~B2XvgmU51udJ-4BpjGYbeFiCvnCw1JxFSwObmXUIdGOpXA-xxklv5~hizdrxe4bh49L9GrzVqu7AD6OU8imbXHvtBJrdhXwOdhrDFOv0qg~p-HHWi6TelmDKSjYk0C7wJraea4~nMMPg0aPq9S4gfNgks6IC3bxDdi6Ok6xIOt03L~kxGW4STSEGrVr3jpeecp5hMMkLUVk4yeORguNry916d7P3Jc12to3WX4NN2UZFECtd6IstdrgWW1BEFLWCmESMBM4NYIinzx2YfRg1mw__"
              alt="MonstarPeopleBlack"
            />

            <Typography
              variant="paragraph"
              color="gray"
              className="font-normal text-justify"
            >
              Hi folks! I completely agree, @Comment 1. Categorizing expenses
              and maintaining thorough records throughout the year has been
              immensely helpful. Additionally, staying informed about changes in
              tax laws and regulations has allowed me to identify new deduction
              opportunities. How do you ensure you&apos;re taking advantage of
              all eligible deductions?
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* Create New Account or Sign in to Comment */}
      <div className="mt-5 bg-gray-200 rounded-md flex flex-col items-center justify-center p-20 gap-2">
        <Typography
          //   variant="h6"
          //   color="gray"
          className="text-xl text-suitefontblack"
        >
          Create New Account or Sign in to Comment
        </Typography>

        <div className="flex items-center justify-center mt-5 gap-5">
          <Button
            color="blue"
            className="normal-case text-base rounded-md antialiased px-8"
            size="sm"
            variant="solid"
          >
            Sign In
          </Button>
          <Button
            color="blue"
            className="normal-case text-base rounded-md antialiased px-8"
            size="sm"
            variant="solid"
          >
            Create New
          </Button>
        </div>
      </div>
    </div>
  );
}
