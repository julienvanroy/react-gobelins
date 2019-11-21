import React from 'react';
import { Line } from 'react-chartjs-2';

const chartColor = '#FFFFFF';

export default class Chart extends React.Component {
    constructor(props){
        super(props)
        this.state={
            price: [],
            date: []
        }
    }

    componentDidMount () {
        
        this.props.chartData.forEach(element => {
            this.state.price.push(element.price)
            this.state.date.push(element.timestamp)
        });
        this.setState({price: this.state.price})
        this.setState({date: this.state.date})
        console.log(this.state.price)
    }

      

    render() {
        const data = (canvas) => {
            var ctx = canvas.getContext("2d");
        
            var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, '#80b6f4');
            gradientStroke.addColorStop(1, chartColor);
        
            var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
            return {
                labels: this.state.date,
                datasets: [{
                    label: "Price",
                    borderColor: "#f96332",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#f96332",
                    pointBorderWidth: 2,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 1,
                    pointRadius: 4,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 2,
                    data: this.state.price
                }]
            }
        };
        const options = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                bodySpacing: 4,
                mode:"nearest",
                intersect: 0,
                position:"nearest",
                xPadding:10,
                yPadding:10,
                caretPadding:10
            },
            responsive: 1,
            scales: {
                yAxes: [{
                    display:0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }],
                xAxes: [{
                    display:0,
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false,
                        drawBorder: false
                    }
                }]
            },
            layout:{
                padding:{left:0,right:0,top:15,bottom:15}
            }
        };
        return(
            <Line data={data} options={options} />
        )
    }
}


