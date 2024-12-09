export const API_URL = import.meta.env.PROD 
    ? 'https://lyrics-thing-backend.onrender.com'  // Production URL (no /api prefix)
    : 'http://localhost:8000/api';                 // Development URL (with /api prefix)