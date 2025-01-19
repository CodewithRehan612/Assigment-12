"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export default function SignOutPage() {
  const [message, setMessage] = useState("");



  return (
    <div className="text-center p-4">
      <h1 className="text-2xl mb-4">Sign Out</h1>
      <button 
        onClick={()=> signOut()}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Sign Out
      </button>
     
    </div>
  );
}