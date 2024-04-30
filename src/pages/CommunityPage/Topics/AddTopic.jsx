import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import TextEditor from "../components/TextEditor";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddTopic() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(value);
  }, [value]);

  const handleSelectChange = (event) => {
    console.log(event);
    setSelectedOption(event);
  };

  return (
    <div className="grid grid-cols-1 gap-7 mx-10 md:mx-[70px] pb-20">
      <Card className="w-full overflow-hidden bg-gray-200">
        <CardHeader className="bg-gray-300 text-left py-5 px-5 rounded-none m-0 shadow-sm">
          <span className="text-xl font-bold text-suitefontblack antialiased">
            Add Topic
          </span>
        </CardHeader>
        <CardBody className="space-y-5">
          <div className="w-48 space-y-2">
            <label
              htmlFor="topicType"
              className="text-md font-normal md:text-nowrap"
            >
              Topic Type
            </label>
            <Select
              id="topicType"
              className="border-suitefontblack/50 bg-gray-200 rounded-md"
              labelProps={{
                className:
                  "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                style: selectedOption && { visibility: "hidden" },
              }}
              // label="Select Topic Type"
              // value={selectedOption}
              value="Discussion"
              onChange={(e) => handleSelectChange(e)}
            >
              <Option className="p-2" value="Discussion">
                Discussion
              </Option>
              <Option className="p-2" value="Question">
                Question
              </Option>
              <Option className="p-2" value="Upvote">
                Upvote
              </Option>
              <Option className="p-2" value="Time">
                Time
              </Option>
            </Select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="parent"
              className="text-md font-normal md:text-nowrap"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Topic Title..."
              className="w-full px-4 py-2 rounded-lg border border-suitefontblack/50 bg-gray-200 text-suitefontblack placeholder:text-suitefontblack/50 focus:outline-suitefontblack/50 focus:ring-1 transition duration-100"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="parent"
              className="text-md font-normal md:text-nowrap"
            >
              Description
            </label>
            {/* 
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Write your topic here..."
          /> */}

            <TextEditor value={value} setValue={setValue} />
          </div>

          <div className="w-48 space-y-2">
            <label
              htmlFor="category"
              className="text-md font-normal md:text-nowrap"
            >
              Category
            </label>
            <Select
              id="category"
              className="border-suitefontblack/50 bg-gray-200 rounded-md"
              labelProps={{
                className:
                  "after:border-none before:border-none transition-none transform-none rounded-md top-0 items-center text-sm font-normal antialiased",
                style: selectedOption && { visibility: "hidden" },
              }}
              // label="Select Category"
              // value={selectedOption}
              value="Monstar People"
              onChange={(e) => handleSelectChange(e)}
            >
              <Option className="p-2" value="Monstar People">
                Monstar People
              </Option>
              <Option className="p-2" value="Monstar Bill">
                Monstar Bill
              </Option>
              <Option className="p-2" value="Monstar Books">
                Monstar Books
              </Option>
              <Option className="p-2" value="Monstar Expense">
                Monstar Expense
              </Option>
            </Select>
          </div>

          <div className="w-48 space-y-2">
            <label
              htmlFor="attachments"
              className="text-md font-normal md:text-nowrap"
            >
              Attachments
            </label>

            <div>
              <label
                htmlFor="attachments"
                className="flex flex-col items-center text-gray-900 cursor-pointer"
              >
                <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" />
                Attach a File
                <span className="text-gray-500 text-sm">(up to 20 MB)</span>
              </label>
              <input type="file" id="attachments" className="hidden" />
            </div>
          </div>
        </CardBody>

        <CardFooter className="flex flex-wrap items-center justify-start pt-0">
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-900">
            <Button
              color="blue"
              className="normal-case text-base rounded-md antialiased px-8"
              size="sm"
              variant="filled"
            >
              <span>Post</span>
            </Button>

            <Button
              color="green"
              className="normal-case text-base rounded-md antialiased px-8"
              size="sm"
              variant="gradient"
            >
              <span>Save as Draft</span>
            </Button>

            <Button
              color="orange"
              className="normal-case text-base rounded-md antialiased px-8"
              size="sm"
              variant="outlined"
            >
              <span>Preview</span>
            </Button>

            <Button
              color="red"
              className="normal-case text-base rounded-md antialiased px-8"
              size="sm"
              variant="outlined"
            >
              <span>Discard</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
