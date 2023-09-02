'use client'

import { useRouter } from "next/navigation";



const { createContext, useMemo, useCallback } = require("react");

export const AbcdC=createContext()

export const AbcdP=({children})=>{
  const { push } = useRouter();
  const logout = useCallback(() => {
    localStorage.clear();
  
    alert("User logged out");
    push("/login");
    
}, []);

  const value=useMemo(()=>({
    logout
  }),[logout])
  return <AbcdC.Provider value={value}>{children}</AbcdC.Provider>
}