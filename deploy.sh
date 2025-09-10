#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build completed successfully!"
    echo "You can now deploy the contents of the 'dist' folder to your hosting platform."
    echo ""
    echo "For GitHub Pages:"
    echo "1. Push the dist folder to a gh-pages branch"
    echo "2. Or use: npx gh-pages -d dist"
    echo ""
    echo "For Netlify:"
    echo "1. Drag and drop the dist folder to Netlify"
    echo "2. Or connect your repository and set build command: npm run build"
    echo ""
    echo "For Vercel:"
    echo "1. Install Vercel CLI: npm i -g vercel"
    echo "2. Run: vercel"
else
    echo "Build failed! Please check the error messages above."
    exit 1
fi

