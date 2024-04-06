import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { UserRouter as userRoutes } from './routes/user'
import {BlogRouter as blogRoutes} from './routes/blog'

type EnvironmentVariables = {
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
};

const app = new Hono<EnvironmentVariables>();

app.route('/api/v1/user',userRoutes)
app.route('/api/v1/blog',blogRoutes)


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
