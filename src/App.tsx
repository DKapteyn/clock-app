import { useEffect, useState } from "react";
import { MainPage } from "./components/MainPage";
import { Quote } from "./components/Quote";
import { MoreInfo } from "./components/MoreInfo";

export type mainPropsDate = {
  datetime: string;
  abbreviation: string;
};

export type mainPropsPlace = {
  city: string;
  country_name: string;
};

export type moreInfoPlaceProps = {
  time_zone: string;
};

export type moreInfoDateProps = {
  day_of_week: string;
  day_of_year: string;
  week_number: string;
};

export type openProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type hour = { hour: number };

function App() {
  const [dateData, setDateData] = useState<mainPropsDate & moreInfoDateProps>({
    datetime: "",
    abbreviation: "",
    day_of_week: "",
    day_of_year: "",
    week_number: "",
  });

  const [placeData, setPlaceData] = useState<
    mainPropsPlace & moreInfoPlaceProps
  >({ city: "", country_name: "", time_zone: "" });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeAndLocationUrls: any = [
      "http://worldtimeapi.org/api/ip",
      "https://api.freegeoip.app/json/?apikey=4f749390-b025-11ec-b0f1-39b9d0fe6f47",
    ];

    const fetchAll = async (urls: any) => {
      const res = await Promise.all(urls.map((u: any) => fetch(u)));
      const data = await Promise.all(res.map((r) => r.json()));

      setDateData(data[0]);
      setPlaceData(data[1]);
      console.log("time", data[0], "place", data[1]);
    };
    fetchAll(timeAndLocationUrls);

    /* const interval = setInterval(() => {
      fetchAll(apiUrls);
    }, 7000);
    return () => clearInterval(interval);
  },*/
  }, []);
  const hour = 19; // Number(dateData.datetime.substring(11, 13));

  const backgroundImage =
    hour > 5 && hour <= 18
      ? "bg-[url('./backgroundimage/bg-image-daytime.jpg')]"
      : hour > 18 || hour < 5
      ? "bg-[url('./backgroundimage/bg-image-nighttime.jpg')]"
      : null;

  return (
    <div
      className={`h-screen w-screen  bg-no-repeat bg-cover bg-opacity-80 ${backgroundImage}
      
      `}
    >
      <div className="bg-black bg-opacity-20 h-screen w-screen">
        {open === false && <Quote />}
        <MainPage
          datetime={dateData.datetime}
          abbreviation={dateData.abbreviation}
          city={placeData.city}
          country_name={placeData.country_name}
          open={open}
          setOpen={setOpen}
          hour={hour}
        />
        {open === true && (
          <MoreInfo
            time_zone={placeData.time_zone}
            day_of_week={dateData.day_of_week}
            day_of_year={dateData.day_of_year}
            week_number={dateData.week_number}
            hour={hour}
          />
        )}
      </div>
    </div>
  );
}

export default App;
