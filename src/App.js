import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import UserList from "./Components/UserList";


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand>React Bootstrap</Navbar.Brand>
      </Navbar>
      {/* <Counter/> */}
      {/* <Register/> */}
      <UserList/>
    </div>
  );
}

export default App;
