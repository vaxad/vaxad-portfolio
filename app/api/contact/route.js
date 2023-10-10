import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server"


export async function POST(req) {
    try {
        const {email,message}= await req.json()
        const client = await clientPromise;
        const db = client.db("test");
        const response= await db.collection("responses").insertOne({
            email:email, message:message
        })
        return NextResponse.json({response:response})
    } catch (error) {
        return NextResponse.json({error:error})
    }
}