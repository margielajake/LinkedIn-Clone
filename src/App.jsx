import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Components/Login";
import { auth } from "./features/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        // dispatch(logout());
      }
    });
  });

  return (
    <div className="flex flex-col bg-gray-100">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="flex mt-5 ">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
