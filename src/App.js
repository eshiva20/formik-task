// import "./App.css";
// import Reactform from "./components/Reactform";

// function App() {
//   return (
//     <>
//       <Reactform />
//     </>
//   );
// }

// export default App;


import './App.css';
import ReactForm from './components/Reactform';
import { BrowserRouter as Browser, Route, Routes } from 'react-router-dom';
import UserTable from './components/UserTable';

function App() {
  return (

    <Browser >
      <Routes>
        <Route path='/' element={<ReactForm />} />
        <Route path='/usertable' element={<UserTable />} />
      </Routes>
    </Browser>
  );
}

export default App;