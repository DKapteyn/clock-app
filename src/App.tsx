import { useEffect, useState } from "react";
import { Mainpage } from "../src/components/Mainpage";
import { Quote } from "./components/Quote";

export type date = {
  datetime: string;
  abbreviation: string;
};

export type place = {
  city: string;
};

function App() {
  const [timeData, setTimeData] = useState<date>({
    datetime: "",
    abbreviation: "",
  });

  const [placeData, setPlaceData] = useState<place>({ city: "" });

  useEffect(() => {
    const timeAndLocationUrls: any = [
      "http://worldtimeapi.org/api/ip",

      "https://api.freegeoip.app/json/?apikey=4f749390-b025-11ec-b0f1-39b9d0fe6f47",
    ];

    const fetchAll = async (urls: any) => {
      const res = await Promise.all(urls.map((u: any) => fetch(u)));
      const data = await Promise.all(res.map((r) => r.json()));
      console.log(data[1]);
      setTimeData(data[0]);
      setPlaceData(data[1]);
    };
    fetchAll(timeAndLocationUrls);

    /* const interval = setInterval(() => {
      fetchAll(apiUrls);
    }, 7000);
    return () => clearInterval(interval);
  },*/
  }, []);

  return (
    <div className="h-screen w-screen bg-[url('./backgroundimage/bg-image-daytime.jpg')]  bg-no-repeat bg-cover bg-opacity-80  ">
      <div className="bg-black bg-opacity-20">
        <Quote />
        <Mainpage
          datetime={timeData.datetime}
          abbreviation={timeData.abbreviation}
          city={placeData.city}
        />
      </div>
    </div>
  );
}

export default App;
