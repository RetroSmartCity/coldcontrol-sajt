// app/dashboard/page.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (!auth) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <p>Ovde ide temperatura, grafovi i alarmi 🔥</p>

      <button
        onClick={() => {
          localStorage.removeItem("auth");
          window.location.href = "/login";
        }}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}