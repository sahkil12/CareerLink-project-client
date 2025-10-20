import { useParams } from 'react-router';

const ViewApplications = () => {
    const {job_id} = useParams()
    console.log(job_id);
    return (
        <div>
            <h2 className='text-3xl text-center my-20'>Id : {job_id}</h2>
        </div>
    );
};

export default ViewApplications;