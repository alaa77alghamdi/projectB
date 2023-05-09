import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import router from './routes/router'

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

app.use(router)

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server's running on: ${port}`);    
})


