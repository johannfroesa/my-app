import Image from "next/image";
import { ThemeToggle } from "./components/Themetoggle";
import { Heading1 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";


export default async function Home() {

  noStore();
  const { isAuthenticated } = getKindeServerSession ();

  if(await isAuthenticated()) {
    return redirect ("/dashboard");
  }
  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className=" max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                Audience Insights, fast.
                </span>
            </span>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
              Analyze your Audience
            </h1>
            <p className="max-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
              Use Ad Manager Data to find out what second your audience loses interest to optimize your ads, content and communication strategy.
            </p>
          </div>

          <div className="flex justify-center max-w-sm mx-auto mt-10">
            <RegisterLink>
              <Button size="lg" className= "w-full">
                Sign in for free
            </Button>
            </RegisterLink>
          </div>
        </div>
      </div>
    </section>
  )
}