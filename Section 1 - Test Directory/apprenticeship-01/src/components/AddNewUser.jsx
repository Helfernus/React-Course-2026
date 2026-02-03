import { useContext } from 'react';
import './AddNewUser.css';
import UsersContext from '../store/UserContext';

export default function AddNewUser() {
  console.log('AddNewUser Re-render');
  const { formData, handleFormDataChange, saveUser } = useContext(UsersContext);

  return (
    <form onSubmit={saveUser} className="form-card">
      <label>Name:
        <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleFormDataChange} />
      </label>
      <label>Title:
        <input type="text" name="title" value={formData.title} placeholder="Title" onChange={handleFormDataChange} />
      </label>
      <label>Email:
        <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleFormDataChange} />
      </label>
      <label>Bio:
        <input type="text" name="bio" value={formData.bio} placeholder="Bio" onChange={handleFormDataChange} />
      </label>
      <label>Location:
        <input type="text" name="location" value={formData.location} placeholder="Location" onChange={handleFormDataChange} />
      </label>
      <label>Skills:
        <input type="text" name="skills" value={formData.skills} placeholder="Skills" onChange={handleFormDataChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}
