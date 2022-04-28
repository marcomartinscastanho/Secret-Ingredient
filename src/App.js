import { Routes, Route } from "react-router-dom";
import { Navigation } from "./routes/navigation/navigation.component";
import { Home } from "./routes/home/home.component";
import { Auth } from "./routes/auth/auth.component";

const Profile = () => {
  return <h1>I am the profile page</h1>;
};

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
