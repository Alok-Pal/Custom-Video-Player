# Custom Video Player 🎬

A feature-rich video player with a user-friendly interface, built from scratch using React. Designed with modern web standards in mind, it includes all the essential features for an interactive and seamless video experience. From customizable controls to advanced functionality like autoplay, drag-and-drop video management, full-screen mode, and keyboard shortcuts, this player offers everything needed for a high-quality viewing experience. Whether for desktop or mobile users, it ensures flexibility, performance, and ease of use.

[![React](https://img.shields.io/badge/React-%23202324?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse_Performance-55-red?style=flat)](https://github.com/GoogleChrome/lighthouse)
[![Lighthouse Accessibility](https://img.shields.io/badge/Lighthouse_Accessibility-95-green?style=flat)](https://github.com/GoogleChrome/lighthouse)
[![Lighthouse SEO](https://img.shields.io/badge/Lighthouse_SEO-100-brightgreen?style=flat)](https://github.com/GoogleChrome/lighthouse)

## Table of Contents 📑

- [Installation](#installation)
- [Features](#features)
  - [Video Library](#video-library)
  - [Search Functionality](#search-functionality)
  - [Autoplay Functionality](#autoplay-functionality)
  - [Video Controls](#video-controls)
  - [Keyboard Controls](#keyboard-controls)
  - [Video Playback](#video-playback)
- [External Libraries](#external-libraries)
- [Deployment](#deployment)
- [Lighthouse Performance Scores](#lighthouse-performance-scores)

## Features ✨

### Video Library

- The homepage displays a collection of all available videos in the library.
- Users can **reorder** videos using an intuitive drag-and-drop interface powered by the React DnD library.

### Search Functionality

- Easily search videos by title using a dedicated search input.
- **Search** is based on video titles, enabling quick navigation of the video library.

### Autoplay Functionality

- **Autoplay** feature enabled by default.
- Click the play/pause button or click directly on the video to toggle playback.

### Video Controls

- **Seek functionality**: Jump to specific points in the video by dragging or clicking on the progress bar.
- **Mute/Unmute** options available for flexible audio control.
- **Volume control**: Adjust volume using the + and - buttons or drag the volume slider.
- **Playback speed**: Change the playback speed of the video for faster/slower viewing.
- **Full-screen mode**: Experience a larger, immersive view of the video.
- **Timer**: See the current progress of the video with a real-time timer.

### Keyboard Controls

- **Space bar**: Play/pause.
- **Up/Down arrow keys**: Increase/decrease volume.
- **'M' key**: Mute/unmute.
- **'F' key**: Toggle full-screen mode.

### Video Playback

- **Click** on a video to open the video player and watch the selected video.
- **Mobile users** can double-click on a video thumbnail to open it.

### External Library Used

- **React DND Kit**: Utilized for implementing the drag-and-drop functionality of the video library.

---

## Deployment 🚀

This project is deployed on [Vercel](https://vercel.com).

You can access the live version of the video player here:

- [React Video Player Demo](https://custom-video-player-rosy.vercel.app/)

---

## Lighthouse Performance Scores 🏆

- **Performance**: 55
- **Accessibility**: 95
- **Best Practices**: 95
- **SEO**: 100

## Installation 🔧

Before you start, ensure you have [Node.js](https://nodejs.org/) installed.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-video-player.git
