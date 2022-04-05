import { useEffect, useState } from "react";

export const Quote = () => {
  const [quoteData, setQuoteData] = useState({
    author: "",
    en: "",
  });
  const [update, setUpdate] = useState(false);

  function getUpdate() {
    setUpdate(!update);
  }

  useEffect(() => {
    const timeApi =
      "https://programming-quotes-api.herokuapp.com/Quotes/random";

    const fetchTime = async (url: any): Promise<any> => {
      const res = await fetch(url);
      const quoteinfo = await res.json();
      setQuoteData(quoteinfo);
    };
    fetchTime(timeApi);
  }, [update]);
  return (
    <div className="h-1/2  m-auto w-[1110px] pt-14  text-white transition-all">
      <div className="flex">
        <div className="body-text w-[540px]">{quoteData.en}</div>
        <img
          onClick={() => getUpdate()}
          className="self-start pt-[8px]"
          src="\assets\desktop\icon-refresh.svg"
          alt="refresh symbol"
        />
      </div>
      <div className="H5-text mt-3">{quoteData.author}</div>
    </div>
  );
};
