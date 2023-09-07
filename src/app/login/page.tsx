"use client";
import Link from "next/link";
import React,{useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import {toast} from "react-hot-toast";

export default function LoginPage(){

    const[user,setUser] = React.useState({
        userName:"",
        password:"",
    })

    const [buttonDisabled,setButtonDisabled] = React.useState(false);

    const [loading,setLoading] = React.useState(false);

    const router = useRouter();

    const onLogin = async () => {
        try{
            setLoading(true);
            const response = await axios.post("/api/users/login",user);
            console.log("Login Success",response.data);
            toast.success("Login Success");
            router.push("/dashboard");

        }catch(error:any){
            console.log("Login failed",error.message);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{

        if(user.userName.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }


    },[user]);

    return (
        <div>
            <h1>{loading ? "Processing" : "Login"}</h1>
            <hr/>
            <label htmlFor="username"> User Name</label>
            <input className="p-2" 
            id="username"
            type="text"
            value={user.userName}
            onChange={(e) => setUser({...user, userName: e.target.value})}
            placeholder="User Name"
            />
             <label htmlFor="password"> Password</label>
            <input className="p-2" 
            id="password"
            type="text"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="Password"
            />
            <button
            onClick={onLogin}
            className="p-2"
            >Login Here</button>
        </div>
        
    );

}