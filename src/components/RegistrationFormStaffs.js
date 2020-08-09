import React, { Component } from "react";
import { Link } from "react-router-dom";
import { registerForm } from "../redux/actions/authentication";
import { connect } from "react-redux";
import { resetErrors } from "../redux/actions/errors";

class RegistrationFormStaffs extends Component {
    state = {
        email: "",
        password: "",
        date_of_birth: "",
        first_name: "",
        last_name: "",
        employeeID: "",
    };

    componentWillUnmount = () => {
        this.props.resetErrors();
    };

    componentDidUpdate = (previousProps) => {
        if (
            this.props.match.url.split('/')[1] !== previousProps.match.url.split('/')[1]
        )
            this.props.resetErrors();
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = (e) => {
        e.preventDefault();
        const type = this.props.match.url.split('/')[1];
        const userType = this.props.match.url.split('/')[2];
        this.props.registerForm(this.state, this.props.history, type, userType);
    };

    render() {
        const type = this.props.match.url.split('/')[1];
        const userType = this.props.match.url.split('/')[2];
        const errors = this.props.errors;
        console.log(errors);
        return (
            <div className="card col-6 mx-auto p-0 mt-5">
                <div className="card-body">
                    <h5 className="card-title mb-4 log">
                        {type === "login" ? "Login" : "Register an account"}
                    </h5>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <input
                                className={`form-control ${errors.email && "is-invalid"}`}
                                type="text"
                                placeholder="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.changeHandler}
                            />
                            <div className="invalid-feedback">{errors.email}</div>
                        </div>

                        <div className="form-group">
                            <input
                                className={`form-control ${
                                    errors.non_field_errors &&
                                    errors.non_field_errors &&
                                    "is-invalid"
                                    }`}
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={this.changeHandler}
                            />
                            <div className="invalid-feedback">{errors.non_field_errors}</div>
                        </div>
                        {type !== "login" && (
                            <>
                                <div className="form-group">
                                    <input
                                        className={`form-control ${errors.date_of_birth && "is-invalid"}`}
                                        type="text"
                                        placeholder="date of birth in the form: YYYY-MM-DD"
                                        name="date_of_birth"
                                        value={this.state.date_of_birth}
                                        onChange={this.changeHandler}
                                    />
                                    <div className="invalid-feedback">{errors.date_of_birth}</div>
                                </div>

                                <div className="form-group">
                                    <input
                                        className={`form-control ${
                                            errors.first_name && "is-invalid"
                                            }`}
                                        type="text"
                                        placeholder="first_name"
                                        name="first_name"
                                        value={this.state.first_name}
                                        onChange={this.changeHandler}
                                    />
                                    <div className="invalid-feedback">{errors.first_name}</div>
                                </div>

                                <div className="form-group">
                                    <input
                                        className={`form-control ${
                                            errors.last_name && "is-invalid"
                                            }`}
                                        type="text"
                                        placeholder="last_name"
                                        name="last_name"
                                        value={this.state.last_name}
                                        onChange={this.changeHandler}
                                    />
                                    <div className="invalid-feedback">{errors.last_name}</div>
                                </div>

                                <div className="form-group">
                                    <input
                                        className={`form-control ${
                                            errors.employeeID && "is-invalid"
                                            }`}
                                        type="text"
                                        placeholder="employeeID"
                                        name="employeeID"
                                        value={this.state.employeeID}
                                        onChange={this.changeHandler}
                                    />
                                    <div className="invalid-feedback">{errors.employeeID}</div>
                                </div>
                            </>
                        )}

                        <input
                            className="btn btn-dark"
                            type="submit"
                            value={type.replace(/^\w/, (c) => c.toUpperCase())}
                        />
                    </form>
                </div>
                <div className="card-footer log">
                    <Link
                        to={type === "login" ? `/register/${userType}` : `/login/${userType}`}
                        className="btn-info small btn-link-info nav-link"
                    >
                        {type === "login"
                            ? "Register an account"
                            : "Login with an existing account"}
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.errors,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        registerForm: (userData, history, type, userType) =>
            dispatch(registerForm(userData, history, type, userType)),
        resetErrors: () => dispatch(resetErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormStaffs);