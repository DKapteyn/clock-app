import { moreInfoDateProps, moreInfoPlaceProps, hour } from "../App";

export function MoreInfo({
  time_zone,
  day_of_week,
  day_of_year,
  week_number,
  hour,
}: moreInfoPlaceProps & moreInfoDateProps & hour) {
  const colorChange =
    hour > 5 && hour <= 18
      ? "text-black bg-white"
      : hour > 18 || hour < 5
      ? "text-white bg-black"
      : null;

  const borderColorChange =
    hour > 5 && hour <= 18
      ? "border-black"
      : hour > 18 || hour < 5
      ? "border-white"
      : null;
  return (
    <div
      className={`h-1/2 w-screen flex  items-center bg-opacity-75 justify-center pr-[26px] pl-[26px] md:p-0  ${colorChange}`}
    >
      <div className="lg:w-[1100px] lg:h-[252px] md:w-[538px] md:mr-9 md:h-[202px] md:flex w-screen gap-4 grid ">
        <div className="gap-4 grid">
          <div className="flex justify-between md:inline ">
            <div className=" moreInfoTitle-text lg:mb-[9px] md:text-[13px] md:tracking-[2.6px] lg:text-[15px] lg:tracking-[3px] ">
              CURRENT TIMEZONE
            </div>
            <div className="moreInfoInfo-text md:mb-[42px] md:text-[40px] md:leading-[48.41px] lg:text-[56px] lg:leading-[67.77px]">
              {time_zone}
            </div>
          </div>
          <div className="flex justify-between md:inline ">
            <p className="moreInfoTitle-text lg:mb-[9px] md:text-[13px] md:tracking-[2.6px] lg:text-[15px] lg:tracking-[3px]">
              DAY OF THE WEEK
            </p>
            <p className="moreInfoInfo-text md:text-[40px] md:leading-[48.41px] lg:text-[56px] lg:leading-[67.77px]">
              {day_of_week}
            </p>
          </div>
        </div>
        <div
          className={`lg:inline hidden border-l-[1px] w-[1px] border-opacity-25 ${borderColorChange}`}
        ></div>
        <div className="gap-4 grid">
          <div className=" lg:ml-[95px] flex justify-between md:inline ">
            <p className="moreInfoTitle-text lg:mb-[9px] md:text-[13px] md:tracking-[2.6px] w-max lg:text-[15px] lg:tracking-[3px]">
              DAY OF THE YEAR
            </p>
            <p className="moreInfoInfo-text md:mb-[42px] md:text-[40px] md:leading-[48.41px] lg:text-[56px] lg:leading-[67.77px]">
              {day_of_year}
            </p>
          </div>
          <div className=" lg:ml-[95px] flex justify-between md:inline ">
            <p className="moreInfoTitle-text lg:mb-[9px] md:text-[13px] md:tracking-[2.6px] lg:text-[15px] lg:tracking-[3px] ">
              WEEK NUMBER
            </p>
            <p className="moreInfoInfo-text md:text-[40px] md:leading-[48.41px] lg:text-[56px] lg:leading-[67.77px]">
              {week_number}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
