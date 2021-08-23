import React, { useState, useEffect } from "react";
import { StudentForm } from "./StudentForm";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getStudent, updateStudent } from "./api";

export const EditStudent = () => {
    const match = useRouteMatch()
    const [student, setStudent] = useState();
    const history = useHistory()

    useEffect(() => {
        const fetchStudent = async () => {
            const student = await getStudent(match.params.id)
            setStudent(student)
        }
        fetchStudent()
    }, );

    const onSubmit = async (data) => {
        await updateStudent(data, match.params.id)
        history.push("/")
    }

    return student ? (
        <div className="container">
            <div className="mt-3">
                <h3>Edit Student Details</h3>
                <StudentForm student={student} onSubmit={onSubmit}/>
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
};

