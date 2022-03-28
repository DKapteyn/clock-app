import { useEffect, useState } from "react";
import Mainpage from "../src/components/Mainpage";

function App() {
  const [timeData, setTimeData] = useState({});
  const [quoteData, setQuoteData] = useState({});

  useEffect(() => {
    const apiUrls: any = [
      "http://worldtimeapi.org/api/ip",
      " https://programming-quotes-api.herokuapp.com/Quotes/random",
    ];
    const fetchAll = async (urls: any) => {
      const res = await Promise.all(urls.map((u: any) => fetch(u)));
      const jsons = await Promise.all(res.map((r) => r.json()));
      return setTimeData(jsons[0]), setQuoteData(jsons[1]);
    };

    fetchAll(apiUrls);
  }, []);

  return (
    <div className="h-screen w-screen bg-[url('./backgroundimage/bg-image-daytime.jpg')] bg-no-repeat bg-cover">
      <Mainpage />
      {console.log("time", timeData)}
      {console.log("quote", quoteData)}
    </div>
  );
}

export default App;
