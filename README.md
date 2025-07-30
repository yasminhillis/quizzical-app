# 🧠 Quizzical - React Quiz App

Welcome to **Quizzical**, a simple yet engaging quiz application built with **React**. Users can test their knowledge with multiple-choice questions, select answers, and receive instant feedback upon submission.

---

## ✨ Features

- ✅ Dynamically rendered multiple-choice questions
- 🎯 Single answer selection per question
- 🟦 Highlight of selected options before submission
- 🟩 Correct answer highlight (green) after grading
- 🟥 Wrong answer highlight (red) after grading
- 📊 Score summary display
---

## 🧩 Tech Stack

- **React** (Functional components + Hooks)
- **Custom state management** using `useState`, `useEffect`
- **Dynamic rendering** with `.map()` and memoized options

---

## 📂 Project Structure

src/
├── App.jsx # Main logic and state management
├── components/
│ └── Question.jsx # Renders each question and options
├── data.js # Static or fetched question data
├── utils.js # Utility function: insertAtRandomIndex
├── App.css # Styling for UI and states
└── index.js # React root

---

## 🧪 Grading Logic

After clicking **"Check answers"**, the app will:

- Compare selected answers to correct answers
- Count and display correct selections
- Visually highlight:
  - ✅ Correct answers with `.correct-answer` (green)
  - ❌ Incorrect selections with `.wrong-answer` (red)
  - ☑️ User's selected answers with `.selected-answer` (before grading)

---
