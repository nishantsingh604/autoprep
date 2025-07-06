import { NextResponse } from "next/server";

export async function Post(req) {
    const { email, name } = await req.json();

    const users  = await db.select().from(usersTable).where(usersTable.email.eq(email));

    if(users?.length==0){
        const result =await db.insert(usersTable).values({
            name: name,
            email: email,
           }).returning(usersTable);
console.log("result", result);
           return NextResponse.json(result)
    }


    return NextResponse.json(users[0])
    
}