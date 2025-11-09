# Nishtha Patel - Personal Portfolio Website

## Features
- ✨ Fully responsive design
- 🌓 Light/Dark theme toggle
- 📄 Downloadable resume
- 📱 Mobile-friendly navigation
- 🎨 Modern UI with smooth animations

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
