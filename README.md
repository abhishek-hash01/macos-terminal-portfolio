# MacOS Terminal Portfolio - Astro Theme

![MacOS Terminal Portfolio](https://storage.googleapis.com/v-staff/theme-cover.png)

An interactive macOS-inspired portfolio theme for Astro, featuring an AI-powered terminal chat, dynamic backgrounds, and a responsive dock interface.

## Features

- OpenAI-powered terminal chat
- Dynamic rotating wallpapers
- Responsive macOS-style dock
- Built-in SEO optimization
- Automated sitemap generation
- Customizable system prompts
- Tailwind CSS styling
- Mobile-friendly design

## Tech Stack

- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [OpenAI API](https://openai.com/api)

## Integrations

- @astrojs/react
- @astrojs/vercel
- @astrolib/seo
- @astrojs/sitemap

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- OpenAI API key

### Installation

1. Clone the repository:
   `git clone https://github.com/yourusername/macos-terminal-portfolio`

2. Install dependencies:
   `npm install`

3. Create a .env file in the root directory:
   `cp .env.example .env`

4. Add your OpenAI API key to the .env file:
   `OPENAI_API_KEY=your_api_key_here`

5. Start the development server:
   `npm run dev`

## Customization

### Personal Information

Update the following files with your information:

1. `src/components/global/MacTerminal.tsx`:

- Modify welcomeMessage and systemPrompt with your details
- Customize placeholder messages

2. `src/pages/index.astro`:

- Update SEO metadata
- Add your website URL

3. `src/components/global/BaseHead.astro`:

- Update meta tags
- Add your favicon

### Background Images

Replace or add images in `src/assets/images/` directory.

### Dock Icons

Modify `src/components/global/DesktopDock.tsx` and MobileDock.tsx to customize your dock shortcuts.

## Configuration

### SEO

Update SEO metadata in:

- `src/pages/index.astro`
- `src/components/global/BaseHead.astro`

### Sitemap

The sitemap is automatically generated using @astrojs/sitemap. Configure in astro.config.mjs.

## Deployment

This theme is configured for deployment on Vercel. Update astro.config.mjs if you prefer a different platform.

## License

MIT License - feel free to use this theme for your portfolio!

## Contributing

Contributions, issues, and feature requests are welcome!

## Acknowledgments

- Inspired by macOS interface
- Powered by OpenAI's API
- Built with Astro

##Credits

Johnny Culbreth, Austin
