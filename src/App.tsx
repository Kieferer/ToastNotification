import './App.css'
import {SnackbarProvider} from "notistack";

function App() {

  return (
    <>
      <SnackbarProvider maxSnack={5}/>
      <p className={'content-place-holder'}>
        Content of the web page
      </p>
    </>
  )
}

export default App
