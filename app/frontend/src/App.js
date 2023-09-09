import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
