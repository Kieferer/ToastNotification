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
      },
      style: {
        backgroundColor: "#271811",
        height: "90px",
        width: "342px",
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',
        borderBottomLeftRadius: '25px',
        borderBottomRightRadius: '25px',
      }
    });

  }, [enqueueSnackbar, closeSnackbar]);

  return (
    <></>
  )
}

export default ToastNotification