import React, { PropsWithChildren, ReactNode } from 'react'
// ({children}:{children : ReactNode})

const Wrapper = ({children} : PropsWithChildren) => {
  return (
    <div className='px-4 md:px-10 mx-auto'>
        {children}
    </div>
  )
}

export default Wrapper