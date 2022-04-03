import { useEffect, useState } from "react";

export const Quote = () => {
  const [quoteData, setQuoteData] = useState({
    author: "",
    en: "",
  });

  useEffect(() => {
    const timeApi =
      "https://programming-quotes-api.herokuapp.com/Quotes/random";

    const fetchtime = async (url: any): Promise<any> => {
      const res = await fetch(url);
      const quoteinfo = await res.json();
      setQuoteData(quoteinfo);
    };
    fetchtime(timeApi);
  }, []);
  return (
    <div className="h-[400px] w-screen pt-14 pl-[165px] text-white">
      <div className="flex">
        <div className="body-text w-[540px]">{quoteData.en}</div>
        <img
          className="self-start pt-[8px]   "
          src="\assets\desktop\icon-refresh.svg"
          alt="refresh symbol"
        />
      </div>
      <div className="H5-text mt-3">{quoteData.author}</div>
    </div>
  );
};
