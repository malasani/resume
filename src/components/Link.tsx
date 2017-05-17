import * as React from 'react';

export interface iLink {
    URL: string;
    title: string;
    faclass: string;
}

export const Link = (props: iLink) => {

    return (<a href={props.URL} title={props.title} target="_blank"><i className={props.faclass}></i></a>
    );
}