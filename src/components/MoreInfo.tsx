import { moreInfoDateProps, moreInfoPlaceProps } from "../App";

export function MoreInfo({
  time_zone,
  day_of_week,
  day_of_year,
  week_number,
}: moreInfoPlaceProps & moreInfoDateProps) {
  return (
    <div className="h-1/2 w-screen text-white flex">
      <div>
        <div>
          <h6 className="H6-text">CURRENT TIMEZONE</h6>
          <h2 className="H2-text">{time_zone}</h2>
        </div>
        <div>
          <h6 className="H6-text">DAY OF THE WEEK</h6>
          <h2 className="H2-text">{day_of_week}</h2>
        </div>
      </div>
      <div>
        <div>
          <h6 className="H6-text">DAY OF THE YEAR</h6>
          <h2 className="H2-text">{day_of_year}</h2>
        </div>
        <div>
          <h6 className="H6-text">
            WEEK NUMBER
            <h2 className="H2-text">{week_number}</h2>
          </h6>
        </div>
      </div>
    </div>
  );
}
