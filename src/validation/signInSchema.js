import * as zod from "zod";
import { regex } from "./regex";

export const signInSchema = zod.object({
  email: zod.string().nonempty("Email is required").regex(regex.email,'Email is invaild'),
  password: zod.string().nonempty("Password is required").regex(regex.password,'contain one uppercase, lowercase letter, number, special character, at least 8 chars'),
});