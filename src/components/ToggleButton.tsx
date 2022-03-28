import { useState } from "react";

export default function Toggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open === false ? (
        <div
          onClick={() => setOpen(!open)}
          className="group h-14 w-[146px] bg-white rounded-full flex relative items-center"
        >
          <div className="toggle-text m-[21px] opacity-50">MORE</div>
          <div className="absolute right-2 rotate-180 transition-all">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle
                  className=" group-hover:fill-hover
                  "
                  fill="#303030"
                  cx="20"
                  cy="20"
                  r="20"
                />
                <path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6" />
              </g>
            </svg>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setOpen(!open)}
          className="group h-14 w-[146px] bg-white rounded-full flex relative items-center"
        >
          <div className="toggle-text m-[21px] opacity-50">LESS</div>
          <div className="absolute right-2 transition-all">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle
                  className=" group-hover:fill-hover"
                  fill="#303030"
                  cx="20"
                  cy="20"
                  r="20"
                />
                <path stroke="#FFF" stroke-width="2" d="M14 23l6-6 6 6" />
              </g>
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
