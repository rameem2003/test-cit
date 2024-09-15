import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setUser } from "../AuthSlice";

const Home = () => {
  const data = useSelector((state) => state.AuthReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    dispatch(setUser(null));

    navigate("/login");
  };

  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h1 className=" font-bold text-3xl capitalize">
        Welcome, {data?.displayName}
      </h1>
      <h3 className=" font-bold text-xl">Email: {data?.email}</h3>

      <button
        onClick={handleSignout}
        className=" mt-5 bg-secondary p-2 px-5 rounded-full font-bold text-[20px] text-white"
      >
        Sign out
      </button>
    </div>
  );
};

export default Home;
