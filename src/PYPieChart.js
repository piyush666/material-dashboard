import React from 'react';
import {
    ResponsiveContainer, PieChart, Pie, Cell,
} from 'recharts';

const data = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PYPieChart = ({ inRadius, outRadius, colorFill }) => {
    return (
        <div style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey="value" data={data} innerRadius={inRadius} outerRadius={outRadius} fill={colorFill} label>
                        {
                            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PYPieChart;
