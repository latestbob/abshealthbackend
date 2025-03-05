import { Response, Request  } from 'express';
import { Types } from 'mongoose';
import { UserInterface } from '../interfaces/userInterface';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

import userModel from '../models/userModels';

import nodemailer from "nodemailer";
import { IService } from '../interfaces/serviceInterface';
import serviceModel from '../models/servicesModel';



// update profile


export async function createService(req:Request<{},{}, IService>, res:Response){


    

    const {name, fee} = req.body;


    try {

        const existed = await serviceModel.findOne({name});

        if(existed){
            return res.status(400).json({message:"service already exists"});
        }


        const uuid: string = Math.random()
        .toString(16)
        .substring(2, 10)
        .toUpperCase();

        const newService = new serviceModel({
           name,
           uuid
        });
    
        await newService.save();
       


        return res.status(200).json({
            status :"success",
            message:"service added successfully"
        });

        
    } catch (error:any) {
        console.error(error);
    }

}

