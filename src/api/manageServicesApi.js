export const manageServicesPromise = email => {
    return fetch(`https://techtinker-server.vercel.app/manageServices?email=${email}`, {
        credentials: "include"
    })
    .then(res =>res.json());
}


