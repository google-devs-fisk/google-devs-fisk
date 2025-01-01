'use client'
import React, {useState} from 'react'

const Newsletter = () => {
    const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', query);
    // Add your search functionality here
  };
  return (
    <div className='m-40 p-35'>
        <div className='border-4 border-blue-500 rounded-3xl p-10 items-center justify-center'>
            <h2 className='uppercase text-center'>subscribe to our newsletter</h2>
            <h5 className='capitalize text-center'>Recieve info about any of our recent projects and new deployments</h5>
            <form onSubmit={handleSearch} className="flex items-center mx-auto w-full max-w-md border border-blue-500 rounded-2xl px-4 py-2 mt-5">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="example@gmail.com"
                    className="bg-transparent border-none w-full text-white-700 ml-9 mr-3 py-1 px-2 leading-tight focus:outline-none"
                />
                <button
                    className="mr-3 flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                >
                    Subscribe
                </button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter