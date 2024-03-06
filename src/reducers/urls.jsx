// url.jsx
let env = "local";

let BASE_URL;

if (env === 'local') {
    // Local development server URL
    BASE_URL = 'http://127.0.0.1:8000';
} else if (env === 'dev') {
    // Development server URL
    BASE_URL = 'https://thekkabazar.itnepalsolutions.com';
} else if (env === 'prod') {
    // Production server URL
    BASE_URL = 'https://product.thekkabazar.com';
}

export { BASE_URL }; // Exporting BASE_URL
