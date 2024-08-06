import {z} from 'zod'
export const usernameValidation=z
.string()
.min(2,'UserName Must be 2 Characters')
.max(20,'UserName Must be No more then 20 Characters')
.regex(/^[a-zA-Z0-9]+$/,"Username must not contain special character")

export const signUpSchema=z.object({
username:usernameValidation,
email:z.string().email({message:"Invalid Email Address"}),
password:z.string().min(6,{message:"password must be at least 6 characters"})
})