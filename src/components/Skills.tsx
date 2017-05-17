import * as React from 'react';
import { Pie, PieProps } from './Pie';

export interface SkillsProps {
    name: string;
    value: number;
}

export const Skills = (props: { skills: SkillsProps[] }) => {
    let Pieprops: PieProps = {
        data: [5, 90],
        radius: 30,
        hole: 27,
        colors: ["#E5E5E5", "#7B43A1"],
        strokeWidth: 0.1,
        labels: false,
        percent: false,
        stroke: "#fff"
    };
    const skillnode = props.skills.map((skill) => {
        Pieprops.data = [100 - skill.value, skill.value];
        return (<div><Pie {...Pieprops} /> </div>);
    });

    return (<div className="card">
        {skillnode}
    </div>
    )
};