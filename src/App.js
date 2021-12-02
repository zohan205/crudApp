import NavBar from './Components/NavBar';
import CodeForInterview from './Components/CodeForInterview';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import NotFound from './Components/NotFound'
import EditUser from './Components/EditUser';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<CodeForInterview/>} />
        <Route path="/all" element={<AllUsers/>} />
        <Route path="/add" element={<AddUser/>} />
        <Route path="/edit/:id" element={<EditUser/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
