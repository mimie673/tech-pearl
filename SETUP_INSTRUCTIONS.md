# TechPearl MW - Setup Instructions

Welcome! This guide will help you set up and run the TechPearl MW website on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. **Node.js** (version 16 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: Open terminal/command prompt and type `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: Type `npm --version`

## Installation Steps

### Step 1: Extract the ZIP file
Extract the project folder to a location on your computer (e.g., Desktop, Documents, etc.)

### Step 2: Open Terminal/Command Prompt
- **Windows**: Press `Win + R`, type `cmd`, and press Enter
- **Mac/Linux**: Open Terminal application

### Step 3: Navigate to the Project Folder
```bash
cd path/to/TechPearl
```
For example:
```bash
cd C:\Users\YourName\Desktop\TechPearl
```

### Step 4: Install Dependencies
Run the following command to install all required packages:
```bash
npm install
```
This may take a few minutes. Wait until it completes.

### Step 5: Start the Development Server
```bash
npm run dev
```

### Step 6: Open in Browser
Once the server starts, you'll see output like:
```
➜  Local:   http://localhost:8080/
```

Open your web browser and go to: **http://localhost:8080/**

## Stopping the Server

To stop the development server:
- Press `Ctrl + C` in the terminal
- Type `Y` if prompted, then press Enter

## Troubleshooting

### Issue: Port already in use
If port 8080 is in use, Vite will automatically try another port (like 8081).
Check the terminal output for the correct URL.

### Issue: npm command not found
Make sure Node.js is properly installed. Restart your terminal after installation.

### Issue: Module not found errors
Delete the `node_modules` folder and `package-lock.json` file, then run `npm install` again.

### Issue: Permission errors (Mac/Linux)
Try running with sudo: `sudo npm install`

## Project Structure

```
TechPearl/
├── src/               # Source code
│   ├── components/    # Reusable components
│   ├── pages/         # Page components
│   ├── assets/        # Images and media
│   └── lib/           # Utilities
├── public/            # Static files
├── package.json       # Dependencies
└── README.md          # Project documentation
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features

- **Home Page**: Hero section with all information
- **About**: Mission, vision, team, and partners
- **Programs**: Coding workshops, mentorship, bootcamps
- **Blog**: News and success stories
- **Resources**: Learning materials and tutorials
- **Contact**: Contact form and information
- **Admin Dashboard**: Protected admin area (login required)
  - Username: `admin`
  - Password: `one`

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation
- **Shadcn/ui** - UI components

## Need Help?

If you encounter any issues:
1. Make sure all prerequisites are installed
2. Check that you're in the correct directory
3. Try deleting `node_modules` and running `npm install` again
4. Contact the project owner at: techpearlmw1@gmail.com

## Contributing

This is a project for TechPearl Malawi. For any questions or contributions, please reach out to the team.

---

**Built with ❤️ by TechPearl MW**
