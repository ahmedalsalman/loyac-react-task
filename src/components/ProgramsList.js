import React, { Component } from "react";
import { connect } from "react-redux";
import ProgramsCard from "./ProgramsCard";

class ProgramsList extends Component {
    render() {
        if (!this.props.programs) return <p>Loading...</p>;

        const programCards = this.props.programs.map((program) => (
            <ProgramsCard key={program.id + program.name} program={program} />
        ));

        return (
            <div className="container">
                <h3>Programs</h3>
                <div className="row">{programCards}</div>
            </div>
        );
    }
}

const mapStateToProps = ({ programs }) => ({
    programs,
});

export default connect(mapStateToProps)(ProgramsList);