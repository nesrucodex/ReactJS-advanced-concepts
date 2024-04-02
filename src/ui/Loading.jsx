import ReactLoading from "react-loading";

import { string, number } from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const LoadingTypes = [
  "blank",
  "balls",
  "bars",
  "bubbles",
  "cubes",
  "cylon",
  "spin",
  "spinningBubbles",
  "spokes",
];

const Loading = ({ type, color = "#777777", w, h }) => {
  return (
    <div className="absolute top-0 z-[999] grid h-[calc(100vh-80px)] w-full place-items-center bg-black/5 backdrop-blur-sm">
      <ReactLoading type={type} color={color} width={w} height={h} />
    </div>
  );
};

Loading.propTypes = {
  type: string.isRequired,
  color: string,
  w: number,
  h: number,
};

export default Loading;
