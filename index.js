import  express from 'express'
import dotenv from 'dotenv'
import router from './router/endpoints.router.js'

dotenv.config()

const port = process.env.PORT
const app = express()
app.use(express.json())

app.use('/API', router)

app.listen(port,()=>{
    console.log(`Listening the port ${port}`);
})