import { useState } from "react";
import "./App.css";
import About from "./components/About_";
import Car from "./components/Car";
import Navbar from "./components/Navbar";
import Student from "./components/Student";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert]=useState(null)


  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3a4249";
      showAlert("Dark mode has been enabled","success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#cfdce8";
      showAlert("Light mode has been enabled","success")
    }
  };
  return (
    <>
      {" "}
      <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} />{" "}
      {/* <About/> */}
  
     <Alert alert={alert}/>
      {/* <Car brand="Ford" color="purple" />{" "}
      <Student name="Ahmed" age="20" course="ReactJS" />{" "} */}
      <div className="container mt-4">
        {" "}
      
      </div>{" "}
      <div className="container mt-5 mb-5">
  <TextForm heading="Enter the Text to Analyze" mode={mode} />
  <About/>
</div>
    </>
  );
}
export default App;
