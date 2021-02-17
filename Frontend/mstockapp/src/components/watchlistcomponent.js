import axios from 'axios';
import React, { Component } from 'react';
import CompanyDetailsComponent from './companydetailscomponent';

class WatchListComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            watchList: []
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:8080/watchList/1");
            let watchList = [];

            response.data.map((companyUser) => {
                watchList.push(companyUser.company);
            })

            this.setState({
                watchList: watchList
            });
        }
        catch (error){

        }
    }

    printCompanyTriad = (companyTriad) => {
        return(
            companyTriad.map(company => {
                return (
                    <div className="col-sm-12 col-lg-4" key={company.companyName} style={{marginBottom:'100px'}}>
                        <CompanyDetailsComponent company = {company} isLoggedIn = {true} button = "Remove"/>
                    </div>
                );
            })
        );
    }

    renderList = () => {
        let indexCount = -1;
        let count = -1;
        let companyTriad = [];

        if(this.state.watchList.length === 0){
            return (
                <h3>No company stock prices added to watch list</h3>
            );
        }

        return (
            this.state.watchList.map(company => {
                indexCount++;
                count++;

                if(count !== 3){
                    companyTriad.push(company);
                }

                if(count === 2 || indexCount === this.state.watchList.length-1){
                    count = -1;
                    let companyTriadArg = [...companyTriad];
                    companyTriad = [];
                    
                    return (
                        <div className="row" key={company.companyName}>
                            {this.printCompanyTriad(companyTriadArg)}
                        </div>
                    );
                }
            })
        );
    }

    render(){
        return (
            <div className="container-fluid">
                <h1>My Companies List</h1>
                <div>
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default WatchListComponent;