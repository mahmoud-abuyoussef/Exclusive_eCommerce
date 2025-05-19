import { useEffect, useState } from "react";

interface dateTime {
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountDown({ targetDate }: { targetDate: dateTime }) {
  const targetId = Number(localStorage.getItem("id")) || 1;

  const setTargetIdDateTime = `targetDateTime_${targetId}`;

  let updateTargetId = targetId;

  updateTargetId = targetId + 1;

  if (localStorage.getItem("id") && targetId < updateTargetId) {
    const targetDateTime = new Date();
    targetDateTime.setDate(targetDateTime.getDate() + targetDate.day);
    targetDateTime.setHours(targetDateTime.getHours() + targetDate.hours);
    targetDateTime.setMinutes(targetDateTime.getMinutes() + targetDate.minutes);
    targetDateTime.setSeconds(targetDateTime.getSeconds() + targetDate.seconds);

    localStorage.setItem(setTargetIdDateTime, JSON.stringify(targetDateTime.getTime()));

    localStorage.setItem("id", `${updateTargetId}`);
  } else {
    localStorage.setItem("id", "1");
  }

  let diffrentDate: number = 0;

  function countDownCalculator(): dateTime {
    const dateNow = new Date().getTime();

    const getDateTimeFromLocalStorage = localStorage.getItem(setTargetIdDateTime);

    diffrentDate = Number(getDateTimeFromLocalStorage) - dateNow;

    let dateTime = {
      day: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (diffrentDate > 0) {
      dateTime = {
        day: Math.floor(diffrentDate / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diffrentDate / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diffrentDate / (1000 * 60)) % 60),
        seconds: Math.floor((diffrentDate / 1000) % 60),
      };
    } else {
      localStorage.removeItem(setTargetIdDateTime);
    }

    return dateTime;
  }

  const [dateTime, setDateTime] = useState<dateTime>(countDownCalculator());

  useEffect(() => {
    if (diffrentDate !== 0) {
      const timer = setInterval(() => {
        setDateTime(countDownCalculator());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, []);

  return (
    <>
      {diffrentDate !== 0 && (
        <ul className="flex gap-5 justify-center items-center">
          <li>
            <span>Days</span>
            <br />
            <span className="font-bold text-2xl">{dateTime.day < 10 ? `0${dateTime.day}` : dateTime.day}</span>
          </li>
          <li>
            <span className="text-main-color text-4xl">:</span>
          </li>
          <li>
            <span>Hours</span>
            <br />
            <span className="font-bold text-2xl">{dateTime.hours < 10 ? `0${dateTime.hours}` : dateTime.hours}</span>
          </li>
          <li>
            <span className="text-main-color text-4xl">:</span>
          </li>
          <li>
            <span>Minutes</span>
            <br />
            <span className="font-bold text-2xl">{dateTime.minutes < 10 ? `0${dateTime.minutes}` : dateTime.minutes}</span>
          </li>
          <li>
            <span className="text-main-color text-4xl">:</span>
          </li>
          <li>
            <span>Seconds</span>
            <br />
            <span className="font-bold text-2xl">{dateTime.seconds < 10 ? `0${dateTime.seconds}` : dateTime.seconds}</span>
          </li>
        </ul>
      )}
    </>
  );
}
