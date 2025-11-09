# Nishtha Patel - Personal Portfolio Website

## Features
- ✨ Fully responsive design
- 🌓 Light/Dark theme toggle
- 📄 Downloadable resume
- 📱 Mobile-friendly navigation
- 🎨 Modern UI with smooth animations

## How to Update Your Resume

### Option 1: Replace the PDF file
1. Navigate to `assets/resume/` folder
2. Delete or replace the existing `Nishtha_Patel_Resume.pdf` file
3. Add your new resume PDF with the same filename: `Nishtha_Patel_Resume.pdf`
4. The download link will automatically work with your new resume

### Option 2: Use a different filename
1. Place your new resume PDF in `assets/resume/` folder
2. Open `index.html` file
3. Find line 136: `<a href="./assets/resume/Nishtha_Patel_Resume.pdf" download class="resume-btn">`
4. Change the filename to match your new resume file
5. Example: `<a href="./assets/resume/My_New_Resume.pdf" download class="resume-btn">`

## Theme Toggle
- Click the sun/moon icon in the top-right corner to switch between light and dark themes
- Your theme preference is automatically saved in your browser

## Customization

### Personal Information
Update your information in `index.html`:
- Lines 49-51: Name and title
- Lines 77-78: Email address
- Lines 94-95: Birthday
- Lines 107-108: Location
- Line 126: LinkedIn URL

### Resume Content
Update your education, experience, and skills in `index.html`:
- Education section: Lines 292-313
- Experience section: Lines 332-378
- Skills section: Lines 388-468
- Portfolio/Projects: Lines 544-615

## Project Structure
```
├── index.html              # Main HTML file
├── server.js              # Node.js server for local development
├── assets/
│   ├── css/
│   │   └── style.css      # All styling including theme CSS
│   ├── js/
│   │   └── script.js      # Interactive functionality + theme toggle
│   ├── images/            # All images and icons
│   │   └── my-avatar.png  # Your profile photo
│   └── resume/            # Resume PDF folder
│       └── Nishtha_Patel_Resume.pdf  # Your downloadable resume
├── .gitignore
└── README_INSTRUCTIONS.md  # This file
```

## Running Locally

### Using Node.js (Recommended for Replit)
```bash
node server.js
```
Then open your browser to `http://localhost:5000`

### Using Python
```bash
python -m http.server 8000
```
Then open your browser to `http://localhost:8000`

### Using Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Uploading to GitHub
```bash
git add .
git commit -m "Updated portfolio website"
git push origin main
```

## Deployment Options
- **GitHub Pages**: Enable in repository settings
- **Netlify**: Drag and drop the folder
- **Vercel**: Import from GitHub
- **Replit**: Already configured with server.js

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Credits
- Template: vCard Personal Portfolio
- Customized for: Nishtha Patel
- Icons: Ionicons
- Fonts: Google Fonts (Poppins)

## License
MIT License - Feel free to use and modify for your own portfolio!
