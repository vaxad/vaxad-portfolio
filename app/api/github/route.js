import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import axios from 'axios'
import cheerio from 'cheerio'
import { ObjectId } from "mongodb";

const dbId = process.env.ID

export async function GET(req) {
    try {
        const client = await clientPromise;
       const db = client.db("test");
    //    console.log(db)
        const projects = await db.collection("projects").find({}).toArray()
        // console.log(projects)
        const lastUpdated = new Date(projects[0].updated)
        const newDate = new Date(lastUpdated.getTime() + (24 * 60 * 60 * 1000)).getTime()
        const givenDate = Date.now()
        if(givenDate>newDate){
            projects[0].updated=Date.now()
            await db.collection("projects").replaceOne({_id: new ObjectId(dbId)},projects[0])
            store()
        }
        return NextResponse.json({web:projects[0].web,server:projects[0].server,app:projects[0].app})
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}


const getRepo = async(url) =>{
    try {
        const {data} = await axios.get(url,{
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
            }
        })
        const $ = cheerio.load(data)
        const content = $("div.repository-content div.Layout-sidebar div div div")
        const desc = $(content).children("p.f4").text().trim()
        const href =$(content).children("div.my-3.d-flex.flex-items-center").children("span").children("a").attr("href")
        const readme = $("div.repository-content div div div.Layout div.Layout-main div.js-code-block-container div.Box-body")
        const li = $(readme).children("article").children("p").children("a") 
        const img =[]
        li.each((idx,el)=>{
            const i = $(el).children("img").attr("src")
            img.push(i)
        })
        const id = $(readme).find("p").text().trim()
        const d= {img:img,web:href,desc:desc,id:id}
        return d
        
    } catch (error) {
        
    }
}

//db

const store=async()=>{
    try {
        console.log("store")   
        const client = await clientPromise;
       const db = client.db("test");  
        const projectsArr = await db.collection("projects").find({}).toArray()
        const projects = projectsArr[0]
        const web = await getweb()
        const server = await getserver()
        const app = await getapp()
        projects.web=web
        projects.server=server
        projects.app=app
        const resp=await db.collection("projects").replaceOne({_id:new ObjectId(dbId)},projects)
        console.log(resp)
    } catch (error) {
        
    }
}

function indexOfFirstAlphabet(str) {
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (/[a-zA-Z]/.test(char)) {
        return i; // Return the index of the first alphabet found
      }
    }
    return -1; // Return -1 if no alphabet is found
  }

const getweb = async() =>{
    const url = 'https://github.com/stars/vaxad/lists/web'
    try {
        const {data} = await axios.get(url,{
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
            }
        })
        const $ = cheerio.load(data)
        const list = $("div#user-list-repositories div")
        const web = []
        for (const el of list) {
            const d={title:"",desc:"",url:"",img:[],web:"",id:""}
            const title = $(el).children("div").children("h3").children("a").text().trim()
            const arr2 = title.split(' / ')
            d.title = arr2[1]
            d.url = 'https://github.com'+$(el).children("div").children("h3").children("a").attr("href")
            if(d.url!=="https://github.comundefined"){
            const resp = await getRepo(d.url)
            d.desc = resp.desc
            d.web = resp.web
            d.id = /[a-zA-Z]/.test(resp.id)?resp.id.slice(0,indexOfFirstAlphabet(resp.id)):resp.id
            d.img = resp.img
            web.push(d)
        }
        }
        return web
    } catch (error) {
        console.log(error)
    }
}

const getserver =async()=>{
    const url = 'https://github.com/stars/vaxad/lists/server'
    try {
        const {data} = await axios.get(url,{
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
            }
        })
        const $ = cheerio.load(data)
        const list = $("div#user-list-repositories div")
        const server = []
        for (const el of list) {
            const d={title:"",desc:"",url:"",web:"",id:""}
            const title = $(el).children("div").children("h3").children("a").text().trim()
            const arr2 = title.split(' / ')
            d.title = arr2[1]
            d.url = 'https://github.com'+$(el).children("div").children("h3").children("a").attr("href")
            if(d.url!=="https://github.comundefined"){
            const resp = await getRepo(d.url)
            d.desc = resp.desc
            d.web = resp.web
            d.id = /[a-zA-Z]/.test(resp.id)?resp.id.slice(0,indexOfFirstAlphabet(resp.id)):resp.id
            server.push(d)
        }
        }
        return server
    } catch (error) {
        console.log(error)
    }
}

const getapp = async()=>{
    const url = 'https://github.com/stars/vaxad/lists/app'
    try {
        const {data} = await axios.get(url,{
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
            }
        })
        const $ = cheerio.load(data)
        const list = $("div#user-list-repositories div")
        const app = []
        for (const el of list) {
            const d={title:"",desc:"",url:"",web:"",id:"",img:[]}
            const title = $(el).children("div").children("h3").children("a").text().trim()
            const arr2 = title.split(' / ')
            d.title = arr2[1]
            d.url = 'https://github.com'+$(el).children("div").children("h3").children("a").attr("href")
            if(d.url!=="https://github.comundefined"){
            const resp = await getRepo(d.url)
            d.desc = resp.desc
            d.web = resp.web
            d.img = resp.img
            d.id = /[a-zA-Z]/.test(resp.id)?resp.id.slice(0,indexOfFirstAlphabet(resp.id)):resp.id
            app.push(d)
        }
        }
        return app
    } catch (error) {
        console.log(error)
    }
}
