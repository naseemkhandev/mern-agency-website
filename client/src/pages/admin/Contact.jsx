import { FiEdit } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import data from "../../data/data.json";
import { selectTheme } from "../../store/slices/DarkModeSlice";
import { useSelector } from "react-redux";

const AdminContact = () => {
  const columns = ["photo", "name", "email", "gender", "role", "action"];

  const theme = useSelector(selectTheme);

  return (
    <section
      className={`py-6 pb-2 transition-all duration-500 whitespace-nowrap w-full flex flex-col gap-4 rounded-lg ${
        theme === "dark"
          ? "bg-darkColor text-white"
          : "bg-white shadow-lg shadow-slate-400/5"
      }`}
    >
      <div className="px-5 pb-5 border-b">
        <h2 className="font-semibold text-lg">All AdminContact</h2>
      </div>
      <div className="flex flex-col gap-6 h-full overflow-auto">
        <table className="w-full select-none cursor-text text-left">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className={`font-semibold capitalize pl-5 pb-3 cursor-pointer ${
                    theme !== "dark" && "text-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span>{column}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.users.map((item) => (
              <tr
                key={item.email}
                className={`w-full ${
                  theme === "dark"
                    ? "hover:bg-darkBg/50"
                    : "hover:bg-slate-300/10"
                }`}
              >
                <td
                  className={`py-1.5 pl-5 text-sm border-b ${
                    theme === "dark" ? "border-white/10" : ""
                  }`}
                >
                  <img
                    src={item.photo}
                    alt={item.name.slice(0, 10) + "..."}
                    className="2xl:w-16 w-12 aspect-square object-cover object-top rounded-full"
                  />
                </td>

                <td
                  className={`py-1.5 pl-5 text-sm border-b capitalize ${
                    theme === "dark" ? "border-white/10" : ""
                  }`}
                >
                  {item.name}
                </td>
                <td
                  className={`py-1.5 pl-5 text-sm border-b ${
                    theme === "dark" ? "border-white/10" : ""
                  }`}
                >
                  {item.email}
                </td>
                <td
                  className={`py-1.5 pl-5 text-sm border-b capitalize ${
                    theme === "dark" ? "border-white/10" : ""
                  }`}
                >
                  {item.gender}
                </td>
                <td
                  className={`py-1.5 pl-5 text-sm border-b capitalize ${
                    theme === "dark" ? "border-white/10" : ""
                  }`}
                >
                  {item.role}
                </td>
                <td
                  className={`border-b px-5 ${
                    theme === "dark" ? "border-white/10" : ""
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <button className="text-base p-2.5 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500/20">
                      <FiEdit />
                    </button>
                    <button className="text-base p-2.5 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500/20">
                      <FaTrashCan />
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-center px-5 gap-2 pb-4 pt-2 select-none">
          <button
            className={`p-2 rounded-full disabled:cursor-not-allowed cursor-pointer text-xl flex items-center justify-center text-center ${
              theme === "dark"
                ? "bg-white hover:bg-white/80 disabled:bg-white/10 disabled:text-white/20 text-black"
                : "bg-slate-300/20 hover:bg-slate-400/20 disabled:text-zinc-400/80 disabled:bg-slate-300/20 disabled:hover:bg-slate-300/20"
            }`}
          >
            <RiArrowLeftSLine />
          </button>
          <span className="text-sm">Page 0/9</span>
          <button
            className={`p-2 rounded-full disabled:cursor-not-allowed cursor-pointer text-xl flex items-center justify-center text-center ${
              theme === "dark"
                ? "bg-white hover:bg-white/80 disabled:bg-white/10 disabled:text-white/20 text-black"
                : "bg-slate-300/20 hover:bg-slate-400/20 disabled:text-zinc-400/80 disabled:bg-slate-300/20 disabled:hover:bg-slate-300/20"
            }`}
          >
            <RiArrowRightSLine />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminContact;
