@echo off
REM FitForge Gym - Dev Server Startup Script
REM This ensures you're always in the correct directory

echo ========================================
echo FitForge Gym - Starting Dev Server
echo ========================================
echo.

REM Change to project directory
cd /d "%~dp0"

REM Verify we're in the right place
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo You must run this script from the gym-landing-page directory
    pause
    exit /b 1
)

if not exist "tailwind.config.ts" (
    echo ERROR: tailwind.config.ts not found!
    echo You must run this script from the gym-landing-page directory
    pause
    exit /b 1
)

echo Current Directory: %CD%
echo.
echo Starting Next.js development server...
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Start dev server
npm run dev

pause
