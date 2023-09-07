import {getUser} from "@/models/userMode";
import {NextRequest,NextResponse} from "next/server";
// import bcryptjs from 'bcryptjs';


// export async function POST(request: NextRequest){
//     try{
//         const reqBody = await request.json()
//         const {username,email,password} = reqBody
//         console.log(reqBody)
//         User.findUnique()

//     }catch(error: any){
//         return NextResponse.json({error: error.message},{status:500})
//     }

// }

export default async function handler(req:NextRequest,res:NextResponse){

    switch(req.method){
        case "GET" :
            return await getUser("");
    }

}

