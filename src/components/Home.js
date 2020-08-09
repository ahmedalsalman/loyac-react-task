import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apply } from "../redux/actions";
import { connect } from "react-redux";


class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>home page</h1>
                </div>
                <div className="col-3 ml-6 mb-7 mt-6 mr-6 ">
                    <div className="card ">
                        <Link to={`/programs`} className="card">
                            <div className="card-body">
                                <h5 className="card-title">Programs</h5>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-3 ml-6 mb-7 mt-6 mr-6 ">
                    <div className="card ">
                        <Link to={`/login/applicant`} className="card">
                            <div className="card-body">
                                <h5 className="card-title">applicants registration</h5>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-3 ml-6 mb-7 mt-6 mr-6 ">
                    <div className="card ">
                        <Link to={`/login/staff`} className="card">
                            <div className="card-body">
                                <h5 className="card-title">staff registration</h5>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="col-3 ml-6 mb-7 mt-6 mr-6 ">
                    <div className="card ">
                        <Link to={`/newprogram`} className="card">
                            <div className="card-body">
                                <h5 className="card-title">new program (staff only)</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }


}

const mapStateToProps = ({ programs }) => ({
    programs,
});


export default connect(mapStateToProps, null)(Home);
