"use client";
import React from "react";
import { LineChart, Line, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import css from "styled-jsx/css";

export default function LinesChart({ data } : { data: any }) {
    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <LineChart
            width={500} 
            height={300}
            data={data}
            >
                <XAxis dataKey="name" stroke="#fff"/>
                <YAxis stroke="#fff"/>
                <Line type="monotone" dataKey="V95" stroke="#fff" />
                <Line type="monotone" dataKey="V100" stroke="#329838" />
                <Line type="monotone" dataKey="V50" stroke="#999838" />
            </LineChart>
        </ResponsiveContainer>
    )
}