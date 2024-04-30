import ArrowLeftIcon from "@heroicons/react/24/outline/ArrowLeftIcon";
import MonstarSuiteBlack from "../../assets/logo/MonstarSuiteBlack.svg";
import {
  Avatar,
  Button,
  Card,
  ListItem,
  ListItemPrefix,
  List,
  Typography,
} from "@material-tailwind/react";
import JoinRequestModal from "./JoinRequestModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrganisation() {
  const navigate = useNavigate();
  const [selectedOrganisation, setSelectedOrganisation] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const companyData = [
    {
      name: "MonstarLab Enterprise",
      logo: "https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc",
    },
    {
      name: "MonstarLab UK",
      logo: "https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc",
    },
    {
      name: "MonstarLab JP",
      logo: "https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc",
    },
    {
      name: "MonstarLab UAE",
      logo: "https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc",
    },
    {
      name: "MonstarLab Enterprise",
      logo: "https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc",
    },
    {
      name: "MonstarLab UK",
      logo: "https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc",
    },
    {
      name: "MonstarLab JP",
      logo: "https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc",
    },
    {
      name: "MonstarLab UAE",
      logo: "https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc",
    },
    {
      name: "MonstarLab Enterprise",
      logo: "https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc",
    },
    {
      name: "MonstarLab UK",
      logo: "https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc",
    },
    {
      name: "MonstarLab JP",
      logo: "https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc",
    },
    {
      name: "MonstarLab UAE",
      logo: "https://media.licdn.com/dms/image/C560BAQGoE2kWpg1z0Q/company-logo_200_200/0/1630649390672/monstarlab_logo?e=2147483647&v=beta&t=AeqkJtRRiI7nJAhhsFBlu7XXHWQLLEFC1nFJ5DnmTZc",
    },
  ];

  const handleJoinRequest = (company) => {
    setSelectedOrganisation(company);
    setOpenModal(true);
  };

  return (
    <div className="min-h-screen flex justify-center items-center text-suitefontblack">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col border-gray-400 border-r-2 pr-4">
          <div className="flex justify-start">
            <ArrowLeftIcon className="w-8 h-8 text-suiteblue" />
          </div>

          <div className="flex flex-col items-center justify-center flex-grow gap-5">
            <div>
              <img
                src={MonstarSuiteBlack}
                alt="MonstarSuite"
                className="w-full max-w-[280px]"
              />

              <p className="text-base font-bold text-center mt-4">
                Your all-in-one tech solution
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 mt-10">
              <label
                htmlFor="search"
                className="text-suitefontblack antialiased"
              >
                Enter Organisation Name
              </label>
              <input
                type="text"
                placeholder="MonstarLab"
                className="w-[400px] text-center px-4 py-3 rounded-lg bg-gray-200 text-gray-700"
              />

              <Button
                color="blue"
                className="normal-case text-base rounded-md antialiased px-8"
                size="sm"
              >
                <span>Search</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-center justify-start pl-4">
          <div>
            <Typography className="font-medium mb-5" variant="h5">
              Organisations Onboard
            </Typography>

            <JoinRequestModal
              company={selectedOrganisation}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />

            <Card className="border bg-gray-200 h-[550px] overflow-y-auto min-w-[calc(100vw-60vw)] px-2">
              {companyData.length > 0 ? (
                <List>
                  {companyData.map((company, index) => (
                    <ListItem
                      key={index}
                      className="hover:bg-gray-300"
                      onClick={() => handleJoinRequest(company)}
                    >
                      <ListItemPrefix>
                        <Avatar
                          variant="rounded"
                          alt={company.name}
                          src={company.logo}
                        />
                      </ListItemPrefix>

                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="font-normal antialiased"
                      >
                        {company.name}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <div className="h-[300px] flex flex-col items-center justify-center gap-2 antialiased">
                  <p className="text-lg">No Organisation Found</p>
                  <p className="text-gray-600">
                    Create New organisation to continue
                  </p>
                </div>
              )}
            </Card>
          </div>

          <div className="flex items-center justify-center gap-4 mt-5">
            <Button
              color="blue"
              className="normal-case text-base rounded-md antialiased px-8"
              size="sm"
            >
              <span>Join</span>
            </Button>
            <Button
            onClick={() => navigate('/create-organisation')}
              color="blue"
              className="normal-case text-base rounded-md antialiased px-8"
              size="sm"
              variant="outlined"
            >
              <span>Create New</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
