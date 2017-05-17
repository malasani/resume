import * as React from 'react';
import * as link from './link';

export interface User {
    Name: string;
    ImageUrl: string;
    GitLogin: string;
    Info: string;
    GitLoginUrl: string;
    socialLinks: link.iLink[]
}
export const Card = (props: User) => {


    const LinkNode = props.socialLinks.map((item) => {
        return (<link.Link {...item} key={item.title+props.socialLinks.indexOf(item)} />)
    });

    return (
        <div className="card">
            <div className="header">

                <a className="userlink" href={props.GitLoginUrl}>{props.GitLogin}<i className="fa fa-link"></i></a>
                <div className="avatar">
                    <img src={props.ImageUrl} />
                </div>
                <div className="userinfo">
                    <h2>{props.Name}</h2>
                    <p>{props.Info}</p>
                </div>
            </div>
            <div className="totals">
                <div>
                    {LinkNode}
                </div>
            </div>
            <br /><br />
        </div>

    );


};
