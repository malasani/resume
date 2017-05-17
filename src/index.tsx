import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as hello from './components/hello';
import { Card, User } from './components/card';

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

ReactDOM.render(
    <Card {...UserCard} />
    , document.getElementById('app'));