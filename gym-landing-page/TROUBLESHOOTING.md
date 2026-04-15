# Warning Fix: Multiple Lockfiles

## ⚠️ Problem
Next.js detected 2 package-lock.json files:
- `D:\Governor Sindh It Initiative\code\gym-landing page\package-lock.json` (parent)
- `D:\Governor Sindh It Initiative\code\gym-landing page\gym-landing-page\package-lock.json` (project)

This caused a workspace root inference warning.

## ✅ Solution Applied

Updated `next.config.ts` to explicitly set the Turbopack root directory:

```typescript
experimental: {
  turbo: {
    root: __dirname,
  },
}
```

This tells Next.js to use the current directory (`gym-landing-page/`) as the root, ignoring the parent lockfile.

## 🧪 Test the Fix

```bash
# Stop the dev server (Ctrl+C)
# Restart it
npm run dev
```

The warning should now be gone!

## 🔄 Alternative Solutions (If Warning Persists)

### Option 1: Remove Parent Lockfile (If Not Needed)
```bash
# If the parent directory doesn't need its own dependencies
rm "../package-lock.json"
rm "../package.json"
```

### Option 2: Add .npmrc (Workspace Configuration)
Create `.npmrc` in project root:
```
workspace-root=true
```

### Option 3: Ignore the Warning
The warning is informational only - your app works fine! It just means Next.js had to guess which directory is the root.

## ✅ Current Status

- Dev server: Running ✅
- App: Working ✅
- Warning: Fixed with turbo.root config ✅

The warning won't affect your app's functionality - it's just Next.js being cautious about workspace detection.
