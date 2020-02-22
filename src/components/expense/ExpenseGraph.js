import React, { Component } from 'react';
import { Chart } from 'chart.js';
import axios from 'axios';
import styled from 'styled-components';

//TODO: Create options for daily expense, monthly expense and yearly expense

let StyledCanvas = styled.canvas`
    margin: 3rem 0;
`;

export default class ExpenseGraph extends Component {
    render() {
        return (
            <StyledCanvas id="expenseGraph" width="400" height="400"></StyledCanvas>
        )
    }

    componentDidMount() {
        let dataPoints;

        axios.get('http://localhost:5000/expenses')
        .then(res => {
            dataPoints = createDataPoints(res.data);
        }).then(() => {
            var ctx = document.getElementById('expenseGraph');
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: dataPoints
            });
        });
    }
}

function getRandomColor() {
    let randArr = new Array(3);

    for (let i = 0; i < randArr.length; i++) {
        randArr[i] = Math.floor(Math.random() * 25) * 10;
    }

    return `rgb(${randArr[0]}, ${randArr[1]}, ${randArr[2]})`;
}

function createDataPoints(expenseArr) {
    let labelsArr = [];
    let dataArr = [];
    let bgArr = [];

    expenseArr.forEach(elem => {
        labelsArr.push(elem.name);
        dataArr.push(Number(elem.cost.$numberDecimal));
        bgArr.push(getRandomColor());
    });

    return ({
        labels: labelsArr,
        datasets: [{
            label: 'Graph of Expenses',
            data: dataArr,
            backgroundColor: bgArr,
            borderWidth: 0
        }]
    })
}