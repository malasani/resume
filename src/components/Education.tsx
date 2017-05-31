import * as React from 'react';

interface edu {
    name: string;
    college: string;
    time: string;
};

interface eduProps {
    education: edu[];
    certifications: string[]
};

export class Education extends React.Component<eduProps, undefined> {


    public render(): JSX.Element {

        const eduNode = this.props.education.map((ed) => {
            var style = {
                "flex-direction": "column"
            }
            var styled = {
                "display": "inline-flex"
            }
            var spans = {
                "line-height": "1.5em",
                "width": "30px"

            }
            return (
                <div className="totals" style={style}>
                    <div className="f20" style={styled}><i className="fa fa-certificate" style={spans}></i> {ed.name}</div>
                    <div className="f16" style={styled}><i className="fa fa-building" style={spans}></i> {ed.college}</div>
                    <div className="f14" style={styled}><i className="fa fa-clock-o" style={spans}></i> {ed.time}</div>
                </div>);
        });

        const certNode = this.props.certifications.map((ed) => {
            return (<li>{ed}</li>);
        });

        return (<div className="card">
            ##Education

            {eduNode}

            <div>##Certifications</div>

            <div className="totals">
                <ul>{certNode}</ul>
            </div>
        </div>
        )

    }
}
