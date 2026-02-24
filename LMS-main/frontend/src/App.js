import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import SubjectList from "./pages/Subject";
import TopicList from "./pages/Topic";
import TopicPage from "./pages/TopicPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Notes from "./pages/Notes";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default route -> Register */}
        <Route path="/" element={<Register />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={
          <ProtectedRoute><Home /></ProtectedRoute>
        } />

        <Route path="/subjects" element={
          <ProtectedRoute><SubjectList /></ProtectedRoute>
        } />

        <Route path="/topics/:subject" element={
          <ProtectedRoute><TopicList /></ProtectedRoute>
        } />

        <Route path="/topic/:subject/:topic" element={
          <ProtectedRoute><TopicPage /></ProtectedRoute>
        } />

        <Route path="/notes" element={
          <ProtectedRoute><Notes /></ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
