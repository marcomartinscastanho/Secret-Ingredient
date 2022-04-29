import { Routes, Route } from "react-router-dom";
import { Navigation } from "./routes/navigation/navigation.component";
import { Home } from "./routes/home/home.component";
import { Auth } from "./routes/auth/auth.component";
import { Recipes } from "./routes/recipes/recipes.component";

const Profile = () => {
  return <h1>Perfil</h1>;
};

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipes/*" element={<Recipes />} />
      </Route>
    </Routes>
  );
};

export default App;
