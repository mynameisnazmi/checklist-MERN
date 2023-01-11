import logo from "../Asset/logo.png";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <div className="flex h-screen bg-slate-100 justify-center">
        <div className="flex flex-col self-center mb-20 w-full sm:w-2/4">
          <img
            className="flex h-20 object-contain mb-4"
            alt="logo"
            src={logo}
          />
          <form className="flex flex-col h-fit w-4/5 sm:w-[100%] bg-[#E0F2FE] border-2 border-[#173D6E] rounded-md p-1 self-center">
            <span className="self-center py-1 text-lg font-bold text-[#173D6E]">
              Create Account
            </span>
            <input
              type="number"
              className="mx-2 my-2 px-2 py-2 rounded-md"
              placeholder="NIK"
            />
            <input
              type="text"
              className="mx-2 my-2 px-2 py-2 rounded-md"
              placeholder="Nama"
            />
            <select className=" mx-2 my-2 px-2 py-2 rounded-md">
              <option selected>Department</option>
              <option value="">Engineering Regran</option>
              <option value="">Engineering Extrusion</option>
              <option value="">Engineering Streching</option>
              <option value="">Engineering Winder</option>
              <option value="">Engineering Slitter</option>
              <option value="">Engineering Metalize &amp; Coating</option>
              <option value="">Process Line</option>
              <option value="">Process Slitter</option>
              <option value="">Process Development</option>
              <option value="">QC-QA</option>
              <option value="">Utility</option>
            </select>

            <input
              type="password"
              className="mx-2 my-2 px-2 py-2 rounded-md"
              placeholder="Password"
            />
            <select className=" mx-2 my-2 px-2 py-2 rounded-md">
              <option selected>Grade</option>
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
              <option value="4">IV</option>
              <option value="5">V</option>
              <option value="6">VI</option>
              <option value="7">VII</option>
            </select>
            <div className="flex flex-col w-full ">
              <button
                className="self-center w-1/3 text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md text-sm px-5 py-2.5 my-1 mb-2"
                to="/dashbord"
              >
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
