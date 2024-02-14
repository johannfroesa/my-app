import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { promises as fs } from 'fs';


export default async function DashboardPage(){
    const file = await fs.readFile(process.cwd() + '/app/randomdata/randomdatatest.json', 'utf8');
    const data = JSON.parse(file);
    console.log(data);

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


