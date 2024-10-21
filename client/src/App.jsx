import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AdminLayout from "./layouts/adminLayout";
import RootLayout from "./layouts/rootLayout";
import About from "./pages/About";
import AdminContact from "./pages/admin/Contact";
import Dashboard from "./pages/admin/Dashboard";
import AdminServices from "./pages/admin/Services";
import Users from "./pages/admin/Users";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Services from "./pages/Services";

const App = () => {
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

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="contact" element={<AdminContact />} />
          <Route path="services" element={<AdminServices />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
