import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const opts = {
      method: "POST",
      body: JSON.stringify[
        {
          email: email,
          password: password,
        }
      ],
    };
    fetch(
      "https://3001-lalafontain-authenticat-6ki9xm0qotd.ws-eu93.gitpod.io/api/token/",
      opts
    )
      .then()
      .then()
      .catch((error) => {
        console.error("error!", error);
      });
    }
    return (
      <div className="text-center mt-5">
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick}>Login</button>
      </div>
    );
};
