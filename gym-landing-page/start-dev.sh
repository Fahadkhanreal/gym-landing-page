#!/bin/bash
# FitForge Gym - Dev Server Startup Script
# This ensures you're always in the correct directory

echo "========================================"
echo "FitForge Gym - Starting Dev Server"
echo "========================================"
echo ""

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Verify we're in the right place
if [ ! -f "package.json" ]; then
    echo "ERROR: package.json not found!"
    echo "You must run this script from the gym-landing-page directory"
    exit 1
fi

if [ ! -f "tailwind.config.ts" ]; then
    echo "ERROR: tailwind.config.ts not found!"
    echo "You must run this script from the gym-landing-page directory"
    exit 1
fi

echo "Current Directory: $(pwd)"
echo ""
echo "Starting Next.js development server..."
echo ""
echo "Press Ctrl+C to stop the server"
echo "========================================"
echo ""

# Start dev server
npm run dev
