import React from 'react'
import skillsData from '../data/skills.json';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
    return (
        <div className="skills-container w-20 text-center ml-2 mb-2">
            <div className="flex flex-col flex-wrap gap-2">
            <h2 className="text-xl font-bold m-2 ">Skills</h2>
                {skillsData.map((skill) => (
                    <div key={skill.id} className="bg-gray-200 flex items-center gap-3 justify-between dark:bg-gray-800 p-2 rounded-lg">
                        <h3 className="text-base font-semibold mb-1">{skill.name}</h3>
                        <div className="flex items-center justify-center w-16">
                            <CircularProgressbar
                                value={skill.level}
                                text={`${skill.level}`}
                                styles={{
                                    path: { stroke: '#4F46E5' },
                                    text: { fill: '#4F46E5', fontSize: '12px' },
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
