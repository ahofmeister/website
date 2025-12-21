import { GeistSans } from "geist/font/sans";
import "./globals.css";
import type React from "react";
import { Analytics } from "@/components/analytics";
import { MainNav } from "@/components/main-nav";

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={`${GeistSans.className} dark`}>
			<body
				className={"min-h-screen bg-background antialiased text-foreground"}
			>
				<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
					<div className="container flex h-14 max-w-(--breakpoint-2xl) items-center">
						<MainNav />
					</div>
				</header>
				<main className={"py-10"}>{children}</main>
				<Analytics />
			</body>
		</html>
	);
}
