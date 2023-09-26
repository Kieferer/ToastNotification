import './App.css'
import {SnackbarProvider} from "notistack";
import ToastNotification from "./notifications/ToastNotification.tsx";

function App() {

  return (
    <>
      <SnackbarProvider maxSnack={5} anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}>
        <ToastNotification/>
      </SnackbarProvider>
      <p className={'content-place-holder'}>
        Content of the web page
      </p>
    </>
  )
}

export default App
