'use client'

import { useState } from 'react'

import { baseUrl } from '@src/config'

export default function Button() {
  const [date, setDate] = useState(null)

  const fetchDate = async () => {
    const url = `${baseUrl}/api/date`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    setDate(data.date)
  }
  return (
    <div className='min-h-screen flex-col items-center justify-between py-24'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={fetchDate}
      >
        Fetch Date
      </button>
      <p className='pt-20'>
        {date ? `The date is: ${date}` : 'No date fetched yet'}
      </p>
    </div>
  )
}
