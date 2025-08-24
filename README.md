# The Filmkaar Production Website

A modern, responsive website for The Filmkaar Production film house built with Next.js, featuring video sliders, animations, and a cinematic design.

## Features

- 🎬 Hero video slider with mute/unmute controls
- 🎨 Modern cinematic design with red and gold theme
- 📱 Fully responsive layout
- 🎭 Films showcase section with filtering
- 📖 About section with company information
- 📞 Contact footer with social media links
- 📄 Privacy Policy, Terms of Service, and Careers pages

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine (version 18 or higher).

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Build for Production

To create a production build:

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── privacy-policy/     # Privacy policy page
│   ├── terms-of-service/   # Terms of service page
│   └── careers/            # Careers page
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── hero-slider.tsx     # Video slider component
│   ├── films-section.tsx   # Films showcase
│   ├── about-section.tsx   # About company section
│   ├── footer.tsx          # Footer with contact info
│   └── ui/                 # Reusable UI components
├── public/
│   └── images/             # Static images
└── lib/
    └── utils.ts            # Utility functions
\`\`\`

## Customization

### Adding Your Own Videos

Replace the sample videos in `components/hero-slider.tsx` with your own film teasers:

\`\`\`tsx
const videos = [
  {
    id: 1,
    title: "Your Film Title",
    description: "Your film description",
    videoUrl: "/path-to-your-video.mp4"
  }
  // Add more videos...
];
\`\`\`

### Updating Company Information

Edit the content in:
- `components/about-section.tsx` - Company story and statistics
- `components/footer.tsx` - Contact information and address
- Individual pages for privacy policy, terms, and careers

### Styling

The website uses Tailwind CSS with a custom red and gold color scheme. Main colors:
- Primary Red: `#DC2626` (red-600)
- Gold Accent: `#F59E0B` (yellow-500)
- Dark Background: `#1F2937` (gray-800)

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## Support

For any issues or questions, please contact the developer:
**Design & Developed by Tanishq Rawat**
