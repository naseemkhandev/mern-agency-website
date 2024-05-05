import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import { useSelector } from "react-redux";
import RootLayout from "./layouts/rootLayout";
import AdminLayout from "./layouts/adminLayout";
import Users from "./pages/admin/Users";
import AdminContact from "./pages/admin/Contact";
import AdminServices from "./pages/admin/Services";
import Dashboard from "./pages/admin/Dashboard";

const App = () => {
  const currentUser = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {currentUser && currentUser?.isAdmin && (
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="contact" element={<AdminContact />} />
            <Route path="services" element={<AdminServices />} />
          </Route>
        )}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
