import { useState } from "react";
import { LuLogOut, LuUser2 } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LoggedInUser = () => {
  const [showDropdow, setShowDropdow] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const authUser = useSelector((state) => state.auth.user);

  return (
    <div className="relative">
      <button onClick={() => setShowDropdow(!showDropdow)} className="flex items-center gap-2">
        <LuUser2 className="text-4xl bg-black/5 stroke-[1.5px] p-2 rounded-full" />
        <p className="capitalize">{authUser?.username}</p>
      </button>

      {showDropdow && (
        <div className="absolute top-10 right-0 bg-white w-60 shadow-lg shadow-black/10 rounded-lg p-2 z-[1]">
          {authUser?.isAdmin && (
            <Link
              to="/admin"
              onClick={() => setShowDropdow(!showDropdow)}
              className="py-3.5 px-4 w-full hover:bg-black/5 rounded-md flex items-center ga-2"
            >
              <RxDashboard className="text-lg mr-2" />
              Dashboard
            </Link>
          )}
          <button
            onClick={() => (handleLogout(), setShowDropdow(!showDropdow))}
            className="py-3.5 w-full px-4 hover:bg-black/5 rounded-md flex items-center ga-2"
          >
            <LuLogOut className="text-lg mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default LoggedInUser;
