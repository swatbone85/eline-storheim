# Eline Storheim - Classical Conductor Website

A professional website for classical conductor Eline Storheim, showcasing her performances, biography, media, and contact information.

## Overview

This website serves as a digital presence for Eline Storheim, featuring:

- Professional biography and background
- Upcoming performances calendar
- Media gallery with videos and recordings
- Press coverage and reviews
- Contact and booking information
- Admin panel for content management

## Technologies Used

- **Framework**: SvelteKit
- **Styling**: TailwindCSS
- **Typography**: Playfair Display for headings, Source Sans Pro for body text
- **Icons**: Heroicons
- **Deployment**: Vercel/Netlify (recommended)

## Features

### Public Pages

- **Home**: Welcome page with hero section, brief biography, upcoming performances, and contact information
- **About**: Detailed biography, education, career highlights, and testimonials
- **Performances**: Calendar of upcoming performances with details and ticket links
- **Media**: Videos of performances, interviews, media appearances, and recordings
- **Contact**: Contact form and management information

### Admin Panel

- **Authentication**: Secure login for content management (demo: username "eline", password "admin123")
- **Performances**: Add, edit, and delete performance information
- **Media**: Manage media content (videos, recordings)
- **Press**: Manage press articles and reviews

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Setup

1. Clone this repository
2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Running Locally

Start the development server:

```bash
npm run dev
# or
pnpm dev

# To open the app in a new browser tab
npm run dev -- --open
```

### Building for Production

To create a production build:

```bash
npm run build
# or
pnpm build
```

You can preview the production build with:

```bash
npm run preview
# or
pnpm preview
```

## Project Structure

```
eline-solheim/
├── src/
│   ├── app.css            # Global styles
│   ├── app.html           # HTML template
│   ├── lib/               # Shared components and utilities
│   └── routes/            # SvelteKit routes
│       ├── +layout.svelte # Site-wide layout
│       ├── +page.svelte   # Home page
│       ├── about/         # About page
│       ├── performances/  # Performances page
│       ├── media/         # Media page
│       ├── contact/       # Contact page
│       └── admin/         # Admin panel
├── static/                # Static assets (images, favicon)
└── package.json           # Project dependencies and scripts
```

## Customization

### Adding Content

Content can be managed through the Admin panel at `/admin` after logging in with the provided credentials.

### Styling

The website uses TailwindCSS for styling. The color scheme is primarily based on slate and white tones, providing an elegant and classical aesthetic suitable for a classical music professional.

### Images

- Replace placeholder images in the `static/` folder with actual photos
- Recommended dimensions:
  - Hero image: 1920x1080px
  - Conductor portrait: 800x1200px
  - Performance thumbnails: 600x400px

## Deployment

This website can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `build` directory to your preferred hosting provider
3. For SvelteKit's server-side features, deploy to a compatible platform like Vercel or Netlify

## Future Enhancements

- Newsletter subscription feature
- Integration with ticketing services
- Multi-language support
- Audio player for music samples
- Calendar integration (iCal/Google Calendar)

## License

[MIT License](LICENSE)

## Credits

- Design: [Your Name]
- Development: [Your Name]
- Photography: [Credit placeholder]
  npm install

# or

pnpm install
