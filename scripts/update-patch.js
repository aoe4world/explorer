const fetchFn = typeof fetch !== 'undefined' ? fetch : require('node-fetch');
let cheerio;
try {
    cheerio = require('cheerio');
} catch {
    // cheerio optional fallback
}
const fs = require('fs');
const path = require('path');

async function main() {
    const url = process.argv[2];

    if (!url) {
        console.error('Usage: node update-patch.js <URL>');
        process.exit(1);
    }

    try {
        const response = await fetchFn(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        const html = await response.text();

        let articleBody;
        if (cheerio) {
            const $ = cheerio.load(html);
            articleBody = $('.article__body').html();
        } else {
            const match = html.match(/<div[^>]*class=["'][^"']*article__body[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<\/article>/i) ||
                          html.match(/<div[^>]*class=["'][^"']*article__body[^"']*["'][^>]*>([\s\S]*)/i);
            articleBody = match ? match[1] : null;
        }

        if (!articleBody) {
            console.error('Could not find div with class "article__body"');
            process.exit(1);
        }

        const tempFileName = `patch-notes-${Date.now()}.html`;
        const tempFilePath = path.join(__dirname, tempFileName);

        fs.writeFileSync(tempFilePath, articleBody);
        console.log(`Extracted content saved to: ${tempFilePath}`);

    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

main();