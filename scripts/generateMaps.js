const fs = require('fs');
const path = require('path');

async function generateMaps() {
    const mapsApiUrl = 'https://aoe4world.com/api/v0/maps';
    const mapsFilePath = path.resolve(__dirname, '../src/data/maps.ts');

    try {
        const response = await fetch(mapsApiUrl);
        if (!response.ok) {
            console.warn(`Failed to fetch maps from ${mapsApiUrl}. Status: ${response.status} ${response.statusText}. Skipping update.`);
            return;
        }
        const maps = await response.json();

        if (!Array.isArray(maps)) {
            console.error("API response is not an array of maps. Skipping update.");
            return;
        }

        const filteredMaps = maps.filter(map => map.map_pbg_id);

        let mapContent = `export const staticMaps: Record<string, { name: string; imageUrl: string; }> = {\n`;

        // Calculate max lengths for alignment
        let maxSlugLength = 0;
        let maxNameLength = 0;
        let maxImageUrlLength = 0;
        for (const map of filteredMaps) {
          map.slug = map.name.toLowerCase().replaceAll(' ', '-');
            if (map.slug.length > maxSlugLength) {
                maxSlugLength = map.slug.length;
            }
            if (map.name.length > maxNameLength) {
                maxNameLength = map.name.length;
            }
            if (map.image_url.length > maxImageUrlLength) {
              maxImageUrlLength = map.image_url.length;
            }
        }

        for (const map of filteredMaps) {
            const slugPadding = ' '.repeat(maxSlugLength - map.slug.length);
            const namePadding = ' '.repeat(maxNameLength - map.name.length);
            const imageUrlPadding = ' '.repeat(maxImageUrlLength - map.image_url.length);
            mapContent += `  "${map.slug}":${slugPadding} { name: "${map.name}",${namePadding} imageUrl: "${map.image_url}"${imageUrlPadding} },\n`;
        }

        mapContent += `};\n`;

        fs.writeFileSync(mapsFilePath, mapContent, 'utf8');
        console.log(`Successfully updated ${mapsFilePath} with ${filteredMaps.length} maps.`);

    } catch (error) {
        console.error(`Error generating maps: ${error.message}. Skipping update.`, error);
    }
}

generateMaps();
