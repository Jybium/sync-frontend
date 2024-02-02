import React from 'react'

const layout = ({children}) => {
  return (
    <main className='w-[90%] m-auto py-4 items-center h-screen'>
        {children}
    </main>
  )
}

export default layout