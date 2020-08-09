import React, { Component } from "react";
import { connect } from "react-redux";
import { apply } from "../redux/actions";

class ProgramsDetail extends Component {
    state = {
        count: 1,
    };
    render() {
        if (!this.props.programs) return <p>Loading...</p>;
        const { programID } = this.props.match.params;
        let program = this.props.programs.find((prod) => prod.id === +programID);
        return (
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h3>Program name: {program.name}</h3>
                        <h3>Points: {program.points}</h3>
                        <h3>Description: {program.description}</h3>
                        <br />
                        <button
                            class="btn btn-rounded btn-danger btn-sm text-white"
                            onClick={() => this.props.apply(program.id)}
                        >
                            Apply
            </button>

                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    apply: (programID) => dispatch(apply(programID)),
});

const mapStateToProps = ({ programs }) => {
    return {
        programs,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsDetail);