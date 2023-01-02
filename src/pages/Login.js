import logo from "../Asset/logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Login() {
  const [nik, setnik] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let datauser;

    if (nik.length < 1) {
      alert("NIK Empty !");
    }
    if (password.length < 1) {
      alert("Password Empty !");
    }
    if (nik.length > 1 && password.length > 1) {
      datauser = {
        nik: nik,
        password: password,
      };
    }
    console.log(datauser);
    //sendAuthdata(datauser);
  };

  async function sendAuthdata(data) {
    const response = await fetch("http://localhost:3000/loginAuth", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const dataresponse = await response.json();
    console.log(dataresponse);
  }

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
            className="flex flex-col h-full w-full bg-[#E0F2FE] gap-2 border-2 border-[#173D6E] rounded-md p-4"
          >
            <span className="self-center py-2 text-lg font-bold text-[#173D6E]">Login</span>
            <input
              type="number"
              value={nik}
              onChange={(e) => setnik(e.target.value)}
              className="mx-2 my-2 px-2 py-2 rounded-md"
              placeholder="NIK"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="mx-2 my-2 px-2 py-2 rounded-md"
              placeholder="Password"
            />
            <div className="flex flex-row justify-center">  
            <button
              className="self-center text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
              to="/dashbord"
            >
              Sign In
            </button>

            <Link
              className="self-center text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md text-sm px-5 py-2.5 ml-2 mb-2"
              to="/register"
            >
              Register
            </Link></div>
          
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
