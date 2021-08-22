export const getStudents = () => fetch("http://localhost:4000/").then(res => res.json())

export const addStudent = (student) => fetch("http://localhost:4000/create", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
})

export const updateStudent = (student, id) => fetch(`http://localhost:4000/${id}`, {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
})

export const getStudent = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json())