import ReactDOM from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const PopUpModal: React.FC<Props> = ({ open, onClose, children }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
        onClick={onClose}
      ></div>
      <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-[90%] h-2/3 max-w-3xl">
        {children}
      </div>
    </>,
    document.body
  );
};

export default PopUpModal;
