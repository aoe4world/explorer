# Gemini Patch Notes Generation Process

This document outlines the process and key instructions for generating patch notes for Age of Empires IV, based on the collaboration for patch 15.2.7380.

## Overview

The process involves creating a new patch file in `src/data/patches/` by adapting an existing patch file and extracting the relevant information from an HTML source of the official patch notes.

To extract the patch notes, run `node scripts/update-patch.js <url>`. If the URL is not provided in the task, ask the user for it.


## Key Instructions & Learnings

1.  **File Naming Convention**: New patch files should follow the pattern `patch-[version]-[season].tsx`. For example: `patch-15.2.7380-season-13.tsx`. Depending on whether it's a Season Update, or Mid-season patch. Ask user if unclear.

2.  **Base Structure**: Use a recent, existing patch file as a template for the new one. This ensures the basic structure (`id`, `buildId`, `name`, `season`, `type`, `officialUrl`, `summary`, `introduction`, `date`, `sections`) is correct.

3.  **Content Extraction**: The `summary` and `introduction` sections, as well as the detailed changes, are extracted from the provided HTML file of the patch notes.

4.  **`items` Property**: Each change (`PatchSet`) must have an `items` property, which is an array of strings. These strings are base IDs for units, buildings, technologies, or abilities that are affected by the change.
    *   These base IDs can be found in the `all-baseids.json` files located in `data/units`, `data/buildings`, `data/technologies`, and `data/abilities`. Be sure to read these files before creating the patch file.
    *   It's crucial to associate the correct items with each change, as this is used to display the patch history on individual item pages.
    *   If a change does not have a specific item associated with it (e.g., a general AI update), the `items` array should be empty (`[]`).

5.  **Structure of `sections`**: The `sections` array contains `PatchSection` objects. Each `PatchSection` can have a `title` and/or a `subtitle`. It also contains a `changes` array of `PatchSet` objects.
    *   **"Bugfixes" and "Balance Changes"**: Use a top-level `PatchSection` with the title "Bugfixes" for all bugfixes, and another top-level `PatchSection` with the title "Balance Changes" for all balance changes.
    *   **No Nesting**: The structure should be flat. Do not nest `changes` arrays within other `changes` arrays. A `PatchSection` contains `changes`, and each `PatchSet` within `changes` is a discrete set of changes.
    *   **One Section per Civ for Bugfixes**: When dealing with a large "Civilization Bugfixes" section, it is preferable to break it down into a separate `PatchSection` for each civilization. This keeps the data organized and easier to manage.

6.  **`uionly` Flag**: For changes that are purely cosmetic or related to the user interface (UI) and do not affect gameplay mechanics, add a `uionly: true` flag to the `PatchSet` object. This allows these changes to be filtered out when displaying patch notes on individual item pages where only gameplay-relevant changes are desired. Examples include:
    *   Tooltip corrections.
    *   UI element positioning.
    *   Changes to hotkey availability.
    *   Voice line fixes.

7.  **Map Pool Rotations**: Map pool rotations should not be included in the patch notes files.

8.  Update `src/routes/home.tsx` to point to the new patch unless there's already a newer one present. Note that dots should be converted to hyphens.

## Relevant Files

- `scripts/update-patch.js`: Used to extract patch notes content from a URL.
- `src/data/patches/`: Directory where the patch files are stored.
- `data/units/all-baseids.json`, `data/buildings/all-baseids.json`, `data/technologies/all-baseids.json`, `data/abilities/all-baseids.json`: Files containing the base IDs for items.
- `src/routes/home.tsx`: File to update with the latest patch information.
- `src/types/patches.ts`: Defines the data structure for patch notes.

## Notes

- Daimyo Estates relate to the 3 estates: ["buildings/hojo-clan-daimyo-estate", "buildings/oda-clan-daimyo-estate", "buildings/takeda-clan-daimyo-estate"], refer to all-baseids.json to find the others.
- When an item is unknown, ask the user.
- If the patch notes mention an "Early" version of a unit, ask the user for clarification on how to phrase the change. Especially be mindful of damage changes to units, since unit damage scales with age upgrades.
