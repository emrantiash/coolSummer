import { Button, Card, Checkbox } from "@material-tailwind/react";
import { useState } from "react";

export default function Compliance() {
  const [activeCompliance, setActiveCompliance] = useState(null);

  const compliance = [
    {
      id: 1,
      name: "ISO/IEC 27001",
      description:
        "ISO/IEC 27001 is one of the most widely recognised independent international security standards. This certificate is awarded to organisations that comply with ISO's high global standards. MonstarSuite has earned ISO/IEC 27001:2013 certification for Applications, Systems, People, Technology, and Processes.",
      applicableTo:
        "All cloud services and on-premise products of MonstarSuite.",
      image:
        "https://s3-alpha-sig.figma.com/img/ac7f/a600/f6ebf68f25cf7547e75decd673b4a6db?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b2xHlyfssFoZ3ukkroO-hpZOyLPwYYUbgLlg3d7yeRZWDVH5bws-i3BVbtyww5oA6F~44g-e-Yzt0P4v7Fq5883OJrpuNPD-PB-7WUlAC-YOrMtgvCByWu6Kaj7J-ezUh7bbuq9N38SYfRVYqW945MFJ1sTT9lzqQ8crzlmgTSc9XaY~yBaPpmsTyHlSfD44bqDScXmZYv8BsgA1CS4a1C~sA6UlhhqbTFDOpg-14XXuIX~--dQ2lLt~XhV~y8hcYdoASrgLIOR5fZUEX63ugpWOjygGfEKeXY7DinfV52W0zILy8JJirCrF3OEDZc9GAJBHLH8EWU6V9~gP0KE9~g__",
    },
    {
      id: 2,
      name: "ISO/IEC 27017",
      description:
        "ISO/IEC 27017 is a certification that is awarded to companies that have successfully implemented an information security management system (ISMS) that meets the requirements of the ISO/IEC 27017 standard. The certification is awarded by an accredited certification body following a successful audit.",
      applicableTo:
        "All cloud services and on-premise products of MonstarSuite.",
      image:
        "https://s3-alpha-sig.figma.com/img/ac7f/a600/f6ebf68f25cf7547e75decd673b4a6db?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b2xHlyfssFoZ3ukkroO-hpZOyLPwYYUbgLlg3d7yeRZWDVH5bws-i3BVbtyww5oA6F~44g-e-Yzt0P4v7Fq5883OJrpuNPD-PB-7WUlAC-YOrMtgvCByWu6Kaj7J-ezUh7bbuq9N38SYfRVYqW945MFJ1sTT9lzqQ8crzlmgTSc9XaY~yBaPpmsTyHlSfD44bqDScXmZYv8BsgA1CS4a1C~sA6UlhhqbTFDOpg-14XXuIX~--dQ2lLt~XhV~y8hcYdoASrgLIOR5fZUEX63ugpWOjygGfEKeXY7DinfV52W0zILy8JJirCrF3OEDZc9GAJBHLH8EWU6V9~gP0KE9~g__",
    },
    {
      id: 3,
      name: "ISO/IEC 27701",
      description:
        "ISO/IEC 27701 is a certification that is awarded to companies that have successfully implemented an information security management system (ISMS) that meets the requirements of the ISO/IEC 27701 standard. The certification is awarded by an accredited certification body following a successful audit.",
      applicableTo:
        "All cloud services and on-premise products of MonstarSuite.",
      image:
        "https://s3-alpha-sig.figma.com/img/ac7f/a600/f6ebf68f25cf7547e75decd673b4a6db?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b2xHlyfssFoZ3ukkroO-hpZOyLPwYYUbgLlg3d7yeRZWDVH5bws-i3BVbtyww5oA6F~44g-e-Yzt0P4v7Fq5883OJrpuNPD-PB-7WUlAC-YOrMtgvCByWu6Kaj7J-ezUh7bbuq9N38SYfRVYqW945MFJ1sTT9lzqQ8crzlmgTSc9XaY~yBaPpmsTyHlSfD44bqDScXmZYv8BsgA1CS4a1C~sA6UlhhqbTFDOpg-14XXuIX~--dQ2lLt~XhV~y8hcYdoASrgLIOR5fZUEX63ugpWOjygGfEKeXY7DinfV52W0zILy8JJirCrF3OEDZc9GAJBHLH8EWU6V9~gP0KE9~g__",
    },
  ];

  const handleComplianceClick = (compliance) => {
    setActiveCompliance(compliance);
  };

  return (
    <div>
      <div className="flex flex-col py-8 text-suitefontblack antialiased">
        <div className="grid grid-cols-2 pb-6 gap-5">
          <div className="col-span-1">
            {compliance.map((compliance) => (
              <Card
                key={compliance.id}
                className={`shadow-none hover:shadow-lg cursor-pointer hover:bg-gray-100 p-2 ${
                  activeCompliance === compliance ? "bg-gray-100" : ""
                }`}
                onClick={() => handleComplianceClick(compliance)}
              >
                <div className="flex items-center gap-5">
                  <img
                    src={compliance.image}
                    alt="compliance image"
                    className="w-36"
                  />

                  <p>{compliance.name}</p>
                </div>
              </Card>
            ))}
          </div>
          <div
            className={`col-span-1 ${
              activeCompliance ? "block border-l px-4" : "hidden"
            }`}
          >
            {activeCompliance && (
              <div className="px-4 py-2">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-5">
                      <img
                        src={activeCompliance.image}
                        alt="compliance image"
                        className="w-20"
                      />
                      <p>{activeCompliance.name}</p>
                    </span>
                    {/* close icon */}
                    <span
                      onClick={() => setActiveCompliance(null)}
                      className="cursor-pointer border-2 border-gray-500 rounded-full hover:text-gray-500 hover:bg-gray-100 p-1 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </div>
                  <hr />

                  <p>{activeCompliance.description}</p>

                  <p>
                    <span className="font-bold">Applicable to: </span>
                    {activeCompliance.applicableTo}
                  </p>

                  <div className="flex items-center -ml-3">
                    <Checkbox color="light-blue" checked={true} />

                    <span>
                      I accept the{" "}
                      <span className="text-[#1199ED]">
                        terms and conditions
                      </span>
                    </span>
                  </div>

                  {/* Download button */}
                  <div className="flex items-center justify-start gap-2">
                    <Button
                      color="light-blue"
                      size="md"
                      className="normal-case px-10 py-2 text-base"
                      disabled
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
