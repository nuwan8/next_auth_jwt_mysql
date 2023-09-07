import { getDataFromToken } from "@/helpers/getUserData";
import { NextRequest,NextResponse } from "next/server";
import {getUserById} from "@/models/userMode";

export async function GET(request:NextRequest){
    try{

        const userId = await getDataFromToken(request);
        const user = await getUserById(userId);
        return NextResponse.json({
            message:"User Found",
            data: user
        })
    }catch(error:any){

        return NextResponse.json({error:error.message},{status:400});

    }
}