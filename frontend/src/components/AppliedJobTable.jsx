import React from 'react'
import { useSelector } from 'react-redux'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
    const {allAppliedJobs} = useSelector(store=>store.job);
    return (
        <div>
            <table className='w-full'>
                <caption className='text-lg font-semibold mb-2'>A list of your applied jobs</caption>
                <thead>
                    <tr>
                        <th className='text-left p-2'>Date</th>
                        <th className='text-left p-2'>Job Role</th>
                        <th className='text-left p-2'>Company</th>
                        <th className='text-right p-2'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAppliedJobs.length <= 0 ? <tr><td colSpan={4} className='text-center py-4'>You haven't applied to any jobs yet.</td></tr> : allAppliedJobs.map((appliedJob) => (
                            <tr key={appliedJob._id} className='border-t'>
                                <td className='p-2'>{appliedJob?.createdAt?.split("T")[0]}</td>
                                <td className='p-2'>{appliedJob.job?.title}</td>
                                <td className='p-2'>{appliedJob.job?.company?.name}</td>
                                <td className='text-right p-2'><Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{appliedJob.status.toUpperCase()}</Badge></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AppliedJobTable
