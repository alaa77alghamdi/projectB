import express, {Router} from 'express'
import PrismaClient from '@prisma/client'
import { deleteAll, sendForm } from '../controller/form2'
import { deleteAll1, sendForm1 } from '../controller/form1'
import { contactUs } from '../controller/contactus'


const router = express.Router()

router.post("/sendForm", sendForm)
router.delete("/deleteAll", deleteAll)

router.post("/sendForm1", sendForm1)
router.delete("/deleteAll1", deleteAll1)

router.post("/contactUs", contactUs)
router.delete("/deleteAll", deleteAll)



export default router