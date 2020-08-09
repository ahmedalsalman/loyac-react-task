import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apply } from "../redux/actions";
import { connect } from "react-redux";

class ProgramsCard extends Component {
    render() {
        console.log(this.props.program.id);
        return (
            <div className="col-3 ml-6 mb-7 mt-6 mr-6 ">
                <div className="card ">
                    <Link to={`/programs/${this.props.program.id}`} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.program.name}</h5>
                        </div>
                        <div className="image">
                            <img
                                className="card-img-top img-fluid"
                                src={`${this.props.program.image}`}
                                alt={this.props.program.image}
                                style={{ width: "18rem", height: "21rem" }}
                            />
                        </div>
                    </Link>
                    <button
                        class="btn btn-rounded btn-success btn-sm text-white px-2 py-1"
                        onClick={() => this.props.apply(this.props.program.id)}
                    >
                        Apply
          </button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    apply: (programID) => dispatch(apply(programID)),
});

export default connect(null, mapDispatchToProps)(ProgramsCard);