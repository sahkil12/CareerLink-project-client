
export const myPostedJobsPromise = (email, accessToken)=>{

    return fetch(`https://career-link-project-server.vercel.app/jobs?email=${email}`,{
        headers:{
            authorization : `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}