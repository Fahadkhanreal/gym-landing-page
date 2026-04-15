# Quick Start Guide

## ⚠️ IMPORTANT: Always Run Commands from Project Directory

### Correct Directory:
```bash
cd "D:\Governor Sindh It Initiative\code\gym-landing page\gym-landing-page"
```

### Then Run:
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Check code quality
```

## 🚨 Common Error: Wrong Directory

**Error:** `Can't resolve 'tailwindcss'`

**Cause:** Running commands from parent directory instead of project directory

**Fix:**
```bash
# Check current directory
pwd

# Should show: .../gym-landing page/gym-landing-page
# If not, change to project directory:
cd gym-landing-page
```

## ✅ Verify You're in Correct Directory

```bash
# You should see these files:
ls
# Output should include:
# - package.json
# - next.config.ts
# - tailwind.config.ts
# - postcss.config.mjs
# - app/
# - components/
# - sections/
```

## 🎯 Quick Commands

```bash
# From project root (gym-landing-page/)
npm run dev     # http://localhost:3000
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Check code quality
```

## 📁 Directory Structure

```
gym-landing page/           ← Parent (DON'T run commands here)
└── gym-landing-page/       ← Project (RUN commands here)
    ├── app/
    ├── components/
    ├── sections/
    ├── package.json
    └── next.config.ts
```

## 💡 Pro Tip

Add this to your terminal profile to always start in the correct directory:

```bash
# Add to ~/.bashrc or ~/.zshrc
alias gym='cd "D:\Governor Sindh It Initiative\code\gym-landing page\gym-landing-page"'

# Then just type:
gym
npm run dev
```
