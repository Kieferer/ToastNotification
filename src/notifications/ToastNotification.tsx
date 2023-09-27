import {useEffect} from "react";
import {useSnackbar} from "notistack";

const ToastNotification = () => {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    const message = 'Welcome, user!';
    const key = enqueueSnackbar(message, {
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

    const timer = setTimeout(() => {
      closeSnackbar(key);
    }, 5000);

    return() => clearTimeout(timer);

  }, [enqueueSnackbar, closeSnackbar]);

  return (
    <></>
  )
}

export default ToastNotification