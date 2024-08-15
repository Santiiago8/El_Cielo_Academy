import React from 'react'
import '../styles/Staff.css'
import staffImg1 from '../assets/img/user.png'
import staffImg2 from '../assets/img/user.png'
import staffImg3 from '../assets/img/user.png'
import staffImg4 from '../assets/img/user.png'

const staffMembers = [
    {
      name: 'Katherina Vega',
      position: 'Director of El cielo academy  Coach',
      image: staffImg1,
    },
    {
      name: 'Brenda Vega',
      position: 'Head Coach',
      image: staffImg2,
    },
    {
      name: 'Laila ',
      position: 'Coach',
      image: staffImg3,
    },
    {
      name: 'Salma Ashraf',
      position: 'Coach',
      image: staffImg4,
    },
    {
        name: 'Ali Juggler',
        position: 'Coach',
        image: staffImg4,
      },
  ]

export const Staff = () => {
  return (
    <div className='staff-container'>
        <h2 className='staff-title'>Our Team</h2>
        <div className="staff-grid">
            {staffMembers.map((member, index) => (
                <div className="staff-card" key={index}>
                    <div className="staff-image-container">
                        <img src={member.image} alt={member.name} className="staff-image" />
                    </div>
                    <h3 className='staff-name'>{member.name}</h3>
                    <p className="staff-position">{member.position}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
