import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response =
        await api.post(
          "/login",
          {
            username,
            password
          }
        );

      localStorage.setItem(
        "token",
        response.data.token
      );

      console.log("Token stored");

      navigate("/dashboard");

    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div>
      <h1>Online Bank Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>

          <input
            type="text"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />
        </div>

        <div>
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;