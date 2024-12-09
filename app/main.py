from fastapi.middleware.cors import CORSMiddleware

# Previous code...

# Update origins to include your Render frontend URL
origins = [
    "http://localhost:5173",
    "http://localhost:10000",
    "https://lyrics-thing-backend.onrender.com"  # Add your Render frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) 