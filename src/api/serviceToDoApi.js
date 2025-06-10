export const toDoPromise = email =>{
    return fetch(`http://localhost:3000/service-to-do?email=${email}`,{
        credentials: "include"
    })
    .then(res => res.json());
}