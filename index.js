import  express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT
const app = express()
app.use(express.json())
const router = ()=>{
    console.log('conectado corectamente');
}

app.use('/API', router)

app.listen(port,()=>{
    console.log(`Listening the port ${port}`);
})