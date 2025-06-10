export const myBookingsPromise = email =>{
    return fetch(`http://localhost:3000/my-bookings?email=${email}`,{
        credentials: "include"
    })
    .then(res => res.json());
}