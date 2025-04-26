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
      <div>
        <h1 className="text-4xl font-bold">
          welcome to bloombinary spots
        </h1>

      </div>
    </div>
  );
};

export default Home;
