"use client";
import { CreditCard, HomeIcon, Settings } from "lucide-react"
import Home from "../page";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { navItems } from "./UserNav";
import prisma from "../lib/db";
import { unstable_noStore as noStore } from "next/cache";


async function getData({
    email, 
    id, 
    firstName, 
    lastName, 
    profileImage,
}: { 
    email: string;
    id: string;
    firstName: string | undefined | null;
    lastName: string | undefined | null;
    profileImage: string | undefined | null;
}) {
    noStore();
    const user = await prisma.user.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            stripeCustomerId: true,
        }
    })
}

export function DashboardNav (){
    const pathname = usePathname();
    return(
        <nav className="grid items-start gap-2">
            {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
                <span className={cn("group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground" , pathname === item.href ? 
                'bg-accent' : 'bg-transparent'
                )}
                >
                    <item.icon className="mr-2 h-4 w-4"/>
                    <span>{item.name}</span>
                </span>
            </Link>
         ))}
        </nav>
    )
}