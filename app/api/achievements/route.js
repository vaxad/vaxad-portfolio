import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const client = await clientPromise;
       const db = client.db("test");
    //    console.log(db)
        const achievements = await db.collection("achievements").find({}).toArray()
        // console.log(achievements)
        return NextResponse.json({achievements:achievements})
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}