import express from 'express';
import cors from 'cors';
import { SignupSchema } from './types';
import { UserModel } from './models';
import { LoginSchema } from './types';
import bcrypt from 'bcrypt';


const app = express();
app.use(express.json());
app.use(cors());

app.post('/auth/signup', async (req, res) => {
    const {success, data} = SignupSchema.safeParse(req.body);

    if(!success){
        res.status(400).json({
            "success": false,
            "error": "Invalid request schema",
        })
        return;
    }else{
        res.status(201).json({
            "success": true,
            "data": {
                _id: data._id,
                name: data.name,
                email: data.email,
                role: data.role
            }
        })
    }
    try{
        await UserModel.insertOne({email});
        return res.status(201).json({ success: true});
    } catch(err){
        return res.status(409).json({
            success: false,
            error: {
                code: 409,
                message: `${err}`
            }
        })
    }
})
    app.post('/auth/login', async (res, req) => {
        const {data} = LoginSchemaSchema.safeParse(req.body);

            const {emaiil, password} = data;
            const emailExistence = await UserModel.findOne({email});
            const verifyPassword = await bcrypt.compare(
                password,
                UserModel.password
            )

            if(!emailExistence && !verifyPassword){
                return res.status(400).json({
                    "success": false,
                    "error": "Invalid email or password"
                })
            }else{
                return res.status(200).json({
                    "success": true,
                    "data": {
                        "token": "JWT_TOKEN_HERE"
                    }
                })
            }
    })