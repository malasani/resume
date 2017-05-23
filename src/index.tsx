import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as hello from './components/hello';
import { Card, User } from './components/card';
import { Pie } from './components/Pie';
import { Skills } from './components/Skills';


let UserCard = {
    Name: "Bapaiah Malasani",
    ImageUrl: "/images/img.jpg",
    GitLogin: "malasani",
    Info: ".NET & Sql Server Devleoper",
    GitLoginUrl: "https://github.com/malasani",
    socialLinks: [{
        URL: "#",
        title: "FaceBook",
        faclass: "fa fa-facebook"
    },
    {
        URL: "#",
        title: "FaceBook",
        faclass: "fa fa-facebook"
    }, {
        URL: "#",
        title: "FaceBook",
        faclass: "fa fa-facebook"
    },
    {
        URL: "#",
        title: "FaceBook",
        faclass: "fa fa-facebook"
    }]
};

var menuArray = [{
    URL: "#",
    title: "FaceBook",
    faclass: "fa fa-facebook"
},
{
    URL: "#",
    title: "FaceBook",
    faclass: "fa fa-facebook"
}, {
    URL: "#",
    title: "FaceBook",
    faclass: "fa fa-facebook"
},
{
    URL: "#",
    title: "FaceBook",
    faclass: "fa fa-facebook"
}];

let PieData = {
    data: [5, 90],
    radius: 80,
    hole: 65,
    colors: ["#E5E5E5", "#7B43A1"],
    strokeWidth: 1,
    labels: false,
    percent: false,
    stroke: "#fff"
}


let skills = {
    skills: [
        {
            type: "Languages",
            skills:[
            {
                name: "C#",
                value: 80
            },
            {
                name: "JavaScript",
                value: 70
            },
            {
                name: "TSQL",
                value: 80
            }]
        },
        {
            type: "Framework",
            skills:[
            {
                name: ".NET",
                value: 80
            },
            {
                name: "React",
                value: 70
            },
            {
                name: "AngularJS",
                value: 50
            }]
        }
      ,
        {
            type: "BI",
            skills:[
            {
                name: "SSIS",
                value: 70
            },
            {
                name: "SSRS",
                value: 70
            },
            {
                name: "PowerBI",
                value: 50
            }]
        },
        {
            
            type: "Tools",
            skills:[
            {
                name: "VS 2015",
                value: 70
            },
            {
                name: "SSMS",
                value: 70
            },
            {
                name: "VSTS",
                value: 50
            }]

        }
      
    ],
    Others:["sdf","sdf","sdfsf","dfhfhhf"]
}

ReactDOM.render(
    <Skills  {...skills} />
    , document.getElementById('app'));