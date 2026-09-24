import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        return;
      }

      setUsers(data.users);
    };

    loadUsers();
  }, []);

  return (
    <section>
      <div className="page-header">
        <h1>משתמשים</h1>
        <p className="subtitle">{users.length} משתמשים רשומים</p>
      </div>

      {error && <p className="form-error">{error}</p>}

      <div className="users-grid">
        {users.map((user) => (
          <article key={user._id} className="user-card">
            <div className="avatar">{user.name[0]}</div>
            <div className="user-info">
              <h3>{user.name}</h3>
              <p className="email" dir="ltr">{user.email}</p>
              <p className="muted">נרשם ב-{new Date(user.createdAt).toLocaleDateString("he-IL")}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
