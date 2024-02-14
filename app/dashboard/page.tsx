import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "../lib/db";


export default async function Dashboard(){
    const data = await prisma.ad.findMany();
    return(
    <div className="grid items-start gap-8">
            <h1 className="text-2xl md:text-2xl">Dashboard</h1>
                <div className="grid gauto-cols-auto gap-4">
                    <div>
                    <Card>
                    <CardHeader>
                                <CardTitle className="text-2xl md:text-xl"> Insights</CardTitle>
                                <CardDescription>Top Data.</CardDescription>
                            </CardHeader>
                            <CardContent>
                            <BarChart data={data}/>
                            </CardContent>
                    </Card>
                    </div>
                    <div>
                    <Card>
                    <CardHeader>
                                <CardTitle className="text-2xl md:text-xl"> Insights</CardTitle>
                                <CardDescription>Top Data.</CardDescription>
                            </CardHeader>
                            <CardContent>
                            <LineChart data={data}/>
                            </CardContent>
                    </Card>
                    </div>
             </div>
         </div>
    )
}