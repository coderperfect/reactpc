import React, { Component } from 'react';
import CompanyDetailsComponent from './companydetailscomponent';

class WatchListComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            watchList: [
                {name: "Wipro",
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                price: 500},
                {name: "Hewlett Packard",
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                price: 800},
                {name: "Cognizant",
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                price: 1000},
                {name: "Microsoft",
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                price: 800},
                {name: "Apple",
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                price: 800},
                {name: "Tesla",
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                price: 800},
                {name: "BMW",
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                price: 800}
            ]
        }
    }

    printCompanyTriad = (companyTriad) => {
        return(
            companyTriad.map(company => {
                return (
                    <div className="col-sm-12 col-lg-4" key={company.name} style={{marginBottom:'100px'}}>
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
                        <div className="row" key={company.name}>
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