import logo from "../Asset/logo.png";
function Login() {
  return (
    <>
      <div className="grid grid-cols-2 h-screen max-sm:grid-cols-1">
        <div className="grid bg-slate-50 h-full w-full place-content-center max-sm:grid-rows-4">
          <div
            className="h-1/2 bg-no-repeat bg-contain bg-center mt-auto"
            style={{ backgroundImage: "url(" + logo + ")" }}
          ></div>
          <form>
            <div className="flex flex-col h-full w-full bg-blue-100 gap-1 border-2 border-blue-500 rounded-md">
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

              <button
                type="button"
                className=" self-center max-w-fit max-h-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Sign In
              </button>
              {/* <a className="self-center mb-1 -mt-3 px-1 py-2" href="#">
                Sign Up
              </a> */}
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
