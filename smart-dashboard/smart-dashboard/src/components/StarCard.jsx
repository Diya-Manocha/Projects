import React from 'react'

const StarCard = ({title, value}) => {
  return (
    <div className='bg-white dark:bg-gray-300 p-4 rounded-l shadow'>
        <p className='text-gray-600'>{title}</p>
        <h1 className='text-2xl font-bold'>{value}</h1>
    </div>
  )
}

export default StarCard