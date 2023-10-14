import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const client = await clientPromise;
       const db = client.db("test");
    //    console.log(db)
        const experiences = await db.collection("expirences").find({}).toArray()
        // console.log(experiences)
        return NextResponse.json({experiences:experiences})
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}