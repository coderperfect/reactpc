import React, {Component} from 'react';

class PerformanceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companiesList: [
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

    render() {
        return (
            <div className="container">
                <h2>Compare potential companies</h2>
                <h3 className="text-muted">Make smart investment decision</h3>

                <form name="loginForm" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <span className="col-sm-12 col-lg-6 mb-3">
                            <label for="company1">Select Company 1</label> <br/>
                            <select id="company1" name="company1" className="form-control">
                                <option value="choose.." selected>choose..</option>
                                <option value="Cognizant">Cognizant</option>
                                <option value="Microsoft">Microsoft</option>
                                <option value="Tesla">Tesla</option>
                            </select>
                        </span>

                        <span className="col-sm-12 col-lg-6 mb-3">
                            <label for="company1">Select Company 1</label> <br/>
                            <select id="company1" name="company1" className="form-control">
                                <option value="choose.." selected>choose..</option>
                                <option value="Cognizant">Cognizant</option>
                                <option value="Microsoft">Microsoft</option>
                                <option value="Tesla">Tesla</option>
                            </select>
                        </span>
                    </div>

                    <div className="row">
                        <span className="col-sm-12 col-lg-6 mb-3">
                            <label for="fromDate">From Date</label> <br/>
                            <input type="text" className="form-control" id="fromDate"/>
                        </span>

                        <span className="col-sm-12 col-lg-6 mb-3">
                            <label for="toDate">To Date</label> <br/>
                            <input type="text" className="form-control" id="toDate"/>
                        </span>
                    </div>

                    <div className="row">
                        <span className="col-sm-12 col-lg-6 mb-3 mt-3">
                            <button className="btn btn-primary" type="submit" value="Fetch Details">Fetch Details</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default PerformanceComponent;