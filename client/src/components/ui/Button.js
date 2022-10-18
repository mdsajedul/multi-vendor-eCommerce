import React from 'react'

export default function Button({textCase='',name,bgColor,textColor,...arg}) {
  return (
    // <button type="button" className={`my-2 inline-block px-6 py-2 bg-${bgColor}-600 text-${textColor} font-medium text-xs leading-tight ${textCase} rounded shadow-md hover:bg-${bgColor}-700 hover:shadow-lg focus:bg-${bgColor}-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-${bgColor}-800 active:shadow-lg transition duration-150 ease-in-out`} {...arg}>{name}</button>
    <button type="button" className={`my-2 inline-block px-6 py-2 bg-${bgColor}-600 text-${textColor} font-medium text-xs leading-tight ${textCase} rounded shadow-md hover:bg-${bgColor}-700 hover:shadow-lg focus:bg-${bgColor}-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-${bgColor}-800 active:shadow-lg transition duration-150 ease-in-out`} {...arg}>{name}</button>
  )
}
