import React, { Component } from 'react';
import { Chart } from 'chart.js';
import axios from 'axios';
import styled from 'styled-components';

//TODO: Create options for daily expense, monthly expense and yearly expense
//TODO: Fuse ExpenseGraph and ExpenseList into a new Component

let CanvasContainer = styled.div`
    margin: 3rem 0;
    max-width: 100%;
    padding: 2rem 5vw;
    border-radius: 2rem;
    background: #f0b0b9;
    overflow: hidden;
`;

let GraphTitle = styled.h2`
    color: #ffffff;
    margin-bottom: 1rem;
`;

export default class ExpenseGraph extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             expenseGraph: {}
        }
    }
    
    render() {
        return (
            <CanvasContainer>
                <GraphTitle>Graph of Expenses</GraphTitle>
                <canvas id="expenseGraph" className="expenseGraph" width="400" height="400"></canvas>
            </CanvasContainer>
        )
    }

    componentDidMount() {
        let dataPoints;

        axios.get('http://localhost:5000/expenses')
        .then(res => {
            dataPoints = createDataPoints(res.data);
        }).then(() => {
            var ctx = document.getElementById('expenseGraph');
            this.setState({ 
                expenseGraph: new Chart(ctx, {
                    type: 'doughnut',
                    data: dataPoints,
                    options: {
                        layout: {
                            left: 0,
                            right: 0,
                            top: 50,
                            bottom: 0
                        }
                    }
                }) 
            })
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
            borderWidth: 0,
        }]
    })
}