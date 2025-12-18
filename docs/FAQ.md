# Frequently Asked Questions

## General Questions

### What is Dymi?

Dymi is a beautiful, minimal, open-source clock for your browser. It focuses on visual calm, perfect timing, and zero distractions.

### Is Dymi free?

Yes! Dymi is completely free and open-source under the CSPL v3.3 license.

### Can I use Dymi commercially?

Yes, you can use Dymi for personal or commercial purposes. See the [LICENSE](../LICENSE) for details.

### Does Dymi work offline?

Once loaded, Dymi works offline. With PWA installation, it's fully functional without internet.

## Technical Questions

### Why does Dymi update every 50ms?

Standard clocks update every second, causing visible "jumps". 50ms updates provide smooth, fluid motion while maintaining excellent performance.

### Does this drain battery?

No. The 50ms interval is extremely lightweight. Dymi uses less power than most websites with videos or ads.

### Which browsers are supported?

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Mobile browsers

### Can I install Dymi as an app?

Yes! Dymi is a Progressive Web App (PWA). Click the install button in your browser or add to home screen on mobile.

### Why is the bundle so small?

Dymi is built with performance in mind:
- No heavy frameworks
- Minimal dependencies
- Optimized CSS
- Efficient code splitting

## Features

### How do I change themes?

Click the sun/moon icon in the top-right, or press `T` on your keyboard to cycle through themes.

### Can I add my own theme?

Yes! Check out the [Customization Guide](./CUSTOMIZATION.md) for instructions.

### How do I change timezone?

Click the settings icon (⚙️) and select your timezone from the dropdown.

### Can I remove the date display?

Currently no, but this feature is planned. Check the [roadmap](../CHANGELOG.md) or open a feature request.

### Does Dymi support 24-hour format?

Yes! Open settings and toggle "24-hour format".

### Can I hide the seconds?

Not in the current version, but it's on the roadmap. You can customize this yourself following our [guide](./CUSTOMIZATION.md).

## Usage

### How do I use Dymi as a desk clock?

1. Open Dymi in your browser
2. Press `Space` or click the fullscreen icon
3. Place your device in stand mode
4. Enjoy!

### Can I use multiple clocks for different timezones?

Not currently, but multi-clock support is planned for v2.0.

### Does Dymi have alarms?

Not yet, but it's a planned feature. Follow the project for updates.

### Can I add a Pomodoro timer?

Not built-in, but you can add it yourself. See [Customization Guide](./CUSTOMIZATION.md) for an example implementation.

## Customization

### How do I change the font?

Edit `src/styles/clock.css` and update the `font-family` property. See [Customization Guide](./CUSTOMIZATION.md).

### Can I add my city's timezone?

Yes! Edit `src/utils/constants.ts` and add your timezone. Full instructions in the [Customization Guide](./CUSTOMIZATION.md).

### How do I change the clock size?

Modify the `font-size` in `src/styles/clock.css`. The clock is responsive by default.

### Can I add a background image?

Yes! Add CSS to `src/styles/globals.css`. Example in [Customization Guide](./CUSTOMIZATION.md).

## Deployment

### How do I deploy Dymi?

See the complete [Installation Guide](./INSTALLATION.md) for multiple deployment options.

### Can I host Dymi on my own domain?

Absolutely! Deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

### Is there a Docker image?

Yes! Use the included `Dockerfile` and `docker-compose.yml`. Instructions in [Installation Guide](./INSTALLATION.md).

### Can I embed Dymi in another website?

Yes, but we recommend linking to it instead to reduce your page load time.

## Privacy & Security

### Does Dymi collect any data?

No. Dymi runs entirely in your browser and collects zero data.

### Does Dymi use cookies?

No cookies. Settings are stored in localStorage only.

### Are my settings synced across devices?

Not currently. Settings are local to each browser/device.

### Is Dymi safe to use at work?

Yes. It's just a clock with no tracking, no ads, and no external requests.

## Contributing

### How can I contribute?

Check out [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

### I found a bug. Where do I report it?

Open an issue on [GitHub](https://github.com/yourusername/dymi/issues) using the bug report template.

### Can I suggest features?

Yes! Open a feature request on GitHub.

### Do you accept pull requests?

Absolutely! We welcome contributions. Please read [CONTRIBUTING.md](../CONTRIBUTING.md) first.

## Troubleshooting

### The time is wrong

Check your system time and timezone settings. Dymi uses your device's time.

### Themes aren't changing

Try clearing your browser cache or localStorage: `localStorage.clear()`

### Fullscreen isn't working

Some browsers require user interaction first. Try clicking anywhere on the page before pressing fullscreen.

### The clock is too small/big

This is likely a browser zoom issue. Press `Ctrl+0` (or `Cmd+0` on Mac) to reset zoom.

### Settings aren't saving

Check if your browser allows localStorage. Private/Incognito mode may block this.

## Performance

### Why does my CPU usage spike?

This shouldn't happen. If it does:
1. Try disabling animations in your OS settings
2. Close other heavy browser tabs
3. Report the issue on GitHub

### Can I reduce the update frequency?

Yes, but it will make the animation less smooth. Edit `src/hooks/useTime.ts` and change `50` to a higher number (e.g., `100` or `1000`).

## Roadmap

### What's coming next?

Check [CHANGELOG.md](../CHANGELOG.md) for the roadmap. Highlights:
- Multiple clock instances
- Pomodoro timer
- Weather integration
- Custom theme creator
- Alarm functionality

### When is v2.0 coming?

No set date yet. Follow the project for updates!

### Can I vote on features?

Yes! Comment on feature requests or open discussions on GitHub.

---

## Still have questions?

- 💬 [Open a discussion](https://github.com/yourusername/dymi/discussions)
- 🐛 [Report a bug](https://github.com/yourusername/dymi/issues)
- 📧 [Email us](mailto:hello@dymi.app)
