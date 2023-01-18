import logo from "../Asset/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [nik, setnik] = useState("");
  const [password, setpassword] = useState("");
  const [nama, setnama] = useState("");
  const [department, setdepartment] = useState("");
  const [grade, setgrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let datauser;
    if (nik.length > 1 && password.length > 1) {
      datauser = {
        nik: nik,
        password: password,
        nama: nama,
        department: department,
        grade: grade,
      };
    }
    console.log(datauser);
    //sendAuthdata(datauser);
  };

  async function sendAuthdata(data) {
    const response = await fetch("http://localhost:5000/users", {
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
      <div className="flex h-screen bg-slate-100 justify-center">
        <div className="flex flex-col self-center mb-20 w-full sm:w-2/4">
          <img
            className="flex h-20 object-contain mb-4"
            alt="logo"
            src={logo}
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col h-fit w-4/5 sm:w-[100%] bg-[#E0F2FE] border-2 border-[#173D6E] rounded-md p-1 self-center"
          >
            <span className="self-center py-1 text-lg font-bold text-[#173D6E]">
              Create Account
            </span>
            <input
              type="number"
              value={nik}
              onChange={(e) => setnik(e.target.value)}
              className="mx-2 my-2 px-2 py-2 rounded-md shadow-md"
              placeholder="NIK"
            />

            <input
              type="text"
              value={nama}
              onChange={(e) => setnama(e.target.value)}
              className="mx-2 my-2 px-2 py-2 rounded-md"
              placeholder="Nama"
            />
            <select
              value={department}
              onChange={(e) => setdepartment(e.target.value)}
              className=" mx-2 my-2 px-2 py-2 rounded-md"
            >
              <option disabled value="">
                --Choose Department--
              </option>
              <option value="11">Engineering Regran</option>
              <option value="12">Engineering Extrusion</option>
              <option value="13">Engineering Streching</option>
              <option value="14">Engineering Winder</option>
              <option value="17">Engineering Slitter</option>
              <option value="15">Engineering Metalize &amp; Coating</option>
              <option value="21">Process Line</option>
              <option value="26">Process Slitter</option>
              <option value="2">Process Development</option>
              <option value="34">QC-QA</option>
              <option value="35">Utility</option>
            </select>

            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="mx-2 my-2 px-2 py-2 rounded-md shadow-md"
              placeholder="Password"
            />
            <select
              value={grade}
              onChange={(e) => setgrade(e.target.value)}
              className=" mx-2 my-2 px-2 py-2 rounded-md"
            >
              <option disabled value="">
                --Choose Grade--
              </option>
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
              <option value="4">IV</option>
              <option value="5">V</option>
              <option value="6">VI</option>
              <option value="7">VII</option>
            </select>
            <div className="flex flex-col w-full ">
              <button className="self-center w-1/3 text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md text-sm px-5 py-2.5 my-1 mb-2">
                Sign Up
              </button>
              <div className="flex flex-row text-xs self-center mb-1">
                <div>Already have an account?</div>
                <Link
                  className="ml-1 text-blue-500 underline hover:text-blue-300"
                  to="/Login"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
