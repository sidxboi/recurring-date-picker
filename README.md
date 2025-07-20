# 📆 Recurring Date Picker Component

A modern, reusable React/Next.js component to select recurring dates — inspired by TickTick's scheduling UI. Built with clean design, modular structure, and full support for customization and preview.

---

## 🚀 Features

- ✅ Select recurrence: **Daily**, **Weekly**, **Monthly**, **Yearly**
- 🔁 Custom intervals (every X days/weeks/etc.)
- 🗓️ Pick specific weekdays (for weekly recurrences)
- 🧠 "Second Tuesday of every month"–style pattern logic *(coming soon)*
- 📅 Start and optional end dates
- 📍 Live mini calendar preview
- ♻️ Fully reactive using Zustand state management
- 💅 Beautiful modern UI with Tailwind CSS
- 🧪 Unit + integration tested

---

## 📸 Demo

▶️ Watch demo: [Loom Video](#)  
💻 Live version: [Try on Vercel](#)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Testing**: Jest + React Testing Library
- **Language**: TypeScript

---

## 📁 Folder Structure

```
📦 recurring-date-picker
├── app/                    # Next.js app directory
│   └── page.tsx           # Main UI page
├── components/            # UI components (DateRangePicker, etc.)
├── store/                 # Zustand store
├── utils/                 # Recurrence logic
├── styles/                # Tailwind & global CSS
├── __tests__/             # Unit tests
├── tests/                 # Integration tests
├── public/                # Assets (optional)
├── .gitignore
├── tailwind.config.ts
├── tsconfig.json
└── README.md              # You're here!
```

---

## 📦 Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/sidxboi/recurring-date-picker.git

# 2. Move into the project
cd recurring-date-picker

# 3. Install dependencies
npm install

# 4. Run the app
npm run dev
```

---

## ✅ Running Tests

```bash
# Run unit + integration tests
npm run test
```

---

## 🔮 Future Improvements

- [ ] Add "Second Tuesday" style logic
- [ ] Add time picker (optional)
- [ ] Export recurring dates as ICS file
- [ ] Add user presets / templates

---

## 🙋‍♂️ Author

**Sidhant Ranjan Medhi**  
[LinkedIn](https://www.linkedin.com/in/srm7515) • [GitHub](https://github.com/sidxboi)

---

## 📜 License

This project is part of a frontend assignment. You are free to reuse the structure and logic with credit.
