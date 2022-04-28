import { Routes, Route } from "react-router-dom";
import { Navigation } from "./routes/navigation/navigation.component";
import { Home } from "./routes/home/home.component";
import { Auth } from "./routes/auth/auth.component";

const Ingredients = () => {
  return <h1>Ingredientes</h1>;
};

const Tags = () => {
  return <h1>Etiquetas</h1>;
};

const Profile = () => {
  return <h1>Perfil</h1>;
};

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
