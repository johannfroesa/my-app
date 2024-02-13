"use client";
import React from "react";
import { LineChart, Line, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import css from "styled-jsx/css";


const data = [
    {
      "_id": "65cbad1ec3eda3c84e0688ce",
      "index": 0,
      "guid": "16cb53ea-f2db-4aff-8c45-ac1ab479cc13",
      "isActive": true,
      "balance": "$2,591.38",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "eyeColor": "brown",
      "name": "Shirley Vance",
      "gender": "female",
      "company": "KENEGY",
      "email": "shirleyvance@kenegy.com",
      "phone": "+1 (810) 555-2814",
      "address": "866 Bowne Street, Blandburg, California, 7446",
      "about": "Sunt quis anim commodo officia culpa ipsum ut est excepteur labore reprehenderit ullamco sint duis. Nisi et ad adipisicing eu magna ullamco deserunt fugiat. Proident elit in ipsum commodo ut quis sit elit dolor.\r\n",
      "registered": "2015-06-23T07:25:11 -02:00",
      "latitude": 4.776539,
      "longitude": -155.078645,
      "tags": [
        "enim",
        "dolor",
        "laboris",
        "aliqua",
        "in",
        "occaecat",
        "quis"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Fry Reilly"
        },
        {
          "id": 1,
          "name": "Rene Pickett"
        },
        {
          "id": 2,
          "name": "Gale Orr"
        }
      ],
      "greeting": "Hello, Shirley Vance! You have 3 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "65cbad1eb790f9c387b292ad",
      "index": 1,
      "guid": "0ac0c63f-e040-4424-bcf8-c341db8df31c",
      "isActive": false,
      "balance": "$1,288.54",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "brown",
      "name": "Brown Hudson",
      "gender": "male",
      "company": "MANTRIX",
      "email": "brownhudson@mantrix.com",
      "phone": "+1 (948) 558-3895",
      "address": "726 Cypress Court, Sylvanite, North Carolina, 539",
      "about": "Id quis occaecat fugiat eu velit excepteur qui dolore Lorem. Fugiat aliqua ad anim consectetur Lorem consequat dolor. Velit sunt non aliquip ipsum proident commodo qui non laborum ex nulla. Laborum sit consectetur enim ullamco. Irure est qui deserunt veniam nostrud quis officia eiusmod.\r\n",
      "registered": "2023-02-06T04:11:44 -01:00",
      "latitude": 83.274723,
      "longitude": 164.564505,
      "tags": [
        "voluptate",
        "incididunt",
        "duis",
        "nisi",
        "magna",
        "eiusmod",
        "nulla"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Kemp Barber"
        },
        {
          "id": 1,
          "name": "Foster Gray"
        },
        {
          "id": 2,
          "name": "Strickland Buck"
        }
      ],
      "greeting": "Hello, Brown Hudson! You have 5 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "65cbad1e80ee4f768cf7bee8",
      "index": 2,
      "guid": "1c090e7e-db55-4589-b094-f024daa4de4a",
      "isActive": true,
      "balance": "$2,289.93",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "eyeColor": "blue",
      "name": "Moss Ortiz",
      "gender": "male",
      "company": "OCTOCORE",
      "email": "mossortiz@octocore.com",
      "phone": "+1 (902) 429-2294",
      "address": "373 Story Street, Movico, Nevada, 4490",
      "about": "Eiusmod cillum aute fugiat cupidatat. Laboris reprehenderit commodo consequat nisi. Voluptate mollit qui officia ullamco laboris.\r\n",
      "registered": "2018-10-03T07:09:51 -02:00",
      "latitude": -70.380544,
      "longitude": 166.038934,
      "tags": [
        "consectetur",
        "laborum",
        "eu",
        "qui",
        "consectetur",
        "cillum",
        "reprehenderit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Hilda Carson"
        },
        {
          "id": 1,
          "name": "Effie Herrera"
        },
        {
          "id": 2,
          "name": "Mccoy Mendez"
        }
      ],
      "greeting": "Hello, Moss Ortiz! You have 8 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "65cbad1edf651667e8b5bd8c",
      "index": 3,
      "guid": "aa24c0c6-9987-4433-a593-c6912ab068d3",
      "isActive": true,
      "balance": "$3,201.73",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "brown",
      "name": "Sanders Faulkner",
      "gender": "male",
      "company": "ZIORE",
      "email": "sandersfaulkner@ziore.com",
      "phone": "+1 (819) 468-3198",
      "address": "779 Colin Place, Carrizo, Mississippi, 7961",
      "about": "Sunt sit labore irure tempor pariatur. Commodo consectetur ullamco non duis aliqua dolore duis enim dolore ea occaecat pariatur. Minim enim sit labore laboris id duis exercitation non do. Eu eu et duis ipsum proident nostrud in proident consequat excepteur. Velit ut laboris anim consectetur mollit. Magna laborum mollit occaecat aute nostrud fugiat aute laborum.\r\n",
      "registered": "2022-10-24T12:29:39 -02:00",
      "latitude": -26.674996,
      "longitude": 96.669871,
      "tags": [
        "commodo",
        "elit",
        "deserunt",
        "nulla",
        "voluptate",
        "Lorem",
        "culpa"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Welch Nunez"
        },
        {
          "id": 1,
          "name": "Marietta Gonzales"
        },
        {
          "id": 2,
          "name": "Jacobson Romero"
        }
      ],
      "greeting": "Hello, Sanders Faulkner! You have 6 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "65cbad1e9e1fac6b110910e4",
      "index": 4,
      "guid": "3ee80b6b-6488-4a81-829b-24c53dfc16a8",
      "isActive": false,
      "balance": "$3,442.75",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "blue",
      "name": "Lila Robinson",
      "gender": "female",
      "company": "KEEG",
      "email": "lilarobinson@keeg.com",
      "phone": "+1 (869) 450-2335",
      "address": "257 Clara Street, Gardners, Connecticut, 7822",
      "about": "Quis est ex nisi sint id tempor ea anim anim incididunt sint adipisicing. Tempor aliquip eu aliquip nisi dolore anim et exercitation nulla culpa. Consequat enim consequat laborum cupidatat elit ad velit Lorem Lorem. Fugiat nulla id consequat pariatur ex velit qui et veniam consectetur fugiat nulla. Proident aliquip excepteur sunt qui fugiat eu laborum est incididunt et mollit in laboris.\r\n",
      "registered": "2023-09-09T02:48:20 -02:00",
      "latitude": 8.479384,
      "longitude": -43.569242,
      "tags": [
        "est",
        "voluptate",
        "exercitation",
        "voluptate",
        "do",
        "est",
        "ad"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Jana Curtis"
        },
        {
          "id": 1,
          "name": "Carver Shepherd"
        },
        {
          "id": 2,
          "name": "Karyn Melendez"
        }
      ],
      "greeting": "Hello, Lila Robinson! You have 6 unread messages.",
      "favoriteFruit": "banana"
    }
  ]; 

export default function LinesChart() {
    return (
        <ResponsiveContainer width={"100%"} height={300}>
            <LineChart
            width={500} 
            height={300}
            data={data}
            >
                <XAxis dataKey="name" stroke="#fff"/>
                <YAxis stroke="#fff"/>
                <Line type="monotone" dataKey="age" stroke="#fff" />
            </LineChart>
        </ResponsiveContainer>
    )
}