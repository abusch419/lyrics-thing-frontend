export const API_URL = import.meta.env.PROD 
    ? 'https://lyrics-thing-backend.onrender.com'  // Backend URL
    : 'http://localhost:8000';                     // Development URL 