import { Types } from 'mongoose'


export interface IService  {
    uuid?:string | null;
    name: string;
    fee?:number | null;
    createdAt?: Date;
    updatedAt?: Date | null;
  


}