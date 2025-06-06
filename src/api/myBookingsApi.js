export const myBookingsPromise = email =>{
    return fetch(`http://localhost:3000/my-bookings?email=${email}`).then(res => res.json());
}