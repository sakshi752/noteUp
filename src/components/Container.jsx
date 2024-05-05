import React from 'react'

const Container = ({children}) => {
  return (
    <div className='py-5 px-3 md:px-10 bg-slate-900 text-white h-screen overflow-y-auto'>
      {children}
    </div>
  )
}

export default Container
