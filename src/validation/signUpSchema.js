import * as zod from "zod";
import { regex } from "./regex";
import getAge from "../util/getAge";

export const signUpSchema = zod.object({
  name: zod.string().nonempty("Name is required").min(2,'The name should be at least 2 character').max(50,'The name should be at most 50 character'),
  email: zod.string().nonempty("Email is required").regex(regex.email,'Email is invaild'),
  password: zod.string().nonempty("Password is required").regex(regex.password,'contain one uppercase, lowercase letter, number, special character, at least 8 chars'),
  rePassword: zod.string().nonempty("Confirm password is required"),
  dateOfBirth: zod.string().nonempty("Birth Date is required").refine((data) => getAge(data) >= 18 ,"age must be at least 18 years"),
  gender: zod.string().nonempty("Gender is required").regex(regex.gender,'Please Select your gender'),
}).refine((data)=>data.password === data.rePassword,{message:'confirm password and password must be the same', path:['rePassword']});
