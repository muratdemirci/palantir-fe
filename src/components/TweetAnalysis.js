import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

function TweetAnalysis() {

    const [labels, setLabels] = useState([]);
    const [dropdownValue, setDropdownValue] = useState("Hourly");

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Palantir Tweet Analysis',
            },
        },
    };

    const handleChange = () => {
        var select = document.getElementById('period');
        var value = select.options[select.selectedIndex].value;
        setDropdownValue(value);
    }

    useEffect(() => {
        switch (dropdownValue) {
            case 'Daily':
                setLabels(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
                console.log(labels)
                break;
            case 'Hourly':
                const date = new Date();
                const hours = [];

                for (let index = 0; index <= date.getHours(); index++) {
                    hours.push((date.getHours() - index) + ".00");
                }
                //midnight
                for (let index = 0; index < date.getHours() - 1; index++) {
                    hours.push((23 - index) + ".00");
                }
                setLabels(hours.reverse())
                break;
            case 'Monthly':
                const graph = [];
                for (let index = 2; index >= 0; index--) {
                    const date = new Date();
                    const prevMonth = date.getMonth() - index;
                    const d = new Date(date.getFullYear(), prevMonth, 1);
                    let name = months[d.getMonth()];
                    graph.push(name);
                }
                setLabels(graph);
                break;
            default:
        }
    }, [dropdownValue])

    const data = {
        labels,
        datasets: [
            {
                label: 'Comment Positivity',
                data: labels.map(() => faker.datatype.float({ min: -1, max: 1 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    return (
        <div className="relative">
            <div className="absolute top-0 right-0 lg:max-w-sm">
                <select onChange={handleChange} id="period" className="text-center items-stretch p-2 text-gray-500 border-gray-500 bg-gray-900 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option>Hourly</option>
                    <option>Daily</option>
                    <option>Monthly</option>
                </select>
            </div>
            <Line options={options} data={data} />
        </div>
    )
}

export default TweetAnalysis