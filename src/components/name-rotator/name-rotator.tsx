"use client";

import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line
// @ts-ignore
const NameRotator = ({ action }) => {
  const [athlete, setAthlete] = useState({
    name: "",
  });
  // eslint-disable-next-line
  // @ts-ignore
  const intervalRef = useRef<Timeout>();

  useEffect(() => {
    async function getRandomAthlete() {
      return await action();
    }

    intervalRef.current = setInterval(async () => {
      setAthlete(await getRandomAthlete());
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  });
  return <span className="font-semibold"> {athlete.name} </span>;
};

export default NameRotator;
