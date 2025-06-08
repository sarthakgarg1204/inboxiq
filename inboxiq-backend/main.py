import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.predict import router as predict_router
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Get allowed origins from .env, split by comma, and strip whitespace
origins = [
    origin.strip() for origin in os.getenv("FRONTEND_URL", "*").split(",")
]

print("Allowed CORS origins:", origins)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(predict_router)

@app.get("/")
def root():
    return {"message": "InboxIQ Spam Classifier API is running"}
