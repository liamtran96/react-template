import { useSnackbar } from "notistack";
import { useCallback } from "react";

export const useNotify = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const notify = useCallback(
    (variant) =>
      (message, options = {}) =>
        enqueueSnackbar(message, { autoHideDuration: 2500, ...options, variant }),
    [enqueueSnackbar]
  );

  const successNotify = notify("success");
  const errorNotify = notify("error");
  const warningNotify = notify("warning");
  const infoNotify = notify("info");

  const closeNotify = useCallback(() => {
    closeSnackbar();
  }, [closeSnackbar]);

  return {
    successNotify,
    errorNotify,
    warningNotify,
    infoNotify,
    closeNotify,
  };
};