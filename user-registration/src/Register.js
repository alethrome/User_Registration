import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export const Register = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/")
            .then((response) => {
                setItems(response.data)
            })
    }, [])

    const deleteStudent = (id) => {
        axios.delete(`http://localhost:4000/delete/${id}`).then(
            () => {
                setItems(
                    items.filter((val) => {
                        return val._id != id;
                    })
                );
            }
        );
    };

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Student List</h3>
                <table className = "table table-striped mt-3">
                    <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Birthdate</th>
                        <th>Gender</th>
                        <th>Student ID</th>
                        <th>Student Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.map(deets => (
                            <tr key={deets._id}>
                                <td>
                                    {deets.lastName}
                                </td>
                                <td>
                                    {deets.firstName}
                                </td>
                                <td>
                                    {deets.midName}
                                </td>
                                <td>
                                    {deets.bDay}
                                </td>
                                <td>
                                    {deets.gender}
                                </td>
                                <td>
                                    {deets.studentID}
                                </td>
                                <td>
                                    {deets.email}
                                </td>
                                <td>
                                    <Link to={`/edit/${deets._id}`}>Edit</Link>
                                </td>
                                <td>
                                    <button onClick={() => {
                                        deleteStudent(deets._id)
                                    }}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>

    )}