import ToggleButton from "./ToggleButton";
import { mainPropsDate, mainPropsPlace, openProps, hour } from "../App";

export const MainPage = ({
  datetime,
  abbreviation,
  city,
  country_name,
  open,
  setOpen,
  hour,
}: mainPropsDate & mainPropsPlace & openProps & hour) => {
  const time = datetime.substring(11, 16);

  const greeting =
    hour >= 5 && hour <= 11
      ? "MORNING"
      : hour >= 12 && hour <= 18
      ? "AFTERNOON"
      : "EVENING";

  return (
    <div className="flex h-1/2 items-center justify-center text-white ">
      <div className=" h-[288px] w-[1110px]">
        <div className="flex align-middle">
          {hour >= 5 && hour < 18 ? (
            <img src="/assets/desktop/icon-sun.svg" alt="sun" />
          ) : (
            <img src="/assets/desktop/icon-moon.svg" alt="moon" />
          )}
          <p className="ml-4 body-text"> GOOD {greeting}, IT'S CURRENTLY</p>
        </div>

        <div className="flex  items-end ">
          <div className="H1-text pl-0 ml-0">{time}</div>
          <div className=" text-[40px] leading-7 font-light mr-3  mb-6">
            {abbreviation}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="H3-text">
            IN {`${city.toUpperCase()},  ${country_name.toUpperCase()}`}
          </div>
          <ToggleButton open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};
