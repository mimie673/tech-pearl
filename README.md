# TechPearl MW

## About TechPearl Malawi

TechPearl Malawi is a non-profit organization dedicated to empowering girls and women in Malawi through technology education, mentorship, and career opportunities. Our mission is to bridge the gender gap in technology by providing accessible programs, resources, and a supportive community for aspiring female tech leaders.

### Contact Information
- **Email:** techpearlmw1@gmail.com
- **Phone:** +265 88 18 74 766
- **Address:** P O Box x95, Crossroads, Lilongwe, Malawi

### Social Media
- [Facebook](https://web.facebook.com/techpearlmw)
- [Twitter/X](https://x.com/techpearlmw?t=Rjjqg49BEbM_pGaHV3y4Lg&s=08)
- [Instagram](https://www.instagram.com/techpearlmw/)
- [LinkedIn](https://www.linkedin.com/in/techpearl-malawi-405682201)
- [YouTube](https://www.youtube.com/@techpearlmalawi7099)

## Project Overview

This is the official website for TechPearl MW, built with modern web technologies to provide an engaging and responsive user experience. The website features:

- **Homepage:** Hero section with call-to-action buttons
- **About Page:** Mission, vision, team members, and partners
- **Programs:** Coding workshops, tech mentorship, leadership bootcamp, and upcoming events
- **Blog:** News, success stories, and updates
- **Resources:** Educational materials and newsletter subscription
- **Join Us:** Community membership registration
- **Contact:** Contact form with map integration
- **Admin Dashboard:** Content management system for events, blog posts, and settings

## Features

✅ Fully responsive design (mobile, tablet, desktop)  
✅ Multi-page routing with React Router  
✅ Admin dashboard with CRUD operations  
✅ Image upload functionality for events and blog posts  
✅ Form validation (email, Malawian phone numbers)  
✅ Active page highlighting in navigation  
✅ Mobile hamburger menu  
✅ Toast notifications for user feedback  
✅ Hot pink and black branding theme  

## How to run this project

This project requires Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Navigate to the project directory
cd TechPearl

# Step 2: Install the necessary dependencies
npm install

# Step 3: Start the development server
npm run dev
```

The application will open at `http://localhost:8080`

## Project Structure

```
TechPearl/
├── public/               # Static assets
│   ├── favicon.svg      # Browser tab icon
│   └── robots.txt       # SEO configuration
├── src/
│   ├── assets/          # Images (LOGO.jpg, tech1-9.jpg)
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── EventRegistration.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── JoinUs.tsx
│   │   ├── Navigation.tsx
│   │   ├── Programs.tsx
│   │   └── Resources.tsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   │   ├── AdminDashboard.tsx
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx         # Main app component with routing
│   ├── index.css       # Global styles and Tailwind
│   └── main.tsx        # Application entry point
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Technologies Used

This project is built with modern web technologies:

- **Vite 5.4.19** - Fast build tool and development server
- **React 18+** - UI library with TypeScript
- **TypeScript** - Type-safe JavaScript
- **React Router v6** - Client-side routing
- **shadcn/ui** - Component library built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **TanStack React Query** - Data fetching and state management

## Available Scripts

```sh
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Deployment

You can deploy this project to any static hosting service:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to [Netlify](https://netlify.com)

### GitHub Pages
1. Install: `npm install -D gh-pages`
2. Add to `package.json`: `"homepage": "https://yourusername.github.io/TechPearl"`
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run: `npm run deploy`

### Other Options
- Cloudflare Pages
- AWS Amplify
- Firebase Hosting

## Color Theme

The website uses a custom hot pink and black color scheme:

- **Primary:** Hot Pink (#FF1B8D / hsl(328 100% 54%))
- **Secondary:** Deep Pink (#E91E63 / hsl(340 82% 52%))
- **Accent:** Light Pink (hsl(328 100% 96%))
- **Background:** White / Black (for dark mode)

## Admin Dashboard

Access the admin dashboard at `/admin` to manage:

- Event registrations (view, edit, delete)
- Events (create, edit, delete with image upload)
- Blog posts (create, edit, delete with image upload)
- Website settings (social media links)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 TechPearl MW. All rights reserved.

## Contributing

For contributions or questions, please contact us at techpearlmw1@gmail.com

---

**Built with ❤️ for empowering women in tech**

Then deploy the `dist` folder to your hosting service of choice.
