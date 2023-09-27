import {useEffect} from "react";
import {useSnackbar} from "notistack";

const ToastNotification = () => {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    const message = 'Welcome, user!';
    const key = enqueueSnackbar(message, {
      autoHideDuration: 5000,
      variant: 'default',
      action: (key) => (
        <>
          <button onClick={() => closeSnackbar(key)}>{'✖'}</button>
        </>
      ),
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    });

  }, [enqueueSnackbar, closeSnackbar]);

  return (
    <></>
  )
}

export default ToastNotification