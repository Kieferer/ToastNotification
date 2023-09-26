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
    });

    setTimeout(() => {
      closeSnackbar(key);
    }, 5000);

  }, [enqueueSnackbar, closeSnackbar]);

  return (
    <></>
  )
}

export default ToastNotification