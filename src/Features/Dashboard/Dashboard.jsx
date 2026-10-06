import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Auth/authSlice";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold">
        Welcome, {user?.name}
      </h1>

      <p className="text-gray-600 mt-3">
        Email: {user?.email}
      </p>

      <button
        onClick={handleLogout}
        className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>
  );
};

export default Dashboard;