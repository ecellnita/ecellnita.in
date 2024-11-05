import Link from "next/link"
import { Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0F17] py-8 z-50">
      <div className="container flex flex-col items-center gap-6">
        <p className="text-white text-sm">
          Copyright © E-Cell NITA. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="#"
            className="rounded-full bg-[#1E242E] p-2.5 transition-colors hover:bg-[#1E242E]/80"
          >
            <Linkedin className="h-5 w-5 text-white" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="#"
            className="rounded-full bg-[#1E242E] p-2.5 transition-colors hover:bg-[#1E242E]/80"
          >
            <Instagram className="h-5 w-5 text-white" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="#"
            className="rounded-full bg-[#1E242E] p-2.5 transition-colors hover:bg-[#1E242E]/80"
          >
            <Twitter className="h-5 w-5 text-white" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}