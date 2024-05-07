import { Outlet, useNavigation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Loading, { LoadingTypes } from "./Loading";

const AppLayout = () => {
  const { state } = useNavigation();
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col">
      <header
        className="px-4"
        style={{ boxShadow: "0 1px 2px rgba(0, 0, 0, .1)" }}
      >
        <div className="mx-auto max-w-6xl">
          <Navbar />
        </div>
      </header>
      <main className="relative">
        {state === "loading" && (
          <Loading type={LoadingTypes[2]} w={100} h={100} />
        )}

        <Outlet />
      </main>
      <footer className="mt-auto flex h-footer items-center justify-between bg-black/80 pr-0 pl-3 text-xs">
        <p className="flex h-full items-center justify-center gap-2 text-white/80">
          <span className="text-red-400"> @copy</span>
          <span>F@Pizza.co is Nesredin&apos;s Company.</span>
        </p>
        <button
          className="px-4 py-2.5 font-medium  uppercase tracking-wide text-orange-50"
          onClick={() => navigate("/cart")}
        >
          My Cart &rarr;
        </button>
      </footer>
    </div>
  );
};

export default AppLayout;
