export type mainPropsDate = {
  datetime: string;
  abbreviation: string;
};

export type mainPropsPlace = {
  city: string;
  country_name: string;
};

export type moreInfoPlaceProps = {
  time_zone: name;
};

export type name = { name: string };

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
