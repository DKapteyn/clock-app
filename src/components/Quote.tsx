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
    <div className="h-1/2 w-screen pt-14  text-white transition-all flex justify-center">
      <div className=" lg:w-[573px] lg:mr-[527px] ">
        <div className="flex">
          <div className="body-text md:body-text-md md:w-[540px] w-[290px]">
            {quoteData.en}
          </div>
          <img
            onClick={() => getUpdate()}
            className="self-start pt-[6px] md:pt-[8px]"
            src="\assets\desktop\icon-refresh.svg"
            alt="refresh symbol"
          />
        </div>
        <span className=" font-bold body-text  md:H5-text mt-3 w-5 ">
          {quoteData.author}
        </span>
      </div>
    </div>
  );
};
