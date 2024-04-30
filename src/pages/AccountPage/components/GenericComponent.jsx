import { Button, Typography } from "@material-tailwind/react";

export default function GenericComponent({ header, childrens }) {
  return (
    <div>
      <h1 className="flex justify-between items-center pb-5">
        <Typography variant="h6" component="h2">
          {header}
        </Typography>

        <Button
          color="blue"
          size="sm"
          className="px-8 py-2 rounded-md normal-case antialiased tracking-wide"
        >
          Edit
        </Button>
      </h1>
      {childrens}
    </div>
  );
}
