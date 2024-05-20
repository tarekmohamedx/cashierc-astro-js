import { useState, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";

type StatCounterProps = {
  start: number;
  end: number;
};

export const StatCounter = ({ start, end }: StatCounterProps) => {
  const { isIntersecting, ref } = useIntersectionObserver();
  const [startCount, setStartCount] = useState(start);

  useEffect(() => {
    if (isIntersecting) {
      const intervalId = setInterval(() => {
        setStartCount((prevCount) => {
          if (prevCount < end) return prevCount === 0 ? 1 : prevCount * 2;
          else {
            clearInterval(intervalId);
            return end;
          }
        });
      }, 100);
    }
  }, [isIntersecting]);

  return (
    <div ref={ref} className="text-lg font-bold">
      {startCount}
    </div>
  );
};
