import * as React from 'react';


export interface iLink {
    URL: string;
    title: string;
    faclass: string;
    value: string;
}

export interface User {
    Name: string;
    ImageUrl: string;
    GitLogin: string;
    Info: string;
    GitLoginUrl: string;
    socialLinks: Array<iLink>
}

export class UserCard extends React.Component<User, undefined> {
    public render(): JSX.Element {

    const LinkNode = this.props.socialLinks.map((item) => {
        return (<a href={item.URL} title={item.title}><i className={item.faclass}></i>{item.value}</a>)
    });

    return (
        <div className="card">
            <div className="header">

                <a className="userlink" href={this.props.GitLoginUrl}>{this.props.GitLogin}<i className="fa fa-link"></i></a>
                <div className="avatar">
                    <img src={this.props.ImageUrl} />
                </div>
                <div className="userinfo">
                    <h2>{this.props.Name}</h2>
                    <p>{this.props.Info}</p>
                </div>
            </div>
            <div className="totals">
                <div>
                    {LinkNode}
                </div>
            </div>
            <br /><br />
        </div>);

    }
}

