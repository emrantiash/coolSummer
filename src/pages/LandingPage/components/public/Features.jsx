import { useState } from "react";

import { Button } from "@material-tailwind/react";

import UnifiedIntegration from "../../../../assets/illustration/UnifiedIntegration.png";
import StreamlinedWorkflow from "../../../../assets/illustration/StreamlinedWorkflow.png";
import CollaborativeEnvironment from "../../../../assets/illustration/CollaborativeEnvironment.png";
export default function Features() {
  const features = [
    {
      name: "Unified Integration",
      description:
        "MonstarSuite provides a unified platform where diverse applications effortlessly come together, enabling seamless connectivity and simplified management. By consolidating multiple tools into one hub, it streamlines accessibility and ensures a cohesive experience for users.",
      imageSrc: UnifiedIntegration,
    },
    {
      name: "Streamlined Workflow",
      description:
        "Experience enhanced productivity as MonstarSuite harmonizes data and processes across various applications. This integration creates a fluid workflow, eliminating inefficiencies and optimizing task transitions, ultimately saving time and effort in your daily operations.",
      imageSrc: StreamlinedWorkflow,
    },
    {
      name: "Collaborative Environment",
      description:
        "Within MonstarSuite's adaptable ecosystem, collaboration thrives. Its customizable features not only cater to individual preferences but also empower teams to work cohesively. By providing shared access and fostering clear communication channels, it encourages collective innovation and efficiency within your organization.",
      imageSrc: CollaborativeEnvironment,
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center ml-24">
          <h1 className="text-4xl font-light mb-4 leading-tight antialiased">
            {selectedFeature.name}
          </h1>
          <p className="text-gray-700">{selectedFeature.description}</p>

          <div className="flex flex-row justify-start items-center mt-32 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <Button
                  variant="filled"
                  size="sm"
                  className={`w-fit rounded-md normal-case text-base tracking-wide font-light text-nowrap shadow-none ${
                    feature.name === selectedFeature.name
                      ? "bg-suiteblue"
                      : "border border-gray-300 bg-transparent"
                  }`}
                  style={{
                    color:
                      feature.name === selectedFeature.name ? "#fff" : "#000",
                  }}
                  onClick={() => handleFeatureClick(feature)}
                >
                  <span>{feature.name}</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="w-8/12 mx-auto slide-in-bottom object-contain select-none pointer-events-none"
            src={selectedFeature.imageSrc}
            alt={selectedFeature.name}
          />
        </div>
      </div>
    </div>
  );
}
