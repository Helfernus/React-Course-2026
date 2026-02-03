import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import { useContext } from 'react'
import AddNewUser from './components/AddNewUser';
import { UsersContextProvider } from './store/UserContext';
import UsersContext from './store/UserContext';

function AppContent() {
  console.log('App Re-render');

  const { usersData } = useContext(UsersContext);
  return <>
    <AddNewUser />
    {usersData && usersData.map(user => (
      <UserCard key={user.id} avatar={viteLogo} {...user} />
    ))}</>
}

function App() {
  return (
    <UsersContextProvider>
      <AppContent />
    </UsersContextProvider>
  )
}

export default App;
