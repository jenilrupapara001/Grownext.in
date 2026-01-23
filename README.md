# GrowNext - Official Alibaba.com Partner in India

[![Next.js](https://img.shields.io/badge/Next.js-15.5.7-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-2.91.0-3ECF8E)](https://supabase.com/)

## 🌟 Overview

GrowNext is the official Alibaba.com Channel Partner in India, empowering Indian manufacturers and SMEs to scale their export businesses globally. We provide comprehensive services from seller onboarding to global lead generation, helping businesses transition from local success to international dominance.

### Key Statistics
- **10K+** Export Inquiries Generated
- **500+** Businesses Successfully Onboarded
- **190+** Countries Reached
- **98%** Customer Satisfaction Rate

## ✨ Features

### Core Services
- **Alibaba Onboarding**: Complete seller account setup, compliance verification, and category validation
- **Product Optimization**: SEO research, professional copywriting, and high-resolution visuals for better rankings
- **Global Marketing**: Data-driven PPC campaigns and lead management for maximum ROI

### Platform Features
- **Responsive Design**: Optimized for all devices with modern UI/UX
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Real-time Notifications**: Toast notifications for user feedback
- **Form Validation**: Robust form handling with React Hook Form and Zod
- **Database Integration**: Supabase for backend services and data management

### Supported Sectors
- Industrial Machinery
- Textiles & Apparel
- Handicrafts & Decor
- Agriculture & Food Processing

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### UI Components & Styling
- **shadcn/ui** - Modern component library built on Radix UI
- **Lucide React** - Beautiful & consistent icons
- **Framer Motion** - Animation library for React
- **Lenis** - Smooth scrolling library

### Backend & Database
- **Supabase** - Open source Firebase alternative
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Bun** - Fast JavaScript runtime (alternative to npm)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- **Git** for version control

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/grownext.git
   cd grownext
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install

   # Using bun (recommended)
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` and add your configuration:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Other environment variables as needed
   ```

4. **Run the development server**
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev

   # Using bun
   bun dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
grownext/
├── .env.local                    # Environment variables
├── .gitignore                    # Git ignore rules
├── bun.lock                      # Bun lockfile
├── components.json               # shadcn/ui configuration
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Project dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # Project documentation
├── tsconfig.json                 # TypeScript configuration
├── .orchids/                     # Orchids visual editing tool
├── public/                       # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── src/
    ├── app/                      # Next.js App Router pages
    │   ├── favicon.ico
    │   ├── globals.css           # Global styles
    │   ├── layout.tsx            # Root layout
    │   ├── page.tsx              # Home page
    │   ├── alibaba-global-selling/
    │   ├── company/
    │   ├── contact/
    │   └── services/
    ├── components/               # Reusable React components
    │   ├── Footer.tsx
    │   ├── Navbar.tsx
    │   ├── SmoothScroll.tsx
    │   └── ui/                   # shadcn/ui components
    ├── hooks/                    # Custom React hooks
    │   └── use-mobile.ts
    └── lib/                      # Utility functions and configurations
        ├── supabase.ts
        └── utils.ts
```

## 📜 Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🔧 Configuration

### Environment Variables

The application uses the following environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |

### Tailwind CSS

The project uses Tailwind CSS v4 with custom configuration. Key features:
- Utility-first approach
- Custom color palette with primary brand colors
- Responsive design utilities
- Dark mode support (via next-themes)

### ESLint

Code quality is maintained with ESLint. The configuration includes:
- Next.js recommended rules
- TypeScript support
- React best practices

## 🤝 Contributing

We welcome contributions to GrowNext! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** and ensure code quality
4. **Run tests** and linting: `npm run lint`
5. **Commit your changes**: `git commit -m 'Add some feature'`
6. **Push to the branch**: `git push origin feature/your-feature-name`
7. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful commit messages
- Ensure responsive design
- Test on multiple devices and browsers
- Maintain code consistency with existing patterns

## 📄 License

This project is proprietary software owned by GrowNext. All rights reserved.

## 📞 Contact

**GrowNext - Official Alibaba.com Partner in India**

- **Website**: [https://grownext.com](https://grownext.com)
- **Email**: contact@grownext.com
- **Phone**: +91 XXXXX XXXXX
- **Address**: [Your Business Address], India

### Support
- **Business Inquiries**: Schedule a free consultation
- **Technical Support**: Response within 4 hours
- **Export Audit**: Comprehensive business assessment

---

**Ready to scale your exports globally?** Join 500+ successful Indian exporters. Book your free strategic audit today!

[![Book Free Consultation](https://img.shields.io/badge/Book_Consultation-FF6600?style=for-the-badge&logo=alibaba&logoColor=white)](/contact)
