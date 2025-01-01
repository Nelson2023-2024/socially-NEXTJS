"use server"
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import UnAuthenticatedSidebar from './UnAuthenticatedSidebar'

const Sidebar = async() => {
    const authUser = await currentUser()

    if(!authUser) return <UnAuthenticatedSidebar/>
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar