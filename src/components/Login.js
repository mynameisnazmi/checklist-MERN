import logo from "../Asset/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="grid grid-cols-2 h-screen max-sm:grid-cols-1">
        <div className="grid h-full w-full place-content-center max-sm:grid-rows-4">
          <div
            className="h-1/2 bg-no-repeat bg-contain bg-center mt-auto"
            style={{ backgroundImage: "url(" + logo + ")" }}
          ></div>
          <form>
            <div className="flex flex-col h-full w-full bg-[#E0F2FE] gap-1 border-2 border-[#173D6E] rounded-md">
              <label className="self-center py-2">Log in</label>

              <input
                className="mx-2 my-2 px-2 py-2 rounded-md"
                placeholder="Username"
                type="text"
              ></input>

              <input
                className="mx-2 my-2 px-2 py-2 rounded-md"
                placeholder="Password"
                type="password"
              ></input>
              <Link
                className="self-center max-w-fit max-h-fit text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
                to="/dashbord"
              >
                Sign In
              </Link>
              {/* <Link
                className="self-center max-w-fit max-h-fit text-white bg-[#173D6E] hover:bg-[#9BB6D5] font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
                to="/register"
              >
                Sign Up
              </Link> */}
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
