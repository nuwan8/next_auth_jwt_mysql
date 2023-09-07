import {prisma} from "@/dbConfig/dbConfig";

const getUserByUserName = async (username:string)=>{
    const result = await prisma.user.findUnique({
        where: {
            userName: username,
          },
    })
    return result;
}

const getUser = async (email:string) =>{
    const result = await prisma.user.findMany();
    return result;
}

const getUserById =  async (num:number) =>{
    const result = await prisma.user.findUnique({
        where: {
            id: num,
          },
    })
}

export {getUser,getUserById,getUserByUserName};
   

    