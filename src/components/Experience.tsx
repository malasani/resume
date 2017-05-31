import * as React from 'react';

interface exp {
    name: string;
    company: string;
    time: string;
    responsibilities: string[];
    desc: string;
};

interface eduProps {
    expereince: exp[];
};

export class Experience extends React.Component<eduProps, undefined> {


    public render(): JSX.Element {
        const expNode = this.props.expereince.map((ex) => {
            return (<div className="Exp">

                <div className="vertical">{ex.company}</div>
                <div className="Heading">{ex.name}</div>
                <div className="desc">{ex.desc}</div>
                <h6>Carried out the following activities:</h6>
                <ul className="res">
                    {ex.responsibilities.map((res) => {
                        return (<li>{res} </li>)
                    })}
                </ul>
                <div className="time"><i className="fa fa-clock-o"></i> {ex.time}</div>
            </div>)
        })

        return (<div className="card full">
            ##Experience
            {expNode}
        </div>);
    }
}
