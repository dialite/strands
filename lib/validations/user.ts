import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "MINIMUM 3 CHARACTERS" })
    .max(30, { message: "MAXIMUM 30 CHARACTERS" }),
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
});
