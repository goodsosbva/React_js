import './component/index.css';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from './component/EmptyPage';


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DayList />}> 
        </Route>
        <Route path="/day/:day" element={<Day/>}>
        </Route>
        <Route element={<EmptyPage/>}>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
