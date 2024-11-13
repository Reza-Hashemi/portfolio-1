import React from "react";

const Register = ({ handleAuthFlow }) => {
  return (
    <div className="justify-center items-center text-center">
      <p className="text-white font-bold">
        Registration
      </p>
      <form className="mb-3 justify-center">
        <div className="m-3">
          <input
            type="text"
            placeholder="username"
            className="rounded p-1"
          />
        </div>
        <div className="m-3">
          <input
            type="text"
            placeholder="password"
            className="rounded p-1"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-amber-500 p-2 rounded-lg"
        >
          Register
        </button>
      </form>
      <div className="flex text-white justify-center">
        <p>have an account already?</p>
        <button
          onClick={handleAuthFlow}
          className="text-white ml-2 hover:text-purple-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
