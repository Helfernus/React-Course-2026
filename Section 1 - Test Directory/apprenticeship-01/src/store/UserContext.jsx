import { createContext, useCallback, useMemo, useState } from "react";

const UsersContext = createContext({
  usersData: [],
  formData: {
    name: '',
    title: '',
    email: '',
    bio: '',
    location: '',
    skills: '',
  },
  handleFormDataChange: () => { },
  saveUser: () => { },
});

export function UsersContextProvider({ children }) {
  const [usersData, setUsersData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    bio: '',
    location: '',
    skills: '',
  });

  const handleFormDataChange = useCallback(function handleFormDataChange(event) {
    setFormData(previousData => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const saveUser = useCallback(function saveUser(event) {
    event.preventDefault();
    const newUser = { ...formData, id: Date.now() + Math.random() };
    setUsersData(previousUsers => ([...previousUsers, newUser]));
    setFormData({ name: '', title: '', email: '', bio: '', location: '', skills: '', });
  }, [formData]);

  const contextValue = useMemo(() => ({
    usersData,
    formData,
    handleFormDataChange,
    saveUser,
  }), [usersData, formData, handleFormDataChange, saveUser]);

  return <UsersContext.Provider value={contextValue}>{children}</UsersContext.Provider>;
}

export default UsersContext;