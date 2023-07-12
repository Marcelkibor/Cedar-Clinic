import React from 'react'
import Navigation from './Layouts/NavigationBar'
import ServicesHeader from './Services/ServicesHeader'

const Contacts = () => {
  return (
    <div>
        <Navigation/>
        <ServicesHeader pathname = {window.location.pathname}/>
    </div>
  )
}

export default Contacts
