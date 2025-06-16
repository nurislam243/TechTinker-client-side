export const myBookingsPromise = email =>{
    return fetch(`https://techtinker-server.vercel.app/my-bookings?email=${email}`,{
        credentials: "include"
    })
    .then(res => res.json());
}