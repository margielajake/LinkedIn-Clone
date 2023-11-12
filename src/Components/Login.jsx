import React, { useState } from "react";
import { auth } from "../features/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    createUserWithEmailAndPassword(auth, email.trim(), password)
      .then((userAuth) => {
        const user = userAuth.user;

        return updateProfile(user, {
          displayName: name,
          photoURL: profilePic,
        });
      })
      .then(() => {
        const user = auth.currentUser;
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: name,
            photoURL: profilePic,
          })
        );
      })
      .catch((error) => {
        console.error(
          "Firebase Authentication Error:",
          error.code,
          error.message
        );
        // Provide better feedback to the user
        alert("An error occurred during registration. Please try again.");
      });
  };

  const loginToApp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid place-items-center mx-auto py-[100px] ">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
        alt="LinkedIn"
        className="h-[70px] object-contain my-5"
      />
      <form className="flex flex-col">
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Fullname (Require if registering)"
          type="text"
          className="w-[350px] h-[50px] text-[20px] pl-[10px] mb-[10px] border-2 rounded-[5px]"
          required
        />
        <input
          id="pic"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile picture URL (Optional)"
          type="text"
          className="w-[350px] h-[50px] text-[20px] pl-[10px] mb-[10px] border-2 rounded-[5px]"
        />
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="w-[350px] h-[50px] text-[20px] pl-[10px] mb-[10px] border-2 rounded-[5px]"
          required
        />
        <input
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          className="w-[350px] h-[50px] text-[20px] pl-[10px] mb-[10px] border-2 rounded-[5px]"
          required
        />
        <button
          onClick={register}
          className="w-[350px] h-[50px] text-lg text-white bg-linkedin rounded-[5px]"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-[20px]">
        Not a member?{" "}
        <span onClick={loginToApp} className="text-linkedin cursor-pointer">
          Sign In
        </span>
      </p>
    </div>
  );
}

export default Login;
