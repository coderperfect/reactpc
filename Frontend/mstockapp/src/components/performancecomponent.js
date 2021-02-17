import axios from 'axios';
import React, {Component} from 'react';

class PerformanceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companiesList: [],

            company1: null,
            company2: null,
            fromDate: "",
            toDate: "",

            compareDetails: [],

            tableElement: null
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:8080/companies");
            
            this.setState({
                companiesList: response.data
            }); 
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        switch(name) {
            case "company1":
                this.setState({
                    company1: value
                });
                break;
            case "company2":
                this.setState({
                    company2: value
                });
                break;
            case "fromDate":
                this.setState({
                    fromDate: value
                });
                break;
            case "toDate":
                this.setState({
                    toDate: value
                });
                break;
        }
    }

    renderOptions = () => {
        return (
            this.state.companiesList.map((company) => {
                return (
                    <option key={company.companyId} value={company.companyId}>{company.companyName}</option>
                );
            })
        );
    }

    renderDuo = (detailDuo) => {
        let stockPrices = [];
        let companies = [];

        if(this.state.company1 <= this.state.company2){
            stockPrices.push(detailDuo[0].stockPrice);
            stockPrices.push(detailDuo[1].stockPrice);

            companies.push(detailDuo[0].company.companyName);
            companies.push(detailDuo[1].company.companyName);
        }
        else{
            stockPrices.push(detailDuo[1].stockPrice);
            stockPrices.push(detailDuo[0].stockPrice);

            companies.push(detailDuo[1].company.companyName);
            companies.push(detailDuo[0].company.companyName);
        }

        return (
            <tbody key={detailDuo[0].id}>
                <tr key={detailDuo[0].id}>
                    <th scope="row">{detailDuo[0].date}</th>
                    <td>{companies[0]}</td>
                    <td>${stockPrices[0]}</td>
                </tr>
                <tr key={detailDuo[1].id}>
                    <th scope="row"></th>
                    <td>{companies[1]}</td>
                    <td>${stockPrices[1]}</td>
                </tr>
            </tbody>
        );
    }

    renderTable = () => {
        let detailDuo = [];
        let count = 0;

        return (
            this.state.compareDetails.map((companyStockDetails) => {
                if(count != 2) {
                    detailDuo.push(companyStockDetails);
                    count++;
                }

                if(count == 2) {
                    count = 0;
                    let detailsDuoParam = [...detailDuo];
                    detailDuo = [];
                    return (
                        this.renderDuo(detailsDuoParam)
                    );
                }
            })
        );
    }

    async handleSubmit(event) {
        event.preventDefault();

        const response = await axios.get(`http://localhost:8080/stocks/compare-performance?companyCode1=${this.state.company1}&companyCode2=${this.state.company2}&from=${this.state.fromDate}&to=${this.state.toDate}`);

        this.setState({
            compareDetails: response.data
        });

        this.setState({
            tableElement: 
            <table className="table">
                <thead>
                    <tr key="table-header">
                        <th scope="col">Date</th>
                        <th scope="col">Company</th>
                        <th scope="col">Stock Price</th>
                    </tr>
                </thead>
                {this.renderTable()}
            </table>
        })
    }

    render() {
        return (
            <div className="container">
                <h2>Compare potential companies</h2>
                <h3 className="text-muted">Make smart investment decision</h3>

                <form name="loginForm" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <span className="col-sm-12 col-lg-6 mb-3">
                            <label htmlFor="company1">Select Company 1</label> <br/>
                            <select id="company1" name="company1" className="form-control" defaultValue="choose.." onChange={(event) => this.handleChange(event)}>
                                <option value="choose..">choose..</option>
                                {this.renderOptions()}
                            </select>
                        </span>

                        <span className="col-sm-12 col-lg-6 mb-3">
                            <label htmlFor="company2">Select Company 2</label> <br/>
                            <select id="company2" name="company2" className="form-control" defaultValue="choose.." onChange={(event) => this.handleChange(event)}>
                                <option value="choose..">choose..</option>
                                {this.renderOptions()}
                            </select>
                        </span>
                    </div>

                    <div className="row">
                        <span className="col-sm-12 col-lg-6 mb-3">
                            <label htmlFor="fromDate">From Date</label> <br/>
                            <input type="text" className="form-control" id="fromDate" name="fromDate"  onChange={(event) => this.handleChange(event)}/>
                        </span>

                        <span className="col-sm-12 col-lg-6 mb-3">
                            <label htmlFor="toDate">To Date</label> <br/>
                            <input type="text" className="form-control" id="toDate" name="toDate" onChange={(event) => this.handleChange(event)}/>
                        </span>
                    </div>

                    <div className="row">
                        <span className="col-sm-12 col-lg-6 mb-3 mt-3">
                            <button className="btn btn-primary" type="submit" value="Fetch Details">Fetch Details</button>
                        </span>
                    </div>
                </form>

                {this.state.tableElement}
            </div>
        );
    }
}

export default PerformanceComponent;