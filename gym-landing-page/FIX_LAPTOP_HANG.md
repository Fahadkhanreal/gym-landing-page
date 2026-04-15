# 🚨 CRITICAL FIX - Laptop Hang Issue

## Problem
Running `npm run dev` causes laptop to hang (CPU 100%) because Next.js is looking for `tailwindcss` in the WRONG directory.

## Root Cause
Next.js is trying to resolve modules in parent directory:
```
D:\Governor Sindh It Initiative\code\gym-landing page  ❌ WRONG
```

Instead of project directory:
```
D:\Governor Sindh It Initiative\code\gym-landing page\gym-landing-page  ✅ CORRECT
```

## ✅ PERMANENT FIX

### Step 1: Use the Startup Script (SAFEST)

**Windows (PowerShell):**
```powershell
# Navigate to project directory
cd "D:\Governor Sindh It Initiative\code\gym-landing page\gym-landing-page"

# Run the startup script
.\start-dev.bat
```

**OR Double-click:** `start-dev.bat` file in File Explorer

### Step 2: Manual Method (If script doesn't work)

```powershell
# 1. Open PowerShell/Terminal

# 2. Navigate to EXACT project directory
cd "D:\Governor Sindh It Initiative\code\gym-landing page\gym-landing-page"

# 3. Verify you're in the right place
dir tailwind.config.ts
# Should show: tailwind.config.ts exists

# 4. Clear cache
Remove-Item -Recurse -Force .next

# 5. Start dev server
npm run dev
```

## 🛡️ Safety Check Before Running

**ALWAYS verify these files exist in current directory:**
```powershell
dir tailwind.config.ts
dir postcss.config.mjs
dir package.json
dir next.config.ts
```

**All 4 files MUST exist!** If any is missing, you're in the WRONG directory.

## 🚫 What NOT to Do

**NEVER run from parent directory:**
```powershell
# ❌ WRONG - Will hang laptop
cd "D:\Governor Sindh It Initiative\code\gym-landing page"
npm run dev  # DON'T DO THIS!
```

## 🔧 If Laptop Already Hung

1. **Open Task Manager** (Ctrl + Shift + Esc)
2. Find **"Node.js: Server-side JavaScript"**
3. Click **"End Task"**
4. Wait 10 seconds
5. Follow the fix above

## ✅ Correct Directory Structure

```
gym-landing page/              ← Parent (NEVER run commands here)
├── start-dev.bat             ← NEW: Safe startup script
└── gym-landing-page/         ← Project (ALWAYS run commands here)
    ├── tailwind.config.ts    ← Must exist
    ├── postcss.config.mjs    ← Must exist
    ├── next.config.ts        ← Must exist
    ├── package.json          ← Must exist
    ├── app/
    ├── components/
    └── sections/
```

## 📝 Quick Commands Reference

```powershell
# Navigate to project
cd "D:\Governor Sindh It Initiative\code\gym-landing page\gym-landing-page"

# Verify location
pwd
# Should show: .../gym-landing page/gym-landing-page

# Clear cache (if needed)
Remove-Item -Recurse -Force .next

# Start dev server
npm run dev

# Stop dev server
# Press Ctrl + C in terminal
```

## 🎯 Success Indicators

When dev server starts correctly, you'll see:
```
▲ Next.js 16.2.3 (Turbopack)
- Local:         http://localhost:3000
- Network:       http://192.168.0.108:3000
- Environments: .env.local
✓ Ready in 576ms
✓ Compiled / in 1.2s
```

**NO errors about "Can't resolve 'tailwindcss'"**

## 💡 Pro Tip: Create Desktop Shortcut

1. Right-click `start-dev.bat`
2. Click "Create Shortcut"
3. Move shortcut to Desktop
4. Rename to "Start FitForge Dev Server"
5. Double-click to start safely!

---

**IMPORTANT:** Always use `start-dev.bat` or manually verify you're in `gym-landing-page/` directory before running `npm run dev`.
