import logo from "../Asset/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

function Register() {
  const [nik, setnik] = useState("");
  const [password, setpassword] = useState("");
  const [nama, setnama] = useState("");
  const [department, setdepartment] = useState("");
  const [typeuser, settypeuser] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let datauser;
    if (nik.length > 1 && password.length > 1) {
      datauser = {
        nik: nik,
        password: password,
        nama: nama,
        department: department,
        typeuser: typeuser,
      };
    }

    sendAuthdata(datauser);
    // alert("Registration Success");
  };

  async function sendAuthdata(data) {
    setLoading(true);
    try {
      const res = await axios.post("/users/register", data);
      if (res.data.status_code === 200) {
        alert(res.data.message);
        setLoading(false);
      } else {
        setLoading(false);
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleselect = (e) => {
    settypeuser(e.target.value);
    let index = e.nativeEvent.target.selectedIndex;
    setdepartment(e.nativeEvent.target[index].text);
  };
  return (
    <>
      {loading === false ? (
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
                required
              />

              <input
                type="text"
                value={nama}
                onChange={(e) => setnama(e.target.value)}
                className="mx-2 my-2 px-2 py-2 rounded-md"
                placeholder="Nama"
                required
              />
              <select
                value={typeuser}
                onChange={handleselect}
                className="mx-2 my-2 px-2 py-2 rounded-md"
                required
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
                <option value="34">QC-QA</option>
                <option value="35">Utility</option>
              </select>

              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="mx-2 my-2 px-2 py-2 rounded-md shadow-md"
                placeholder="Password"
                required
              />
              <div className="flex flex-col w-full ">
                <button
                  type="submit"
                  className="self-center w-1/3 text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md text-sm px-5 py-2.5 my-1 mb-2"
                >
                  Sign Up
                </button>
                <div className="flex flex-row text-base self-center mb-1">
                  <div className="">Go to Checklist</div>
                  <Link
                    className="ml-1 text-blue-500 underline hover:text-blue-300 mr-2"
                    to="/login"
                  >
                    Here
                  </Link>
                  <div className="ml-2">Go to Arghapedia</div>
                  <a
                    className="ml-1 text-blue-500 underline hover:text-blue-300"
                    href="http://arghapedia/"
                  >
                    Here
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex h-screen m-auto items-center bg-slate-100">
          <ReactLoading
            className="flex mx-auto h-full bg-slate-100"
            type="bars"
            color="#173D6E"
            height={100}
            width={50}
          />
        </div>
      )}
    </>
  );
}

export default Register;
