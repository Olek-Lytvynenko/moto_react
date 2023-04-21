import { useEffect, useState } from "react";

type Props = {
  val: number;
  time: number;
};

export const Counter: React.FC<Props> = ({ val, time }) => {
  const [ currVal, setCurrVal ] = useState(0);

  useEffect(() => {
    currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
  }, [ currVal ]);

  return (
    <div className="counter">{currVal}</div>
  );
}
