export const API_URL = import.meta.env.PROD 
    ? 'https://lyrics-thing-backend.onrender.com'  // Production URL
    : 'http://localhost:8000';                  // Development URL 