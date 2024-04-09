import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { CreateBlogInput,createBlogInput,updateBlogInput } from "@lakshay_arora0501/medium-common";

export const BlogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>()

BlogRouter.use('/*',async(c,next)=>{

  const header = c.req.header("authorization") || ""

  const token = header.split(" ")[1]

  const user = await verify(token,c.env.JWT_SECRET)

  if(user){
    c.set("userId",user.id)
    await next()
  }
  else{
     c.status(403)
     return c.json({error:"unauthorized"});
  }
})

BlogRouter.post('/',async(c)=>{
    const body = await c.req.json()
    const {success} = createBlogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
            message:"Inputs not correct"
        })
    }
    const authorId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
        data:{
            title:body.title,
            content:body.content,
            published:body.published,
            authorId
        }
    })

  return c.json({
     blog
  })
})


BlogRouter.put('/',async(c)=>{
    const body = await c.req.json()
     const {success} = updateBlogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
            message:"Inputs not correct"
        })
    }
    const prisma = new PrismaClient({
       datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog = await prisma.blog.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
    })
    
    return c.json({
       id:blog.id
    })
})

BlogRouter.get('/bulk',async(c)=>{
   const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL
   }).$extends(withAccelerate())

   const blogs = await prisma.blog.findMany({
    select:{
        content:true,
        title:true,
        id:true,
        author:{
            select:{
                name:true
            }
        }
    }
   })

   return c.json({
     blogs     
   })

})

BlogRouter.get('/:id',async(c)=>{
    const id = c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const blog = await prisma.blog.findFirst({
            where:{
                id
            }
        })

        return c.json({
            blog
        })
    } catch(err){
        c.status(411)
        return c.json({message:"Error!"})
    }
})
