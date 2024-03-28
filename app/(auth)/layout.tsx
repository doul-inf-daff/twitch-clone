import React from 'react'

function authLayout({children}: Readonly<{
    children: React.ReactNode;
  }>)  {
  return (
    <div className="h-full flex justify-center items-center">{children}</div>
  )
}

export default authLayout