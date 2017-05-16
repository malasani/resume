/*import * as React from 'react';
import { iLink } from './Link';

export const NavItem = (props: iLink) => (
    <div className="item drop_in">
        <i className={props.faclass}></i>
        <span>{props.title}</span>
    </div>

);

export const NavList = (props: iLink[]) => {

    var navnode = props.map((item) => {
        return (<NavItem {...item} key={item.title + props.indexOf(item)} />)
    });

    return (<div className="menu menu-left" >
        {navnode}
    </div>);
};*/