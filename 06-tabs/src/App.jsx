import { useEffect } from "react";
import { useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";
const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [fetched, setFetched] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  const fetchData = async () => {
    const data = await fetch(url);
    setFetched(await data.json());
    setLoading(false);
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <main className="jobs-center">
      <BtnContainer
        jobs={fetched}
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
      />
      <JobInfo jobs={fetched} currentItem={currentItem} />
    </main>
  );
};
export default App;
