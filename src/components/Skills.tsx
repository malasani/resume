import * as React from 'react';
import { Pie, PieProps } from './Pie';

export interface Skill {
    name: string;
    value: number;
}
export interface SkillGroup {
    type: string;
    skills: Array<Skill>;
}


export const Skills = (props: { skills: SkillGroup[], Others: string[] }) => {

    const getRandomInt = (min: number, max: number) => {
        let xyz: number = Math.floor(Math.random() * (max - min)) + min;
        console.log(xyz, min, max);
        return xyz;
    }
    let colorsList: string[] = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];
    let Pieprops: PieProps = {
        data: [5, 90],
        radius: 30,
        hole: 27,
        colors: ["#E5E5E5", colorsList[getRandomInt(0, 5)]],
        strokeWidth: 1,
        labels: false,
        percent: false,
        stroke: "#fff"
    };

    const otherNode = props.Others.map((other) => {
        return (
            <span>{other};</span>
        );
    });
    const skillnode = props.skills.map((skill) => {

        const node = skill.skills.map((s) => {
            Pieprops.data = [100 - s.value, s.value];
            Pieprops.colors = ["#E5E5E5", colorsList[getRandomInt(1, 5)]];
            return (<div className="width25">
                <Pie {...Pieprops} />
                <span className="lang">{s.name}</span>
                </div>);
        });
        console.log(node);
        return (<div className="totals">
            <div className="width25"><span>{skill.type}</span></div>
            {node}
        </div>
        );
    });

    return (<div className="card">
       <div>##Skills</div>
        {skillnode}
        <div className="totals">
            <div className="width25"><span>Others</span></div>
            <div className="width75">
            {otherNode}</div>

        </div>
    </div>
    )
};