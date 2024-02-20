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
