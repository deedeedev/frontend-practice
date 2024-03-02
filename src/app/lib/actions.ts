import { z } from "zod"
import { Temporal } from "@js-temporal/polyfill"

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
  const validatedFields = ICWSFFormSchema.safeParse({
    firstName: formData.get("firstname"),
    lastName: formData.get("lastname"),
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "There are some errors.",
    }
  }

  return {
    success: true,
  }
}

const PSCCSPFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email("Please provide a valid email"),
})

export type PSCCSPFormState = {
  errors?: {
    email?: string[]
  }
  success?: boolean
  message?: string | null
} | null

export async function psccspHandleForm(
  prevState: PSCCSPFormState,
  formData: FormData,
) {
  const validatedFields = PSCCSPFormSchema.safeParse({
    email: formData.get("email"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "There are some errors",
    }
  }

  return {
    success: true,
  }
}

const currentYear = Temporal.Now.plainDateISO().year
const ACAFormSchema = z.object({
  day: z
    .string()
    .min(1, "This field is required")
    .transform((v) => parseInt(v))
    .refine((v) => !isNaN(v), "Day must be a number")
    .refine((v) => v >= 1, "Day must be greater than 0")
    .refine((v) => v <= 31, "Day must be between 1 and 31"),
  month: z
    .string()
    .min(1, "This field is required")
    .transform((v) => parseInt(v))
    .refine((v) => !isNaN(v), "Month must be a number")
    .refine((v) => v >= 1, "Month must be greater than 0")
    .refine((v) => v <= 12, "Month must be between 1 and 12"),
  year: z
    .string()
    .min(1, "This field is required")
    .transform((v) => parseInt(v))
    .refine((v) => !isNaN(v), "Year must be a number")
    .refine((v) => v >= 1900, "Year must be greater than 1900")
    .refine(
      (v) => v <= currentYear,
      `Year must be between 1900 and ${currentYear}`,
    ),
})

export type ACAFormState = {
  errors?: {
    day?: string[]
    month?: string[]
    year?: string[]
  }
  success?: boolean
  result?: {
    years: number
    months: number
    days: number
  }
  message?: string | null
} | null

export async function acaHandleForm(
  prevState: ACAFormState,
  formData: FormData,
) {
  const validatedFields = ACAFormSchema.safeParse({
    day: formData.get("day"),
    month: formData.get("month"),
    year: formData.get("year"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "There are some errors",
    }
  }

  const now = Temporal.Now.plainDateISO()
  let birthDate: Temporal.PlainDate

  try {
    birthDate = Temporal.PlainDate.from(
      {
        day: Number(formData.get("day")),
        month: Number(formData.get("month")),
        year: Number(formData.get("year")),
      },
      {
        overflow: "reject",
      },
    )
  } catch (error) {
    return {
      success: false,
      message: "Please insert a valid date",
    }
  }

  if (Temporal.PlainDate.compare(birthDate, now) >= 0) {
    return {
      success: false,
      message: "Input date must be in the past",
    }
  }

  const duration = birthDate.until(now)
  const { years, months, days } = duration.round({
    largestUnit: "year",
    relativeTo: now,
  })

  return {
    success: true,
    result: { years, months, days },
  }
}

const NSWSMFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field is required" })
    .email("Valid email required"),
})

export type NSWSMFormState = {
  errors?: {
    email?: string[]
  }
  success?: boolean
  message?: string
} | null

export async function nswsmHandleForm(
  prevState: NSWSMFormState,
  formData: FormData,
) {
  const validatedFields = NSWSMFormSchema.safeParse({
    email: formData.get("email"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "There are some errors",
    }
  }

  return {
    success: true,
  }
}
