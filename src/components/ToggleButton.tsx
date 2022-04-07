import { openProps } from "../App";

export default function Toggle({ open, setOpen }: openProps) {
  return (
    <>
      {open === false ? (
        <div
          onClick={() => setOpen(!open)}
          className="group h-10 w-[115px] md:h-14 md:w-[146px] bg-white rounded-full flex relative items-center"
        >
          <div className="toggle-text m-[21px] text-black opacity-50">MORE</div>
          <div className="absolute  right-1 md:right-2 rotate-180 transition-all h-8 w-8 md:h-10 md:w-10 hover:opacity-60">
            <img src="/assets/desktop/icon-arrow-up.svg" alt="arrow" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => setOpen(!open)}
          className="group h-10 w-[115px] md:h-14 md:w-[146px] bg-white rounded-full flex relative items-center"
        >
          <div className="toggle-text md:toggle-text-lg m-[21px] text-black opacity-50 ">
            LESS
          </div>
          <div className="absolute right-1 md:right-2  transition-all h-8 w-8 md:h-10 md:w-10  hover:opacity-60 ">
            <img src="/assets/desktop/icon-arrow-up.svg" alt="arrow" />
          </div>
        </div>
      )}
    </>
  );
}
