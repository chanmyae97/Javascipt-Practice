# Text Animation with Tailwind CSS

A beautiful text animation project using Tailwind CSS for styling and animations.

## Prerequisites

Before you begin, ensure you have the following installed on your computer:
- [Node.js](https://nodejs.org/) (which comes with npm)

## Installation

1. Clone the repository to your local machine:
```bash
git clone <repository-url>
cd Text-Animation
```

2. Install the project dependencies:
```bash
npm install
```

## Development

To start the development server and watch for CSS changes:

```bash
npm run build
```

This will:
- Watch for changes in the `src/input.css` file
- Compile Tailwind CSS
- Output the processed CSS to `style.css`

## Project Structure

```
├── src/
│   └── input.css     # Source Tailwind CSS file
├── index.html        # Main HTML file
├── index.js          # JavaScript file
├── style.css         # Compiled CSS output
└── tailwind.config.js # Tailwind configuration
```

## Dependencies

- tailwindcss: ^3.4.17
- autoprefixer: ^10.4.20
- postcss: ^8.5.3

## License

This project is open source and available under the [MIT License](LICENSE).