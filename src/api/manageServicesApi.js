export const manageServicesPromise = email => {
    return fetch(`http://localhost:3000/manageServices?email=${email}`).then(res =>res.json());
}