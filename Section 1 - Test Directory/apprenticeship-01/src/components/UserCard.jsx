import { useState } from 'react';
import './UserCard.css';

export default function UserCard({ id, name, title, avatar, email, bio, location, skills }) {
  console.log('UserCard Re-render');
  const [isDetailView, setIsDetailView] = useState(false);

  function handleDetailViewToggle() {
    setIsDetailView(previous => !previous);
  }

  return (
    <div className="card" id={id}>
      <img src={avatar} alt={`Avatar Logo of ${name}`} />
      <h2>{name}</h2>
      <div>{title}</div>
      <button className='toggle-details' onClick={handleDetailViewToggle}>Show {isDetailView ? 'Less' : 'More'}</button>

      <div className={`details ${isDetailView ? 'show' : 'hide'}`}>
        <div>Email: {email}</div>
        <div>Bio: {bio}</div>
        <div>Location: {location}</div>
        <div>Skills: {skills}</div>
      </div>

    </div>
  );
}
