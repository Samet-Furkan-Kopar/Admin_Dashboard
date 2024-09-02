import Menu from "@/components/Menu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="h-screen flex">
        <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200">
            <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 p-4">
                <Image src="/icons/logo.png" alt="logo" width={32} height={32}/>
                <span className="hidden lg:block">Admin Dashboard</span>
            </Link>
            <Menu />
        </div>
        <div className="w-[84%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">right</div>
    </div>;
}
