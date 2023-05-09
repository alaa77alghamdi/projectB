import express, {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

const prisma = new PrismaClient()

export const contactUs = async(req: Request, res: Response)=>{
    try {
        const {name, email, phone, message} = req.body

        const forms = await prisma.contactUs.create({
            data:{
                name: name, 
                email: email, 
                phone: phone, 
                message: message
            },          
        });

        // Send a confirmation email to the user who submitted the form
        const confirmationTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.PWD,
            },
        });

        const confirmationMailOptions = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Form submission confirmation',
            text: `Dear ${name},\n\nThank you for submitting the form:  "${message}". \n\n We have received your submission and will get back to you as soon as possible.\n\nSincerely,\nAlaa.`,
        };

        confirmationTransporter.sendMail(confirmationMailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).send('Failed to send confirmation email');
            } else {
                console.log('Confirmation email sent: ' + info.response);
            }
        });

        // Send an email to the admin containing the form message
        const messageTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.PWD,
            },
        });

        const messageMailOptions = {
            from: "Database",
            to: process.env.EMAIL_FROM,
            subject: `New form submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        };

        messageTransporter.sendMail(messageMailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).send('Failed to send message email');
            } else {
                console.log('Message email sent: ' + info.response);
                res.status(200).send('Form submitted successfully');
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).send('Failed to save form');
    }
}




export const deleteAll = async(req:Request, res: Response)=>{
    const user = await prisma.contactUs.deleteMany({
        
    });
    res.json({Message: "All user deleted"})

}