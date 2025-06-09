export const manageServicesPromise = email => {
    return fetch(`http://localhost:3000/manageServices?email=${email}`, {
        credentials: "include"
    })
    .then(res =>res.json());
}