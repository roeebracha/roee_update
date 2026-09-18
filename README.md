# 👥 Users Flow

תרגול של הפלואו המלא: **טופס ב-React → שרת Node → MongoDB → חזרה למסך.**

- **`backend/`** - שרת מוכן ועובד: הרשמה, התחברות, ורשימת משתמשים.
- **`frontend/`** - רק UI. הדפים מעוצבים, אבל לא מחוברים לשום דבר.

## המשימה שלך: לחבר ביניהם

1. **הרשמה** - state לשדות, `onSubmit`, שליחה ל-`POST /api/auth/register`. שומרים את ה-token ועוברים ל-`/users`.
2. **התחברות** - אותו דבר מול `POST /api/auth/login`.
3. **משתמשים** - להחליף את `sampleUsers` במשתמשים אמיתיים מ-`GET /api/users`. הבקשה צריכה את ה-token.
4. **שגיאות** - הקופסה האדומה מופיעה רק כשיש שגיאה, ומציגה את ההודעה שהשרת שלח.
5. **התנתקות** - מוחקים את ה-token וחוזרים ל-`/login`.

## ה-API

| Route | Body | תשובה |
|---|---|---|
| `POST /api/auth/register` | `{ name, email, password }` | `201 { token, user }` |
| `POST /api/auth/login` | `{ email, password }` | `200 { token, user }` |
| `GET /api/users` | header: `Authorization: Bearer <token>` | `200 { users: [...] }` |

כשמשהו לא בסדר השרת מחזיר `{ error: "..." }`:

| קוד | מתי |
|---|---|
| `400` | חסר שדה, או סיסמה קצרה מ-6 תווים |
| `409` | האימייל כבר רשום |
| `401` | אימייל או סיסמה שגויים, או token חסר או לא תקין |

## להריץ

**שרת:**
```bash
cd backend
cp .env.example .env      # למלא MONGO_URI ו-JWT_SECRET
npm install
npm run dev               # http://localhost:3000
```

**פרונט** (בטרמינל נוסף):
```bash
cd frontend
cp .env.example .env
npm install
npm run dev               # http://localhost:5173
```

את הכתובת של השרת מקבלים בקוד עם `import.meta.env.VITE_API_URL`.

## טיפים

- **לבדוק את השרת לבד** - `backend/requests.http` (תוסף REST Client ב-VS Code).
- **השרת לא מתחבר ל-Atlas?** בחו"ל ה-IP שלך משתנה: Atlas → Network Access → Add Current IP Address.
- **משהו לא עובד?** קודם DevTools → Network: לאן הבקשה יצאה, מה נשלח ומה חזר.
