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
      <div className=" lg:h-[288px] lg:w-[1110px] lg:mr-0 md:w-[499px] md:mr-[74px] md:h-[367px] h-[267px] w-[278px]">
        <div className="flex items-center mb-4 md:mb-0">
          {hour >= 5 && hour < 18 ? (
            <img src="/assets/desktop/icon-sun.svg" alt="sun" />
          ) : (
            <img src="/assets/desktop/icon-moon.svg" alt="moon" />
          )}
          <p className="ml-4 md:inline md:body-text lg:tracking-[4px] md:tracking-[3.6px] hidden">
            GOOD {greeting}, IT'S CURRENTLY
          </p>

          <p className="md:hidden H6-text tracking-[3px]  ml-4">
            GOOD {greeting}
          </p>
        </div>

        <div className="flex  items-end ">
          <div className="lg:text-[200px] lg:tracking-[-5px] lg:leading-[200px]  md:text-[175px] md:leading-[175px] md:tracking-[-4.375px] time-text pl-0 ml-0">
            {time}
          </div>
          <div className=" abr mb-[6px] ml-[5px] md:text-[32px] md:mb-[12px] md:ml-[11px] lg:text-[40px] ">
            {abbreviation}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  lg:items-center justify-between">
          <div className="lg:H3-text md:text-lg  md:tracking-[3.6px] text-[15px] leading-7 tracking-[3px] font-bold lg:mb-0 md:mb-20 mb-12">
            IN {`${city.toUpperCase()},  ${country_name.toUpperCase()}`}
          </div>
          <ToggleButton open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};
