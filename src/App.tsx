import './App.css'
import ToastNotification from "./assets/notification/ToastNotification.tsx";

function App() {

  return (
    <>
      <p className={'text-center'}>
        Content of the web page
      </p>
      <ToastNotification message={"Welcome"} highlightedMessage={"username"}/>
    </>
  )
}

export default App
