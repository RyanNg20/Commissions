import { Inria_Sans, Inter  } from "next/font/google";

export const inria = Inria_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})