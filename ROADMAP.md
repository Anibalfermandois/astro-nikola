# Solar Panel Company Website Roadmap

## Project Overview
A corporate website for a solar panel company targeting households, built with Astro and React. The website will be primarily static with a dynamic contact form.

## Color Scheme
- Primary Blue: #072F47 (Dark blue for corporate trust)
- Accent Yellow: #FBC347 (Energetic yellow for CTAs and highlights)

## Page Structure

### 1. Home Page (`/`)
- Hero section with striking solar panel imagery
- Value proposition
- Large CTA button to Contact/Form page
- Quick benefits section
- Featured products preview
- Customer testimonials preview
- Latest projects showcase

### 2. About Us (`/about`)
- Company story
- Mission and vision
- Team section
- Expertise and certifications
- Years in business
- Service areas

### 3. Products (`/products`)
- Solar panel catalog
- Product categories
- Detailed specifications
- Installation process
- Warranty information
- Energy savings calculator
- CTA buttons to contact form

### 4. Projects (`/projects`)
- Case studies
- Before/after installations
- Success stories
- Energy savings metrics
- Customer testimonials
- Photo gallery

### 5. Contact Form Page (`/contact`) [Priority Focus]
- Comprehensive contact form
- Lead capture fields:
  - Name
  - Email
  - Phone
  - Address
  - Property type
  - Current energy bill
  - Best time to contact
- Form submission handling
- Thank you message
- Alternative contact methods

## Technical Components

### Layout Components
- `MainLayout.astro`
- `Header.astro`
- `Footer.astro`
- `Navigation.jsx`

### Shared Components
- `Button.jsx` (with yellow variant for CTAs)
- `Card.jsx`
- `TestimonialCard.jsx`
- `ProductCard.jsx`
- `Gallery.jsx`
- `ContactForm.jsx`

### Features
- Responsive design
- Fast loading images with optimization
- Form validation
- Simple animations
- SEO optimization

## Implementation Phases

### Phase 1: Setup & Structure
1. Initialize Astro project with React integration
2. Set up project structure
3. Implement main layout components
4. Create basic routing

### Phase 2: Core Pages
1. Develop Home page
2. Create About Us page
3. Build Products page
4. Implement Projects page

### Phase 3: Contact Form [Priority]
1. Design and implement contact form
2. Add form validation
3. Set up form submission handling
4. Implement success/error states

### Phase 4: Enhancement
1. Add animations
2. Optimize images
3. Implement SEO
4. Performance optimization

## Next Steps
1. Initialize Astro project
2. Install necessary dependencies
3. Set up project structure
4. Begin with layout components
5. Focus on Contact Form page as the priority

## Technical Requirements
- Astro
- React
- Form validation library (e.g., Zod)
- Image optimization
- CSS solution (Tailwind recommended) 