import { Outlet } from "react-router-dom";
import { Directory } from "../../components/directory/directory.component";

export const Home = () => {
  const recipes = [
    {
      id: 1,
      title: "Bacalhau à Braz",
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
