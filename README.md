# SlashCurate Website - Enhanced with Animations

A modern, animated enterprise website built with React, TypeScript, Tailwind CSS, and Three.js.

## ✨ Features

### Advanced Animations
- **Three.js Background**: Animated 3D particle system with floating geometric shapes
- **Scroll Reveal**: Components animate into view as you scroll
- **Canvas Animations**: Custom data visualization and particle effects
- **Staggered Animations**: Sequential reveal of content elements
- **Hover Effects**: Smooth transitions and micro-interactions

### Sections
- Hero with animated stats
- Services showcase
- Technology Stack with floating particles
- Process timeline
- Case Studies
- About section with data visualization
- Client Testimonials
- FAQ accordion
- Contact form
- Footer

## 🚀 Installation

### Prerequisites
- Node.js 16+ and npm/yarn
- Modern browser with WebGL support

### Setup

1. **Install Dependencies**
```bash
npm install
# or
yarn install
```

2. **Required Dependencies**
Make sure these are in your `package.json`:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1",
    "three": "^0.128.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/three": "^0.128.0",
    "typescript": "^5.0.0",
    "vite": "^4.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24"
  }
}
```

3. **Install Three.js**
```bash
npm install three@0.128.0
npm install --save-dev @types/three
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx                 # Hero section with animations
│   ├── Services.tsx             # Services grid
│   ├── TechStack.tsx           # Technology showcase with particles
│   ├── Process.tsx             # Process timeline
│   ├── CaseStudies.tsx         # Case studies
│   ├── About.tsx               # About with data viz
│   ├── Testimonials.tsx        # Client testimonials
│   ├── FAQ.tsx                 # FAQ accordion
│   ├── Contact.tsx             # Contact form
│   ├── Navigation.tsx          # Navigation bar
│   ├── Footer.tsx              # Footer
│   ├── Progress.tsx            # Scroll progress bar
│   ├── ThreeBackground.tsx     # 3D animated background
│   ├── FloatingParticles.tsx   # Canvas particle effect
│   └── DataVisualization.tsx   # Animated data viz
├── hooks/
│   └── useScrollReveal.ts      # Scroll animation hook
├── App.tsx                      # Main app component
└── index.css                    # Global styles & animations
```

## 🎨 Customization

### Colors
Edit CSS variables in `index.css`:
```css
:root {
  --bg-primary: #020617;
  --bg-secondary: #0f172a;
  --accent-blue: #3b82f6;
  --accent-cyan: #06b6d4;
}
```

### Animation Speed
Adjust animation durations in component classes:
```tsx
className="transition-all duration-700" // Change 700 to your preference
```

### Three.js Particles
Modify particle count and behavior in `ThreeBackground.tsx`:
```typescript
const particleCount = 1500; // Adjust number of particles
```

### Scroll Animation Threshold
Adjust when animations trigger in components:
```typescript
const { ref, isVisible } = useScrollReveal({ 
  threshold: 0.1  // 0-1, how much of element must be visible
});
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lazy loading for animations
- Hardware-accelerated CSS transforms
- Optimized Three.js rendering
- Reduced motion support for accessibility
- Canvas animations use requestAnimationFrame

## 🎯 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

Requires WebGL support for Three.js effects.

## 🔧 Troubleshooting

### Three.js not rendering
- Check browser WebGL support
- Ensure Three.js version is 0.128.0
- Check console for errors

### Animations not working
- Verify Intersection Observer API support
- Check if reduced motion is enabled in OS
- Ensure components are wrapped properly

### Canvas performance issues
- Reduce particle count in FloatingParticles
- Lower quality settings in Three.js renderer
- Disable canvas animations on mobile

## 📄 License

All rights reserved © SlashCurate Technologies Pvt Ltd

## 🤝 Support

For support, email: sales@slashcurate.com
Phone: +91-120-4545-975
