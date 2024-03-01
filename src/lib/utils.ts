import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function leftPad(str: string, length: number, padChar: string) {
  if (str.length >= length) {
    return str
  }
  var paddingLength = length - str.length
  var padding = Array(paddingLength + 1).join(padChar)
  return padding + str
}
