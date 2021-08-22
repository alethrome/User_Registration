import React from 'react';
import {StudentForm} from "./StudentForm";
import { addStudent } from "./api";
import {useHistory} from "react-router-dom";

export const AddStudent = () => {
    const history = useHistory()

    const onSubmit = async (data) => {
        await addStudent(data)
        history.push("/")
    };

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Register Student</h3>
                <StudentForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}