# Vite Calculator

A simple calculator app built with React and TypeScript, bootstrapped using [Vite](https://vitejs.dev/).

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Responsive UI with a classic calculator layout
- Clear and Delete functionality
- Modern React functional components with hooks

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd vite-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Build for Production

To build the app for production:
```bash
npm run build
```
The output will be in the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
  components/
    calculator.tsx   # Main calculator component
  App.tsx            # App entry point
  main.jsx           # Vite/React bootstrap
public/              # Static assets
```

## Usage

- Click the number and operation buttons to enter your calculation.
- Use `Clear` to reset the display, and `Delete` to remove the last digit.
- Press `=` to evaluate the current expression.

## Customization

- You can modify the button layout or add more operations by editing `src/components/calculator.tsx`.
- Styles can be updated in `src/App.css` or `src/index.css`.

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/).*
