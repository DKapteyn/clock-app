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
      className={`h-1/2 w-screen flex  items-center justify-center bg-opacity-75 ${colorChange}`}
    >
      <div className="w-[1100px] h-[252px] flex  ">
        <div className="w-[570px]">
          <div>
            <p className="H6-text mb-[9px]">CURRENT TIMEZONE</p>
            <p className="H2-text mb-[42px]">{time_zone}</p>
          </div>
          <div>
            <p className="H6-text mb-[9px]">DAY OF THE WEEK</p>
            <p className="H2-text ">{day_of_week}</p>
          </div>
        </div>
        <div
          className={`border-l-[1px] border-opacity-25 ${borderColorChange}`}
        >
          <div className="ml-[95px] ">
            <p className="H6-text mb-[9px]">DAY OF THE YEAR</p>
            <p className="H2-text mb-[42px]">{day_of_year}</p>
          </div>
          <div className="ml-[95px]">
            <p className="H6-text mb-[9px]">
              WEEK NUMBER
              <p className="H2-text">{week_number}</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
