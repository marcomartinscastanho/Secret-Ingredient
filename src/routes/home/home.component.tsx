import { Outlet } from "react-router-dom";
import { Directory } from "../../components/directory/directory.component";

export const Home = () => {
  const recipes = [
    {
      id: 1,
      title: "Pataniscas de bacalhau com arroz de feijão",
      time: 30,
      tags: [
        { id: 1, name: "Peixe" },
        { id: 2, name: "Portuguesa" },
      ],
    },
    {
      id: 2,
      title: "Chili com carne",
      time: 50,
      tags: [
        { id: 3, name: "Carne" },
        { id: 4, name: "Mexicana" },
        { id: 5, name: "Exemplo" },
        { id: 6, name: "Etiqueta" },
        { id: 7, name: "Outra Etiqueta" },
      ],
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory recipes={recipes} />
    </div>
  );
};

export default Home;
