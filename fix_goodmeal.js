// Quick fix script for GoodMeal.jsx
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'GoodMeal.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix the ampersand issue
content = content.replace('Contexto & Problema', "{'Contexto & Problema'}");

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Fixed GoodMeal.jsx - ampersand issue resolved');
