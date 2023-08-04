import { toast, type Theme, type ToastPosition } from "react-toastify";

export const handleSuccess = (
  {
    position = "bottom-left",
    label = "Success!",
    theme = "Light"
  }
) => {
  toast.success(label ?? "🦄 Success!", {
    className: "toastify-warn",
    position: position as ToastPosition,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme as Theme,
  });
};

export const handleWarn = (
  {
    position = "bottom-left",
    label = "Success!",
    theme = "Light"
  }
) => {
  toast.warn(label ?? " Warning ", {
    className: "toastify-warn",
    position: position as ToastPosition,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme as Theme,
  });
}
