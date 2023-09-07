"use client";
import axios from "axios";
import Link from "next/link";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";


export default function DashboardPage({params} : any){

    const userData =async ()=>{
        const res = await axios.get('/api/users/userData')
        console.log(res.data);
    }

    const router = useRouter()
    userData();
    const logout = async()=>{
        try{

            await axios.get('/api/users/logout');
            toast.success('Logout successful');
            router.push('/login');
            }catch(error:any){
                    console.log(error.message);
                    toast.error(error.message);
            }
        }
    
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Dashboard</h1>
            <button
            onClick={logout}
            className="p-2"
            >Logout</button>
            <hr/>
            <p>dash {params.id}</p>
        </div>
    )
}