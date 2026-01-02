import mongoose, { mongo } from "mongoose";
import bcyrpt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    email: {
        type:String, unique: true
    },
    password: {
        type: String, 
        required: true
    },
    role: {
        type: String, 
        enum: ['teacher', 'student']
    }
})

UserSchema.pre('save', async function (next) {
    const saltRounds = 10;
    if(!this.isModified('password')){
        return next();
    }
    
    try {const hashedPassword = await bcyrpt.hash(
        this.password,
        saltRounds
    );

    this.password = hashedPassword;
    next();
    } 
    catch(error){
        next();
    }
})

const ClassSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,  
    classname: String,
    teacherId: {
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    },
    studentId: [{
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    }]
})

const AttendenceSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    classId: mongoose.Types.ObjectId,
    studentId: {
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    },
    status: {
        type: String,
        enum: ['present', 'absent']
    }
})

export const UserModel  = mongoose.model('Users', UserSchema);
export const ClassModel = mongoose.model('Classes', ClassSchema);
export const AttendenceModel = mongoose.model('Attendance', AttendenceSchema);