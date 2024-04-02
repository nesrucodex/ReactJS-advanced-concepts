import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-10 max-w-xl rounded-sm bg-red-400 px-4 py-4 text-white">
      <h1 className="rounded-md pb-4 pl-2 pt-1 ">
        {error.data || error.message}
      </h1>
      <button
        className="mt-4 rounded-sm bg-white/90 px-4 py-1 text-slate-700 ring-1 ring-slate-300"
        onClick={() => navigate("/")}
      >
        Return to Home
      </button>
    </div>
  );
};

export default Error;
