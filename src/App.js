import "./App.css";
import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    // const response = await fetch(url);
    // const tours = response.json();
    // console.log("tours", tours);

    try {
      const response = await fetch(url);
      const tours = response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className="App">
      <main>
        <Tours />
      </main>
    </div>
  );
}

export default App;
