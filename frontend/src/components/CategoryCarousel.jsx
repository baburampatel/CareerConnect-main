import React from 'react'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from '@/redux/jobSlice'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div>
            <div className='flex justify-center gap-3 my-10 flex-wrap'>
                {
                    category.map((cat, index) => (
                        <Button onClick={() => searchJobHandler(cat)} variant="outline" key={index} className="rounded-full">{cat}</Button>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryCarousel
