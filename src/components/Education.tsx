import * as React from 'react';

interface edu {
    name: string;
    collecge: string;
    time: string;
};

interface eduProps {
    education: edu[];
    certifications: string[]
};

export class Education extends React.Component<eduProps, undefined> {


    public render(): JSX.Element {
        return (<span>ComponentName</span>);
    }
}
