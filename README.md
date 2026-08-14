# 🍽️ IIITDM Mess Menu Application

A sleek, responsive, and interactive digital mess dining portal designed for **IIITDM (Indian Institute of Information Technology, Design and Manufacturing)** students.

---

## ✨ Features

- 🌅 **Dynamic Sky Time Atmospheres**: Page background smoothly transitions between:
  - **Breakfast**: Sunrise Gold 🌅 (*"First light, first bite"*)
  - **Lunch**: Afternoon Sunbeam ☀️ (*"Fuel for the midday hustle"*)
  - **Snacks**: Sunset Terracotta 🌇 (*"A little golden-hour indulgence"*)
  - **Dinner**: Night Moon & Twilight 🌙 (*"Winding down under the stars"*)
- ⏱️ **Live Analog Clock**: Real-time ticking SVG analog clock in the header.
- 🌓 **Automatic Dark / Light Theme**: Flips to dark moonlit mode in the evening (6:00 PM – 6:00 AM) and light mode during daytime.
- 📱 **Mobile & Desktop Responsive Layout**:
  - **Mobile**: Single-column card layout (~80% width), horizontal swipe gestures, and inline schedule preview.
  - **Desktop**: Centered grid layout (`1120px`), main meal card carousel with chevron navigation buttons, and a dedicated **Next Up Today** schedule sidebar.
- ✨ **Special Dinner Menu Modal**: Displays Veg & Non-Veg rotation combos, accompaniments, and desserts on special dining days.
- 📅 **Day & Meal Selector**: Quick tap navigation for days (`Sun` - `Sat`) and meal tabs (`Breakfast`, `Lunch`, `Snacks`, `Dinner`).
- ⌨️ **Keyboard Navigation**: Use Left (`←`) and Right (`→`) arrow keys to navigate between meals.

---

## 🛠️ Tech Stack

- **HTML5 & Vanilla CSS3**: CSS Variables, Glassmorphism, Fluid `clamp()` typography.
- **Vanilla JavaScript (ES6+)**: Zero external framework dependencies for 60fps performance and instant loading.
- **Typography**: Google Fonts (*Newsreader* Serif & *Plus Jakarta Sans*).

---

## 🚀 Local Setup & Usage

Simply open `index.html` in any modern web browser:

```bash
# Double-click index.html or open via browser
open index.html
```

Or serve locally with Python:

```bash
python -m http.server 9000
```

Access at `http://localhost:9000`.

---

## 📂 Project Structure

```text
mess_menu/
├── index.html        # Main single-file application (HTML, CSS, JS)
├── app.py            # Streamlit entrypoint (optional)
├── requirements.txt  # Python requirements
└── README.md         # Project documentation
```

---

## 🔒 License & Privacy

Private Repository · Developed for IIITDM Mess Dining Portal (2026 - 2027).
