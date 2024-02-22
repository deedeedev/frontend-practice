import { z } from "zod"

const BACSPFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email("Please provide a valid email"),
})

export type BACSPFormState = {
  errors?: {
    email?: string[]
  }
  message?: string | null
}

export async function bacspHandleForm(
  prevState: BACSPFormState,
  formData: FormData,
) {
  const validatedFields = BACSPFormSchema.safeParse({
    email: formData.get("email"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "There are some errors.",
    }
  }

  return {
    errors: { email: [] },
    message: null,
  }
}

const ICWSFFormSchema = z.object({
  firstName: z.string().min(1, { message: "First Name cannot be empty" }),
  lastName: z.string().min(1, { message: "Last Name cannot be empty" }),
  email: z
    .string()
    .min(1, { message: "Email cannot be empty" })
    .email("Looks like this is not an email"),
  password: z.string().min(1, { message: "Password cannot be empty" }),
})

export type ICWSFFormState =
  | {
      errors?: {
        firstName?: string[]
        lastName?: string[]
        email?: string[]
        password?: string[]
      }
      success?: boolean
      message?: string | null
    }
  | undefined

export async function icwsfHandleForm(
  prevState: ICWSFFormState,
  formData: FormData,
) {
  const validateFields = ICWSFFormSchema.safeParse({
    firstName: formData.get("firstname"),
    lastName: formData.get("lastname"),
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      success: false,
      message: "There are some errors.",
    }
  }

  return {
    success: true,
  }
}
