import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

const Profile = () => {
  return <h1>I am the profile page</h1>;
};

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
