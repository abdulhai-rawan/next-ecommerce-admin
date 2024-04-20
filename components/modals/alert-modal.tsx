import { useEffect, useState } from "react";

import { Button } from "../ui/button";
import { Modal } from "@/components/ui/modal";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Modal
        title="Are you sure?"
        description="This action cannot be undone."
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
          <Button variant={"outline"} disabled={loading} onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant={"destructive"}
            disabled={loading}
            onClick={onConfirm}
          >
            Continue
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default AlertModal;
