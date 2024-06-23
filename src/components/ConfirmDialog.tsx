import Button from "./Button";
import Dialog from "./Dialog";

interface Props {
  title: string;
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDialog = ({
  open,
  onClose,
  title,
  children,
  onConfirm,
}: Props) => {
  if (!open) {
    return <></>;
  }
  return (
    <Dialog show={open} hide={onClose} icon={false}>
      <h2 className="text-xl">{title}</h2>
      <div className="py-5">{children}</div>
      <div className="flex justify-center items-center">
        <div className="p-1">
          <Button
            action={() => onClose()}
            className="bg-red-500 px-4 py-1"
          >
            No
          </Button>
        </div>
        <div className="p-1">
          <Button
            action={() => {
              onClose();
              onConfirm();
            }}
            className="bg-green-500 px-4 py-1"
          >
            Yes
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmDialog;
