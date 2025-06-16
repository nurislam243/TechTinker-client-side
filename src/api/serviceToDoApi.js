export const toDoPromise = email =>{
    return fetch(`https://techtinker-server.vercel.app/service-to-do?email=${email}`,{
        credentials: "include"
    })
    .then(res => res.json());
}