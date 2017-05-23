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
        return (<span>ComponentName</span>);
    }
}
