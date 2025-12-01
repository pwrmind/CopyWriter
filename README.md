# Social Media Text Editor

A modern, feature-rich text editor designed specifically for social media content creation. Built as a Single Page Application (SPA) with a clean interface and powerful editing capabilities.

![Text Editor Preview](https://via.placeholder.com/800x400.png?text=Social+Media+Text+Editor)

[Live demo](https://pwrmind.github.io/CopyWriter/)

## Features

### 📝 Core Editing
- **Rich Text Editing**: Contenteditable-based editor with familiar keyboard shortcuts
- **Multiple Fonts**: 5 popular web fonts (Roboto, Open Sans, Lato, Montserrat, Source Sans Pro)
- **Font Sizing**: 8 different font sizes from 12px to 32px
- **Clipboard Operations**: Cut, copy, paste with visual feedback
- **Undo/Redo**: Full history tracking with 50-step undo/redo capability

### 🔍 Advanced Features
- **Find & Replace**: Modal-based search with case-sensitive option
- **Text Statistics**: Real-time character, word, sentence, and paragraph counts
- **Reading Time**: Estimated reading time calculation (200 WPM)
- **Auto-save**: Automatic content saving to localStorage every 30 seconds
- **Content Persistence**: Content preserved across browser sessions

### 🎨 User Interface
- **Responsive Design**: Works on desktop and mobile devices
- **Clean Toolbar**: Grouped tools for better organization
- **Status Bar**: Real-time statistics display
- **Modal Windows**: Non-intrusive search/replace interface
- **Smooth Animations**: Alpine.js-powered interactive elements

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with Bootstrap 5 integration
- **JavaScript**: Alpine.js framework for reactive components
- **Bootstrap 5**: Responsive grid and UI components
- **Font Awesome**: Icon library for toolbar buttons
- **Google Fonts**: Web font integration
- **LocalStorage**: Client-side data persistence

## Installation & Usage

### Option 1: Direct Usage
Simply open the `index.html` file in any modern web browser. No build process or server required.

### Option 2: Web Deployment
1. Upload all files to your web server
2. Access via your domain (e.g., `https://yourdomain.com/editor`)

### Option 3: Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/social-media-text-editor.git

# Navigate to project directory
cd social-media-text-editor

# Open in browser
open index.html
# or
start index.html
# or
xdg-open index.html
```

## Keyboard Shortcuts

| Action | Shortcut | Description |
|--------|----------|-------------|
| **Undo** | `Ctrl + Z` | Revert last change |
| **Redo** | `Ctrl + Y` or `Ctrl + Shift + Z` | Restore undone change |
| **Cut** | `Ctrl + X` | Cut selected text |
| **Copy** | `Ctrl + C` | Copy selected text |
| **Paste** | `Ctrl + V` | Paste from clipboard |
| **Find** | `Ctrl + F` | Open search modal |
| **Word Navigation** | `Ctrl + ←/→` | Jump between words |
| **Line Navigation** | `Home/End` | Jump to line start/end |
| **Select All** | `Ctrl + A` | Select entire document |

## API & Customization

### Available Fonts
The editor includes these Google Fonts by default:
- Roboto
- Open Sans
- Lato
- Montserrat
- Source Sans Pro

To add more fonts:
1. Add the font to Google Fonts import in the `<head>` section
2. Add the font name to the `availableFonts` array in the JavaScript

### Font Sizes
Default sizes: `[12, 14, 16, 18, 20, 24, 28, 32]`

Modify the `fontSizes` array to change available sizes.

### History Settings
- Maximum history steps: 50
- Auto-save interval: 30 seconds
- Change `setInterval` value in `init()` to modify auto-save frequency

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 10.1+
- ✅ Edge 79+
- ✅ Opera 47+

**Note**: Requires modern JavaScript support (ES6+).

## Performance

- No external dependencies except CDN libraries
- Efficient DOM updates using Alpine.js reactivity
- Optimized statistics calculations
- Minimal memory footprint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Alpine.js](https://alpinejs.dev/) for the lightweight reactivity
- [Bootstrap](https://getbootstrap.com/) for CSS framework
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography

## Support

For issues, questions, or feature requests:
1. Check the [Issues](https://github.com/pwrmind/CopyWriter) page
2. Create a new issue with detailed description
3. Tag with appropriate labels (bug, enhancement, question)

---

**Version**: 1.0.0  
**Last Updated**: March 2024  
**Author**: Your Name  
**Website**: https://github.com/yourusername

---
Made with ❤️ for content creators
