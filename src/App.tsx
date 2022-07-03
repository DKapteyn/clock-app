import { useEffect, useState } from "react";
import { MainPage } from "./components/MainPage";
import { Quote } from "./components/Quote";
import { MoreInfo } from "./components/MoreInfo";
import {
  mainPropsDate,
  moreInfoDateProps,
  mainPropsPlace,
  moreInfoPlaceProps,
} from "./type";

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
  >({ city: "", country_name: "", time_zone: { name: "" } });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeAndLocationUrls: any = [
      "http://worldtimeapi.org/api/ip",
      "https://api.ipgeolocation.io/ipgeo?apiKey=213d5577c1fd450a8f664fa852e26c49",
    ];

    const fetchAll = async (urls: any) => {
      const res = await Promise.all(urls.map((u: any) => fetch(u)));
      const data = await Promise.all(res.map((r) => r.json()));

      setDateData(data[0]);
      setPlaceData(data[1]);
      console.log("time", data[0], "place", data[1]);
    };
    fetchAll(timeAndLocationUrls);
  }, []);
  const hour = Number(dateData.datetime.substring(11, 13));
  //added tailwind breakpoint prefixes into the constant to control breakpoints
  const backgroundImageLarge =
    hour > 5 && hour <= 18
      ? "lg:bg-[url('./backgroundImage/bg-image-daytime.jpg')]"
      : hour > 18 || hour < 5
      ? "lg:bg-[url('./backgroundImage/bg-image-nighttime.jpg')]"
      : null;

  const backgroundImageMedium =
    hour > 5 && hour <= 18
      ? "md:bg-[url('./backgroundImage/tablet-bg-image-daytime.jpg')]"
      : hour > 18 || hour < 5
      ? "md:bg-[url('./backgroundImage/tablet-bg-image-nighttime.jpg')]"
      : null;

  const backgroundImageSmall =
    hour > 5 && hour <= 18
      ? "bg-[url('./backgroundImage/mobile-bg-image-daytime.jpg')]"
      : hour > 18 || hour < 5
      ? "bg-[url('./backgroundImage/mobile-bg-image-nighttime.jpg')]"
      : null;

  return (
    <div
      className={`h-screen w-screen  bg-no-repeat bg-cover bg-opacity-80 ${backgroundImageLarge} ${backgroundImageMedium} ${backgroundImageSmall}`}
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
            name={placeData.time_zone.name}
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
