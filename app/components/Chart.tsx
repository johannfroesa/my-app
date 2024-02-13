"use client";
import React from "react";
import { Bar, BarChart as BarGraph, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type Props = {};
const data = [
        {
          "_id": "65cba0236c20ce8183d92eda",
          "index": 0,
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "eyeColor": "brown",
          "name": "Guerrero Weber",
          "tags": [
            "do",
            "voluptate",
            "amet",
            "ipsum",
            "aliqua",
            "eiusmod",
            "exercitation"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Pacheco Durham"
            },
            {
              "id": 1,
              "name": "Mcbride Barrett"
            },
            {
              "id": 2,
              "name": "Hollie Singleton"
            }
          ],
          "greeting": "Hello, Guerrero Weber! You have 3 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "65cba0239b7c98613bd75595",
          "index": 1,
          "picture": "http://placehold.it/32x32",
          "age": 40,
          "eyeColor": "green",
          "name": "Mai Gross",
          "tags": [
            "aliqua",
            "consectetur",
            "velit",
            "enim",
            "quis",
            "ad",
            "cillum"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Natasha Matthews"
            },
            {
              "id": 1,
              "name": "Farley Burt"
            },
            {
              "id": 2,
              "name": "Nikki Gilliam"
            }
          ],
          "greeting": "Hello, Mai Gross! You have 5 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "65cba023afc114c7157a2386",
          "index": 2,
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "green",
          "name": "Pope Valdez",
          "tags": [
            "ad",
            "consectetur",
            "ut",
            "anim",
            "nisi",
            "culpa",
            "culpa"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Hughes Gilmore"
            },
            {
              "id": 1,
              "name": "Vang Hodge"
            },
            {
              "id": 2,
              "name": "Marla Mitchell"
            }
          ],
          "greeting": "Hello, Pope Valdez! You have 8 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "65cba023f67b93b32f75929e",
          "index": 3,
          "picture": "http://placehold.it/32x32",
          "age": 38,
          "eyeColor": "blue",
          "name": "Maricela York",
          "tags": [
            "ea",
            "duis",
            "aute",
            "nostrud",
            "velit",
            "quis",
            "proident"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Rosella Daniels"
            },
            {
              "id": 1,
              "name": "Best Ryan"
            },
            {
              "id": 2,
              "name": "Madelyn Figueroa"
            }
          ],
          "greeting": "Hello, Maricela York! You have 5 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "65cba023b09592a356f122e2",
          "index": 4,
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "eyeColor": "brown",
          "name": "Carlson Serrano",
          "tags": [
            "laborum",
            "elit",
            "aliqua",
            "consequat",
            "elit",
            "nulla",
            "consequat"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Ann Long"
            },
            {
              "id": 1,
              "name": "Donovan Solis"
            },
            {
              "id": 2,
              "name": "Duran Walker"
            }
          ],
          "greeting": "Hello, Carlson Serrano! You have 3 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "65cba0237b99cd10282d78a3",
          "index": 5,
          "picture": "http://placehold.it/32x32",
          "age": 26,
          "eyeColor": "blue",
          "name": "Phelps Norton",
          "tags": [
            "incididunt",
            "duis",
            "consequat",
            "ad",
            "ullamco",
            "officia",
            "sint"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Josephine Patrick"
            },
            {
              "id": 1,
              "name": "Alisa Hays"
            },
            {
              "id": 2,
              "name": "Christian Mccullough"
            }
          ],
          "greeting": "Hello, Phelps Norton! You have 10 unread messages.",
          "favoriteFruit": "banana"
        }
];

export default function BarChart( {}: Props) {
    return (
        <ResponsiveContainer width={"100%"} height={400}>
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
                <Bar dataKey="age" radius={[4,4,0,0]} fill="#fff" />
            </BarGraph>
        </ResponsiveContainer>
    )
}