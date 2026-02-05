const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

async function main() {
    const url = process.argv[2];

    if (!url) {
        console.error('Usage: node update-patch.js <URL>');
        process.exit(1);
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        const html = await response.text();

        const $ = cheerio.load(html);
        const articleBody = $('.article__body').html();

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