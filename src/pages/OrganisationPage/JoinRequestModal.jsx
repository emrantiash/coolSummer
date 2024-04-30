import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import { XMarkIcon } from "@heroicons/react/24/outline";

export default function JoinRequestModal({ company, openModal, setOpenModal }) {
  const handleOpen = () => setOpenModal(!openModal);

  return (
    <Dialog
      open={openModal}
      handler={handleOpen}
      dismiss={true}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -50 },
      }}
    >
      {/* close icon */}
      <DialogHeader className="flex justify-end">
        <IconButton onClick={handleOpen} color="white" size="md">
          <XMarkIcon className="h-5 w-5" />
        </IconButton>
      </DialogHeader>

      <DialogBody className="grid place-items-center gap-5 rounded-md py-16 bg-white text-suitefontblack antialiased shadow-lg">
        <Typography variant="h6" className="text-base font-normal">
          Joining Request Sent to
        </Typography>
        {company?.name && <Typography variant="h3">{company?.name}</Typography>}

        <Typography variant="h6" className="text-sm font-normal">
          Awaiting approval from the organisation
        </Typography>

        <DialogFooter>
          <Button
            color="blue"
            onClick={handleOpen}
            className="normal-case text-lg rounded-md antialiased px-8 py-2"
          >
            <span>Okay</span>
          </Button>
        </DialogFooter>
      </DialogBody>
    </Dialog>
  );
}
