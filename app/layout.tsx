import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/Navbar";
import prisma from "./lib/db";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { unstable_noStore as noStore } from "next/cache";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Analyze your Audience",
  description: "Use statistical evidence to make decisions about your content",
};

async function getData(userId: string){
  if(userId){
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      colorScheme: true,
    },
  });
return data;
}
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  noStore();
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  const data = await getData(user?.id as string)
  return (
    <html lang="en">
      <body className={`${inter.className} ${data?.colorScheme ?? "theme-base"}`}>  
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
          </ThemeProvider>
          </body>
    </html>
  );
}
