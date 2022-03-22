import React from 'react'

export default function Header(props) {
  return (
    <div>
        <nav>
            <div>
              <img src='' className='logo' alt='logo'/>
             <h1 className='title'>{props.title}</h1>
            </div>
            <div className='menu'>
              <p>List of Clients</p>
              <p>Add Client</p>
               {/*this is a comment ofc :ReactRouter goes here*/}
               <p>Delete Clients</p>
               <p>Update Clients</p>
            </div>
        </nav>
    </div>
  )
}
