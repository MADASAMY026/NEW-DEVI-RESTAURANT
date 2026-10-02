CHENNAI EATS - Food delivery demo (HTML + CSS + JS + Leaflet)

Run:
  1. Open the folder in VS Code and use "Live Server" (http://localhost) - recommended.
  2. Or double-click index.html (works too; map uses Esri tiles, no API key).

Folders:
  index.html      page structure
  css/style.css   all styles
  js/app.js       restaurants, cart, search, GPS, map, rider simulation
  lib/            Leaflet (local copy, works without CDN)

Map: Esri Street (default) with automatic fallback + layer switcher. No API key.
Privacy: GPS is read only in your browser. Set USE_ADDRESS_LOOKUP=false in js/app.js
to stop sending coordinates to Nominatim.
