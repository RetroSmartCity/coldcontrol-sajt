"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // 🔥 za sada samo ulaz (kasnije ide pravi backend login)
    window.location.href = "/dashboard";
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#061a2b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <div
        style={{
          background: "#0f2a44",
          padding: 30,
          borderRadius: 12,
          width: 320,
        }}
      >
        <h2 style={{ marginBottom: 20 }}>Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
            borderRadius: 6,
            border: "none",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 15,
            borderRadius: 6,
            border: "none",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: 12,
            background: "#22c55e",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Uloguj se
        </button>
      </div>
    </div>
  );
}