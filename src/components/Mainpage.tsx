import ToggleButton from "./ToggleButton";
import { date, place } from "../App";

export const Mainpage = ({ datetime, abbreviation, city }: date & place) => {
  const time = datetime.substring(11, 16);

  return (
    <div className="w-screen h-[400px] grid place-content-center">
      <ToggleButton />
      <div>{time}</div>
      <div>{abbreviation}</div>
      <div>{city}</div>
    </div>
  );
};
