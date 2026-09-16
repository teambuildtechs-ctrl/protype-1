#!/bin/bash
echo "==================================================="
echo "  Cocoa Cafe - Automated Dependency Installer"
echo "==================================================="
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js is not installed!"
    echo "Please download and install Node.js from https://nodejs.org/"
    exit 1
fi

echo "[1/3] Node.js detected: $(node -v)"
echo ""

# Run npm install
echo "[2/3] Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "[ERROR] Failed to install dependencies."
    exit 1
fi

echo ""
# Create .env.local if not present
echo "[3/3] Setting up environment variables (.env.local)..."
if [ ! -f ".env.local" ]; then
    cat <<EOT > .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
EOT
    echo ".env.local created! Add your Supabase credentials when ready."
else
    echo ".env.local already exists. Skipping."
fi

echo ""
echo "==================================================="
echo "  Setup Complete! Run: npm run dev"
echo "==================================================="
