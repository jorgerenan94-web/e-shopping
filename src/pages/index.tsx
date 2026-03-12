import Header from "@/components/Header";
import Input from "@/components/ui/input";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home(){
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if(!token){
      router.push("/login")
    }
  }, [])
  
  return (
    <div className="min-h-screen bg-[#121417]">
      <Header />
    </div>
  )
}