import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/adminComponent/AdminDashboard';
import AdminLogin from './components/adminComponent/AdminLogin';
import CreateNewTask from './components/adminComponent/CreateNewTask';
import EditTask from './components/adminComponent/EditTask';
import StudentTask from './components/adminComponent/StudentTask';
import UpdateStudentTask from './components/adminComponent/UpdateStudentTask';
import SubmitForm from './components/userComponent/SubmitForm';
import UserDashboard from './components/userComponent/UserDashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/add-task" element={<CreateNewTask />} />
      <Route path="/edit-task/:id" element={<EditTask />} />
      <Route path="/studenttask" element={<StudentTask />} />
      <Route path="/studenttask/:id" element={<UpdateStudentTask />} />

      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/submitform" element={<SubmitForm />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
