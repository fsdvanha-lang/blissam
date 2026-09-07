const fs = require('fs');
const path = require('path');

const avitoHtmlPath = 'C:\\Users\\heh3b\\.gemini\\antigravity-ide\\brain\\94908e5b-5c3c-40bb-bf58-162adc16676c\\.system_generated\\steps\\306\\content.md';
const content = fs.readFileSync(avitoHtmlPath, 'utf8');

console.log('Total content length:', content.length);

// 1. Search for items or catalog in script tags
const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
let m;
let foundScripts = [];
while ((m = scriptRegex.exec(content)) !== null) {
  foundScripts.push(m[1]);
}

console.log('Found script tags:', foundScripts.length);

for (let i = 0; i < foundScripts.length; i++) {
  const s = foundScripts[i];
  if (s.includes('__preloadedState__')) {
    console.log('Script ' + i + ' has __preloadedState__');
    const match = s.match(/window\.__preloadedState__\s*=\s*(.*);/);
    if (match) {
      try {
        let raw = match[1].trim();
        if (raw.startsWith('"') && raw.endsWith('"')) {
          raw = JSON.parse(raw);
        }
        const parsed = JSON.parse(raw);
        console.log('Parsed preloadedState keys:', Object.keys(parsed));
        fs.writeFileSync('scratch_preloadedState.json', JSON.stringify(parsed, null, 2));
      } catch (e) {
        console.log('Failed to parse preloadedState:', e.message);
      }
    }
  }
  
  if (s.includes('"items"') || s.includes('"title"') || s.includes('"price"')) {
    console.log('Script ' + i + ' has items/title/price. Length:', s.length);
    // Let's see if it is JSON
    if (s.trim().startsWith('{') && s.trim().endsWith('}')) {
      try {
        const parsed = JSON.parse(s.trim());
        console.log('Script ' + i + ' is pure JSON! Keys:', Object.keys(parsed));
        fs.writeFileSync(`scratch_script_${i}.json`, JSON.stringify(parsed, null, 2));
      } catch (e) {
        // Not pure json
      }
    }
  }
}
