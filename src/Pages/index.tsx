import React, { useEffect } from "react";
import { getCompetition } from "../Services";


const Home: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCompetition("premier-league");
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <h1 className="text-5xl font-bold">Welcome to the Home Page!</h1>
      <p className="mt-4 text-lg">This is a simple React application.</p>
    </div>
  );
};

export default Home;
