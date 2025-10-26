export const myApplicationPromise = (email, accessToken)=>{
    return fetch(`https://career-link-project-server.vercel.app/applications?email=${email}`, {
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}