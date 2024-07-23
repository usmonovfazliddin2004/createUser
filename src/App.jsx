import "./App.css";

import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import UserList from "./components/userList/UserList.jsx";
import NewUserForm from "./components/newuser/NewUserForm.jsx";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false)

// delete user
const deleteUser = (id) => {
  setUsers((prev) => {
    return prev.filter((user) => {
      return user.id !== id
    })
  })
}

// closeModal
const closeModal = (e) => {
  if (e.target.className === "overlay") setShowModal(false)
    if (e.key === "Escape") setShowModal(false)
}

// add user
const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
}

  return (
    <div className="App" onClick={closeModal} onKeyDown={closeModal}>
      <Navbar usersLenght={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUser = {deleteUser}/>
      </main>
      {showModal && <NewUserForm addUser={addUser}/>}
      <button onClick={() => setShowModal(true)} className="create-user">Create User</button>
      <Footer />
    </div>
  );
}

export default App;
