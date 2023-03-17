import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Admin, Analytics, Dashboard, Home, } from "./pages";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./components/About";
import './App.css'
import FormLogin from "./pages/FormLogin";
import FormRegister from "./pages/FormRegister";
import User from "./components/User";

function App() {
  const [user, setUser] = useState(null);

  const login = () =>
    setUser({
        form:{
          
        }
    });
  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      <Navigation />


      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/form" element={<FormLogin/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/formr" element={<FormRegister/>} />
        <Route path="/user" element={<User/>} />
        
        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.permissions.includes("analize")}
            >
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              redirectTo="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function Navigation() {
  return (
  <div>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
    <img class="img" src="https://firebasestorage.googleapis.com/v0/b/ghostgym-f8921.appspot.com/o/Gold%20Luxury%20Initial%20Circle%20Logo.png?alt=media&token=cd5fe2a1-d98d-4596-aab2-bbdbb04ac748" alt="" width="60" height="60"  />
    <button id="BtnCanva"   data-bs-toggle="offcanvas" data-bs-target="#demo">
    
    </button>
  <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link class="navbar-brand" to="/" >Ghost Gym</Link>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/user">User</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>

      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

    </div>

  </div>

  
</nav>

<div class="offcanvas offcanvas-end" id="demo">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title">Heading</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <p>Some text lorem ipsum.</p>
    <p>Some text lorem ipsum.</p>
    <p>Some text lorem ipsum.</p>
    <button class="btn btn-secondary" type="button">A Button</button>
  </div>
</div>

</div>

  );
}

export default App