import { Button, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";

import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";

const inputStyle =
  "peer h-full w-full rounded-[7px] !border !border-gray-200 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-300 focus:border-2 focus:!border-blue-300 focus:border-t-transparent focus:!border-t-blue-300 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-100/40 disabled:text-blue-gray-700";

export default function Security() {
  const [edit, setEdit] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  function handleSaveOrClose() {
    setEdit(!edit);
    setPasswordVisibility({
      password: false,
      newPassword: false,
      confirmNewPassword: false,
    });
  }

  return (
    <div>
      <div className="flex justify-between items-center py-5 border-b">
        <Typography
          variant="h6"
          className="text-lg text-suitefontblack antialiased"
        >
          Password
        </Typography>

        <div className="flex gap-3">
          {edit && (
            <div className="flex gap-3">
              <Button
                variant="outlined"
                color="blue"
                size="sm"
                className="px-8 py-2 rounded-md normal-case antialiased tracking-wide"
                onClick={handleSaveOrClose}
              >
                Cancel
              </Button>

              <Button
                color="blue"
                size="sm"
                className="px-8 py-2 rounded-md normal-case antialiased tracking-wide"
                onClick={handleSaveOrClose}
              >
                Save
              </Button>
            </div>
          )}
          {
            // Edit button
            !edit && (
              <Button
                color="blue"
                size="sm"
                className="px-8 py-2 rounded-md normal-case antialiased tracking-wide"
                onClick={() => setEdit(!edit)}
              >
                Edit
              </Button>
            )
          }
        </div>
      </div>

      <div className="py-5">
        <div className="flex flex-col gap-5 text-suitefontblack antialiased pb-10">
          {/* Password */}
          <div className="flex items-center justify-between gap-10">
            <Typography variant="paragraph" className="w-1/3">
              Password
            </Typography>

            <div className="relative flex gap-5 w-full">
              <input
                type={passwordVisibility.password ? "text" : "password"}
                value="sakib"
                disabled={!edit}
                className={inputStyle}
                // placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                onClick={togglePasswordVisibility.bind(null, "password")}
              >
                {passwordVisibility.password ? (
                  <EyeSlashIcon className="w-4 h-4" />
                ) : (
                  <EyeIcon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {
            // New Password
            edit && (
              <div className="flex items-center justify-between gap-10">
                <Typography variant="paragraph" className="w-1/3">
                  New Password
                </Typography>

                <div className="relative flex gap-5 w-full">
                  <input
                    type={passwordVisibility.newPassword ? "text" : "password"}
                    value="sakib"
                    disabled={!edit}
                    className={inputStyle}
                    // placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility.bind(null, "newPassword")}
                  >
                    {passwordVisibility.newPassword ? (
                      <EyeSlashIcon className="w-4 h-4" />
                    ) : (
                      <EyeIcon className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            )
          }

          {
            // Confirm New Password
            edit && (
              <div className="flex items-center justify-between gap-10">
                <Typography variant="paragraph" className="w-1/3">
                  Confirm New Password
                </Typography>

                <div className="relative flex gap-5 w-full">
                  <input
                    type={
                      passwordVisibility.confirmNewPassword
                        ? "text"
                        : "password"
                    }
                    value="sakib"
                    disabled={!edit}
                    className={inputStyle}
                    // placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility.bind(
                      null,
                      "confirmNewPassword"
                    )}
                  >
                    {passwordVisibility.confirmNewPassword ? (
                      <EyeSlashIcon className="w-4 h-4" />
                    ) : (
                      <EyeIcon className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
