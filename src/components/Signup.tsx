"use client";

import axios from "axios";
import { useForm } from "react-hook-form";

interface SignInData {
  email: string;
  password: string;
}

export default function Signup() {
  const { register, handleSubmit } = useForm<SignInData>();
  const onSubmit = async (data: SignInData) => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:5000/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response.data) {
        console.log(response.data);
      }
    } catch (error) {}
  };
  return (
    <div
      style={{
        height: "100vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{
            border: "2px solid black",
          }}
          placeholder="email"
          type="email"
          {...register("email")}
        />
        <input
          style={{
            border: "2px solid black",
          }}
          placeholder="password"
          type="password"
          {...register("password")}
        />
        <button type="submit" style={{ border: "2px solid black" }}>
          Sign up
        </button>
      </form>
    </div>
  );
}
