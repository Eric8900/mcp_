import React from 'react'

function Form() {
  return (
    <div className='mt-[10vh]'>
        <h1 className="text-2xl font-bold">Add Server</h1>
        <form className="mt-4">
            <div className="mb-4">
            <label htmlFor="server-name" className="block text-sm font-medium text-gray-700">Github Link</label>
            <input type="text" id="server-name" name="server-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Server</button>
        </form>
    </div>
  )
}

export default Form