import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const finalData = {
      email: inputs.email,
      password: inputs.password,
    };

    try {
      // make axios post request
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        finalData
      );

      console.log(response);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isAuthenticated", true);
      }
      //     localStorage.setItem("user", JSON.stringify(response.data.user));

      //     dispatch({
      //       type: "LOGGED_IN_USER",
      //       payload: {
      //         email: response.data.user.email,
      //         fullName: response.data.user.fullName,
      //         username: response.data.user.username,
      //         _id: response.data.user._id,
      //         accessToken: response.data.accessToken,
      //         subdomain: response.data.user.subdomain,
      //       },
      //     });
      //     window.location.href = "/";
      //   }

      setInputs({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
    localStorage.getItem("token")
      ? (window.location.href = "/")
      : (window.location.href = "/auth/login");
  };

  return (
    <>
      Email
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={inputs.email}
        onChange={handleChange}
      />
      Password
      <input
        name="password"
        placeholder="Password"
        type="password"
        value={inputs.password}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
      >
        Sign In
      </button>
    </>
  );
}
