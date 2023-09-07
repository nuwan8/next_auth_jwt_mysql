import {getUser,getUserByUserName} from "@/models/userMode";
import {NextRequest,NextResponse} from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";


export async function POST(request: NextRequest){

    try{

        const reqBody =await request.json()
        const {userName,password} = reqBody;
        console.log(reqBody);
        const user = await  getUserByUserName(userName);
        if(user == null){

            return NextResponse.json({error:"Error"},{status:400})

        }else{
            //const validPassword =await bcryptjs.compare(password,user.password);
            if(password != user.password){
                return NextResponse.json({error:"Invalid password"},{status:400})
            }else{

                const tokenData = {
                    id: user.id,
                    username: user.userName

                }

                //create token
                const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn: "1d"});
                
                const response = NextResponse.json({
                    message:"Login Successful",
                    sucess:true,
                })
                response.cookies.set("token",token,{
                    httpOnly:true,
                })
               return response; 
            }
        }

        //        

    }catch(error: any){
        return NextResponse.json({error:error.message},{status:500})
    }

}

