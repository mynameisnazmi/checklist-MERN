import logo from "../Asset/logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

function Login() {
  const [nik, setnik] = useState("");
  const [password, setpassword] = useState("");
  // const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  // const refreshToken = async () => {
  //   try {
  //     const res = await axios.post("/refresh", { token: user.refreshToken });
  //     setUser({
  //       ...user,
  //       accessToken: res.data.accessToken,
  //       refreshToken: res.data.refreshToken,
  //     });
  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const axiosJWT = axios.create();

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     let currentDate = new Date();
  //     const decodedToken = jwt_decode(user.accessToken);
  //     if (decodedToken.exp * 1000 < currentDate.getTime()) {
  //       const data = await refreshToken();
  //       config.headers["authorization"] = "Bearer " + data.accessToken;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users", { nik, password });
      const response = res.data;
      console.log(response);
      // if (dataresponse.payload.status_code === 200) {
      //   //alert(dataresponse.message);
      //   navigate("/Dashbord");
      // } else {
      //   alert(dataresponse.message);
      // }
    } catch (err) {
      console.log(err);
    }
  };

  // const handleDelete = async (id) => {
  //   setSuccess(false);
  //   setError(false);
  //   try {
  //     await axiosJWT.delete("/users/" + id, {
  //       headers: { authorization: "Bearer " + user.accessToken },
  //     });
  //     setSuccess(true);
  //   } catch (err) {
  //     setError(true);
  //   }
  // };

  return (
    <>
      <div className="grid grid-cols-2 h-screen max-sm:grid-cols-1">
        <div className="grid h-full w-full bg-slate-100 place-content-center max-sm:grid-rows-4">
          <div
            className="h-1/2 bg-no-repeat bg-contain bg-center mt-auto"
            style={{ backgroundImage: "url(" + logo + ")" }}
          ></div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col h-full w-full bg-[#E0F2FE] gap-2 border-2 border-[#173D6E] rounded-md p-4 shadow-2xl"
          >
            <span className="self-center py-2 text-lg font-bold text-[#173D6E]">
              Login
            </span>
            <input
              type="number"
              value={nik}
              onChange={(e) => setnik(e.target.value)}
              className="mx-2 my-2 px-2 py-2 rounded-md shadow-md"
              placeholder="NIK"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="mx-2 my-2 px-2 py-2 rounded-md shadow-md"
              placeholder="Password"
              required
            />
            <div className="flex flex-row justify-center">
              <button className="self-center text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 shadow-lg">
                Sign In
              </button>

              <Link
                className="self-center text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md text-sm px-5 py-2.5 ml-2 mb-2 shadow-lg"
                to="/Register"
              >
                Register
              </Link>
            </div>
          </form>
        </div>

        <div className="bg-sky-100 h-full max-sm:hidden">
          <div
            className="h-full bg-no-repeat bg-contain bg-center mx-5 max-sm:hidden"
            style={{ backgroundImage: "url(" + logo + ")" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Login;
