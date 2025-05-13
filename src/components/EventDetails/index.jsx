import { Button, Heading } from "components";
import React from "react";

export default function EventDetails({ dayOfWeek, dayNumber, monthName, ...props }) {
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-center self-stretch px-[22px] py-2.5 sm:px-4 flex-1`}
    >
      <div className="flex w-[12%] flex-col items-center gap-1.5 rounded-md border-[0.7px] border-solid border-amber-400 sm:gap-1.5">
        {!!dayOfWeek ? (
          <Heading as="p" className="mt-1.5 !font-poppins text-[16.89px] font-semibold sm:text-[13px]">
            {dayOfWeek}
          </Heading>
        ) : null}
        {!!dayNumber ? (
          <Heading size="heading8xl" as="h2" className="!font-poppins text-[45.05px] font-semibold sm:text-[38px]">
            {dayNumber}
          </Heading>
        ) : null}
        <div className="flex justify-center self-stretch rounded-bl-md rounded-br-md bg-amber-400">
          {!!monthName ? (
            <Heading
              size="heading5xl"
              as="h6"
              className="!font-poppins text-[22.53px] font-semibold !text-black-900_01 sm:text-[18px]"
            >
              {monthName}
            </Heading>
          ) : null}
        </div>
      </div>
      <Heading size="heading6xl" as="h5" className="!font-poppins text-[27.3px] font-semibold sm:text-[22px]">
        University Rivals Visayas Day 1
      </Heading>
      <Button shape="round" className="mr-2.5 min-w-[172px] rounded-[12px] !border-[3.84px] px-[16.16px]">
        UPCOMING
      </Button>
    </div>
  );
}