"use client";
import React from "react";
import { Bar, BarChart as BarGraph, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ThemeProvider } from "./theme-provider";

export default async function BarChart( { data } : { data: any }) {

    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <BarGraph data={data}>
                <XAxis dataKey="name" 
                tickLine={false}
                axisLine={false}
                stroke="#fff"
                fontSize={12}
                />
                <YAxis 
                  tickLine={false}
                  axisLine={false}
                  stroke="#fff"
                  fontSize={12}/>
                <Bar dataKey="V25" radius={[4,4,0,0]} fill="#fff"/>
            </BarGraph>
        </ResponsiveContainer>
    )
}