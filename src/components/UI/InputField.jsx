import React from 'react'

const InputField = ({ label, placeholder, value, handleChanges, name }) => {
    return (
        <div className='w-full '>
            <label className="font-semibold">
                {label}
            </label>
            <input
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={handleChanges}
                className='w-full px-4 py-1 outline-0 bg-blue-100/50 rounded-md border border-gray-200 placeholder:text-gray-800'
            />
        </div>
    )
}

export default InputField