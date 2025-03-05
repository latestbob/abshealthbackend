import {model, Document, Schema} from 'mongoose';


interface IService  extends Document {
    uuid?:string | null;
    name: string;
    fee?:number | null;
    createdAt?: Date;
    updatedAt?: Date | null;
  


}


const ServiceSchema = new Schema<IService>({
    
   uuid : {
        type : String,
        required : false,
        default : null,
   },
   name : {
        type : String,
        required : true,
    },

    

    fee : {
        type : Number,
        required : false,
        default: null,
    },

  
    createdAt : {
        type : Date,
        default : Date.now,
    },

    updatedAt : {
        type : Date,
        default :null,
    }



});


const serviceModel = model<IService>('Service',ServiceSchema);
export default serviceModel;
