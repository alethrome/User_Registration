import React from 'react';
import { useForm } from "react-hook-form";

export const StudentForm = ({ student, onSubmit }) => {
    const {register, handleSubmit} = useForm({
        defaultValues: { lastName: student ? student.lastName : "",
            firstName: student ? student.firstName : "",
            midName: student ? student.midName : "",
            bDay: student ? student.bDay : "",
            gender: student ? student.gender : "",
            studentID: student ? student.studentID : "",
            email: student ? student.email : "",
        },
    });

    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
    });

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="text">Last Name:</label>
                <input className="form-control"
                       {...register('lastName')}
                       type="text"
                       id="lastName"
                       required
                />
                <label htmlFor="text">First Name:</label>
                <input className="form-control"
                       {...register('firstName')}
                       type="text"
                       id="firstName"
                       required
                />
                <label htmlFor="text">Middle Name:</label>
                <input className="form-control"
                       {...register('midName')}
                       type="text"
                       id="midName"
                       required
                />
                <label htmlFor="text">Birthdate:</label>
                <input className="form-control"
                       {...register('bDay')}
                       type="date"
                       id="bDay"
                       required
                />
                <label htmlFor="text">Gender:</label>
                <select className="form-control"
                        {...register('gender')}
                        id="gender"
                        required
                >
                    <option value="volvo">Male</option>
                    <option value="saab">Female</option>
                </select>
                <label htmlFor="text">Student Number:</label>
                <input className="form-control"
                       {...register('studentID')}
                       type="text"
                       id="studentID"
                       placeholder="20XX-XXXXX-MN-0"
                       pattern="20[0-9]{2}-[0-9]{5}-MN-0"
                       required
                />
                <label htmlFor="text">Email:</label>
                <input className="form-control"
                       {...register('email')}
                       type="email"
                       id="email"
                       required
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Save student
                </button>
            </div>
        </form>
    )
}