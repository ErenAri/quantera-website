# Quantera (QNR) - Official Website

## About Quantera

**Quantera (QNR)** is an ERC-20 utility token built on the Ethereum blockchain, designed to power a modular, scalable, and security-first decentralized ecosystem. With a fixed supply of **1 billion tokens**, Quantera prioritizes liquidity safety, ecosystem incentives, staking rewards, and a balanced multi-phase growth strategy.

### Key Features
- **Total Supply**: 1,000,000,000 QNR (Fixed, non-inflationary)
- **Network**: Ethereum (ERC-20)
- **Utility**: Governance, staking, ecosystem services
- **Security**: Verified smart contracts, locked liquidity

---

## Website Architecture

This is a modern, high-performance website built with **Next.js 15** (App Router), featuring the **"Ethereal Nexus"** design system - a premium glassmorphic aesthetic tailored for DeFi projects.

### Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Recharts** | Data visualization (tokenomics charts) |
| **React Icons** | Icon library |

### Design System: "Ethereal Nexus"

The website implements a cohesive design language featuring:

- **Glassmorphism**: Frosted glass cards with `backdrop-blur-xl`
- **Interactive Background**: Multi-layer parallax constellation with mouse tracking
- **Modern Buttons**: Neon glows, animated borders, smooth transitions
- **Consistent Headers**: Gradient backgrounds with radial overlays across all pages
- **Premium Typography**: Proper hierarchy with centered headers and readable body text

### Project Structure

```
quantera-website/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── config/              # Configuration files (site, tokenomics, roadmap, contract)
│   │   ├── tokenomics/          # Tokenomics page
│   │   ├── roadmap/             # Roadmap page
│   │   ├── whitepaper/          # Whitepaper page
│   │   ├── contract/            # Contract & Security page
│   │   ├── how-to-buy/          # How to Buy guide
│   │   ├── faq/                 # FAQ page
│   │   ├── legal/               # Legal & Disclaimers
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── globals.css          # Global styles & animations
│   ├── components/
│   │   ├── layout/              # Navbar, Footer
│   │   ├── sections/            # Page-specific sections
│   │   │   ├── home/           # Hero, TokenSnapshot, Features
│   │   │   ├── tokenomics/     # Tokenomics components
│   │   │   ├── roadmap/        # Roadmap timeline components
│   │   │   ├── whitepaper/     # Whitepaper viewer
│   │   │   └── contract/       # Contract technical details
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── Button.tsx      # Modern button component
│   │   │   ├── GlassCard.tsx   # Glassmorphic card
│   │   │   └── InteractiveBackground.tsx  # Parallax constellation
│   │   └── seo/                 # SEO components (JSON-LD)
│   └── lib/
│       └── utils.ts             # Utility functions (cn helper)
├── public/                       # Static assets
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

---

## Design Features

### Interactive Background
- **Parallax Constellation**: Three layers of stars (white, gold, purple) that move at different speeds relative to mouse position
- **Nebula Clouds**: Subtle gradient overlays for atmospheric depth
- **Performance Optimized**: Smooth 60fps animations with CSS transforms

### Component Library

#### `<Button>` Component
Three variants for consistent interactions:
- **Primary**: Golden gradient with neon glow
- **Secondary**: Glassmorphic with subtle glow
- **Ghost**: Minimal styling for tertiary actions

#### `<GlassCard>` Component
Reusable glassmorphic container with:
- Frosted glass effect (`backdrop-blur-xl`)
- Subtle borders and shadows
- Optional hover effects

---

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/quantera-website.git
cd quantera-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

---

## SEO & Performance

### SEO Features
- **Comprehensive Metadata**: Title, description, keywords, OpenGraph, Twitter cards
- **JSON-LD Schemas**: Cryptocurrency and Organization structured data
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Crawling rules at `/robots.txt`
- **Semantic HTML**: Proper heading hierarchy and ARIA labels

### Performance Optimizations
- Next.js 15 App Router for optimal performance
- Image optimization with `next/image`
- Font optimization with `next/font`
- Minimal dependencies for fast load times

---

## Configuration

### Site Configuration
Edit `src/app/config/site.ts` to update:
- Site metadata (title, description, URL)
- Social media links
- External links (Etherscan, Uniswap, etc.)

### Tokenomics Configuration
Edit `src/app/config/tokenomics.ts` to update:
- Total supply
- Token allocations
- Vesting schedules

### Contract Information
Edit `src/app/config/contract.ts` to update:
- Contract address
- Network details
- Security information

---

## Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with zero configuration

### Environment Variables
No environment variables required for basic deployment.

---

## Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, features, and token snapshot |
| Tokenomics | `/tokenomics` | Token allocation and distribution charts |
| Roadmap | `/roadmap` | Multi-phase development timeline |
| Whitepaper | `/whitepaper` | Technical documentation |
| Contract | `/contract` | Smart contract details and security |
| How to Buy | `/how-to-buy` | Step-by-step purchase guide |
| FAQ | `/faq` | Frequently asked questions |
| Legal | `/legal` | Terms, disclaimers, and privacy policy |

---

## Design Principles

1. **Professional First**: Clean, trustworthy aesthetic for DeFi credibility
2. **User-Centric**: Clear information hierarchy and easy navigation
3. **Performance**: Fast load times and smooth interactions
4. **Responsive**: Mobile-friendly design for all screen sizes
5. **Accessible**: WCAG-compliant with semantic HTML


---

## License

This project is licensed under the MIT License.

---

## Link

- **Website**: [https://quantera.io](https://quantera.site)


