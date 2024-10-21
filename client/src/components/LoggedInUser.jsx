import { useState } from "react";
import toast, { LoaderIcon } from "react-hot-toast";
import { LuLogOut, LuUser2 } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../store/api/authApiSlice";
import { removeUser } from "../store/slices/authSlice";

const LoggedInUser = () => {
  const [showDropdow, setShowDropdow] = useState(false);
  const dispatch = useDispatch();

  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    const loading = toast.loading("Loading...");

    try {
      await logout().unwrap();
      toast.success("You have successfully logged out.");
      dispatch(removeUser());
    } catch (error) {
      toast.error(error.data.message || "An error occurred");
    } finally {
      toast.dismiss(loading);
    }
  };

  const authUser = useSelector((state) => state.auth.user);

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdow(!showDropdow)}
        className="flex items-center gap-2"
      >
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
            disabled={isLoading}
            className="py-3.5 w-full text-sm px-4 hover:bg-black/5 rounded-md flex items-center ga-2"
          >
            {isLoading ? (
              <>
                <LoaderIcon className="mr-2 w-4 h-4" />
                Loading...
              </>
            ) : (
              <>
                <LuLogOut className="text-lg mr-2" />
                Logout
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default LoggedInUser;
