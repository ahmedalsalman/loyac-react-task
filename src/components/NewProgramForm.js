import React, { Component } from "react";
import { connect } from "react-redux";
import { createProgram } from "../redux/actions/newprogram";

class NewProgramForm extends Component {
    state = {
        name: "",
        description: "",
        points: "",
        age_group: "",
        image: ""
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    imageUploader = (e) => {
        this.setState({ [e.target.name]: e.target.files[0] });
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.createProgram(this.state, this.props.history);
    };

    render() {

        return (
            <div className="card col-6 mx-auto p-0 mt-5">
                <div className="card-body">
                    <h5 className="card-title mb-4 log">
                        New Program Form
                    </h5>
                    <form className="was-validated" onSubmit={this.submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="validationTextarea">Project name</label>
                            <textarea id="validationTextarea"
                                className="form-control is-invalid"
                                type="text"
                                placeholder="name"
                                name="name"
                                value={this.state.name}
                                onChange={this.changeHandler}
                                required
                            ></textarea>
                            {this.state.name ? null : <div className="invalid-feedback">
                                Please enter the project's name.
                            </div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="validationTextarea">Description</label>
                            <textarea id="validationTextarea"
                                className="form-control is-invalid"
                                type="text"
                                placeholder="description"
                                name="description"
                                value={this.state.description}
                                onChange={this.changeHandler}
                                required></textarea>
                            {this.state.description ? null : <div className="invalid-feedback">
                                Please write a description for the project.
                </div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="validationTextarea">Points</label>
                            <textarea
                                id="validationTextarea"
                                className="form-control is-invalid"
                                type="text"
                                placeholder="points"
                                name="points"
                                value={this.state.points}
                                onChange={this.changeHandler}
                                required
                            ></textarea>
                            {this.state.points ? null : <div className="invalid-feedback">
                                Please set the upper limit points for the project.
                </div>}
                        </div>

                        <div className="mb-3">
                            <select className="custom-select"
                                name="age_group"
                                placeholder="age_group"
                                value={this.state.age_group}
                                onChange={this.changeHandler}
                                required>
                                <option value="">Choose age group...</option>
                                <option value="5-9">5-9</option>
                                <option value="10-17">10-17</option>
                                <option value="18-26">18-26</option>
                                <option value="27-35">27-35</option>
                            </select>
                            {this.state.age_group ? null : <div className="invalid-feedback">Please set the age group for this project.</div>}
                        </div>


                        <div className="mb-3">
                            <label htmlFor="validationTextarea">Image URL</label>
                            <textarea
                                id="validationTextarea"
                                className="form-control is-invalid"
                                type="text"
                                placeholder="image"
                                name="image"
                                value={this.state.image}
                                onChange={this.changeHandler}
                                required
                            ></textarea>
                            {this.state.image ? null : <div className="invalid-feedback">
                                Please provide an image url.
                </div>}
                        </div>

                        {/* the valid way is to "upload" an image but due to some issues im sticking to text field as above and providing a url instead. */}
                        {/* <div className="custom-file mb-3">
                            <input type="file" className="custom-file-input" id="file"
                                name="file"
                                placeholder="Upload an Image"
                                value={this.state.image}
                                onChange={this.imageUploader}
                                required />
                            <label className="custom-file-label" htmlFor="validatedCustomFile">Choose image...</label>
                            {this.state.image ? null : <div className="invalid-feedback">Example invalid custom image feedback</div>}
                        </div> */}

                        <input
                            className="btn btn-dark"
                            type="submit"
                            value="Create Program"
                        />
                    </form>
                </div>
            </div>);
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createProgram: (programData, history) =>
            dispatch(createProgram(programData, history)),

    };
};

export default connect(null, mapDispatchToProps)(NewProgramForm);