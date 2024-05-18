import {GeistSans} from "geist/font/sans";
import "./globals.css"
import {Analytics} from "@/components/analytics"
import Navbar, {MainNav} from "@/components/main-nav";
import React from "react";

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="en" className={`${GeistSans.className} dark`}>
        <body className={
            "min-h-screen bg-background antialiased text-foreground"}
        >
        <div className="mx-auto py-10 px-4">
            <header
                className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center">
                    <MainNav/>
                </div>
            </header>
            <main>{children}</main>
        </div>
        <Analytics/>
        </body>
        </html>
    )
}