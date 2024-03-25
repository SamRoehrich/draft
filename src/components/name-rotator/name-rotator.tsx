"use client";

import { useEffect, useRef, useState } from "react";

const NameRotator = ({ action }) => {
  const [athlete, setAthlete] = useState({
    name: "",
  });
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
