import axios from 'axios';
import React, { Component } from 'react';
import CompanyDetailsComponent from './companydetailscomponent';

class CompaniesListComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            companiesList: [],
            isLoggedIn: props.isLoggedIn
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

    printCompanyTriad = (companyTriad) => {
        return(
            companyTriad.map(company => {
                return (
                    <div className="col-sm-12 col-lg-4" key={company.companyName} style={{marginBottom:'100px'}}>
                        <CompanyDetailsComponent company = {company} isLoggedIn = {this.state.isLoggedIn} button = "Watch"/>
                    </div>
                );
            })
        );
    }

    renderList = () => {
        let indexCount = -1;
        let count = -1;
        let companyTriad = [];

        return (
            this.state.companiesList.map(company => {
                indexCount++;
                count++;

                if(count !== 3){
                    companyTriad.push(company);
                }

                if(count === 2 || indexCount === this.state.companiesList.length-1){
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
                <h1>Companies List</h1>
                <div>
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default CompaniesListComponent;