@echo off
echo ===================================================
echo   Cocoa Cafe - Automated Dependency Installer
echo ===================================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo Please download and install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [1/3] Node.js detected:
node -v
echo.

:: Check for npm
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] npm is not detected!
    pause
    exit /b 1
)

echo [2/3] Installing project dependencies from package.json...
echo Running: npm install
call npm.cmd install
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to install dependencies.
    pause
    exit /b %errorlevel%
)

echo.
echo [3/3] Setting up environment variables (.env.local)...
if not exist ".env.local" (
    echo Creating .env.local template...
    (
        echo NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
        echo NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
    ) > .env.local
    echo .env.local created! Add your Supabase credentials when ready.
) else (
    echo .env.local already exists. Skipping creation.
)

echo.
echo ===================================================
echo   Setup Complete!
echo ===================================================
echo To start your development server, run:
echo    npm run dev
echo.
echo Opening localhost in your browser after launch...
pause
