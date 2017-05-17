import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as hello from './components/hello';
import { Card, User } from './components/card';
import { Pie } from './components/Pie';

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


ReactDOM.render(
    <Pie {...PieData} />
    , document.getElementById('app'));