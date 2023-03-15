import './App.css';
import ReactForm from './components/Reactform';
import { BrowserRouter as Browser, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Browser >
      <Routes>
        <Route path='/' element={<ReactForm />} />
      </Routes>
    </Browser>
  );
}

export default App;