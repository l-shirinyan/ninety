import Nav from '@/components/navigation'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <Nav />
        {children}
    </div>
  )
}

export default Layout