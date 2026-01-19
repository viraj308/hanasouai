import React, { useState } from "react";
import AuthForm from "../components/AuthForm";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login:", email, password);
    // later: Django API call
  };

  return (
    <AuthForm
      title="Welcome back!"
      subtitle="おかえりなさい！"
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleLogin}
      buttonText="Log In"
    />
  );
}
