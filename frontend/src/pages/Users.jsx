// משתמשים לדוגמה בלבד - צריך להחליף אותם במשתמשים אמיתיים מהשרת
const sampleUsers = [
  { _id: "1", name: "רועי כהן", email: "roee@example.com", createdAt: "2026-09-14T10:00:00.000Z" },
  { _id: "2", name: "דנה לוי", email: "dana@example.com", createdAt: "2026-09-12T08:30:00.000Z" },
  { _id: "3", name: "יוסי מזרחי", email: "yossi@example.com", createdAt: "2026-09-10T17:45:00.000Z" },
];

export default function Users() {
  return (
    <section>
      <div className="page-header">
        <h1>משתמשים</h1>
        <p className="subtitle">{sampleUsers.length} משתמשים רשומים</p>
      </div>

      <div className="users-grid">
        {sampleUsers.map((user) => (
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
