# MSL Philippines Website

This project is a React implementation of the MSL Philippines website, featuring the MSL Collegiate Cup Season 2 tournament.

## Technologies Used

- React 17
- JavaScript
- Tailwind CSS
- React Router

## Features

- **Interactive Event Calendar**: Navigate between months to view tournament schedules
- **Responsive Layout**: Fully responsive design for desktop, tablet, and mobile views
- **MSL Collegiate Cup S2**: Featured tournament information and schedules
- **University Rivals Tournament**: Details about the multi-region university competition

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

- `/src/Pages` - Main page components
  - `/MCCMAIN` - MSL Collegiate Cup main page
  - `/MCCCALENDARFINAL` - Tournament calendar page
- `/src/components` - Reusable UI components
  - `/Header` - Navigation header
  - `/Footer` - Site footer
  - `/Button`, `/Text`, `/Img` - Basic UI components
- `/public/images/` - Contains all images used in the website

## Key Components

- **Header**: Navigation with dropdown menus for both desktop and mobile
- **MCCHeaderSection**: Main section for the MSL Collegiate Cup with tournament categories
- **EventCalendarSection**: Interactive tournament calendar with navigation
- **Footer**: Site footer with links and information

## Design Implementation

This project implements a gaming-focused design with:

- Dark theme with gold accents (#F3C718)
- Responsive navigation with dropdown menus
- Custom date boxes for tournament events
- Interactive calendar with month navigation
- Status indicators for upcoming events

## Image Assets

The project uses the following key images:

- `/images/MSL LOGO.png` - MSL Philippines logo
- `/images/MCC_HLOGO.png` - Collegiate Cup header logo
- `/images/MCC2_BG.png` - Main background for the Collegiate Cup page
- `/images/MCC2_CALENDAR_BG.png` - Background for the calendar page
- `/images/CalendarFrame.png` - Decorative frame for the calendar
- `/images/LeftButton.png` & `/images/RightButton.png` - Calendar navigation buttons
- `/images/Overview.png`, `/images/OrgEnlist.png`, etc. - Category thumbnails
- `/images/MLBB NEW LOGO.png` - Mobile Legends: Bang Bang logo
