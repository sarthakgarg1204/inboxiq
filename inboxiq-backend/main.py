import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.predict import router as predict_router

app = FastAPI()

# frontend_url = os.getenv("FRONTEND_URL", "*")
# print("Using FRONTEND_URL for CORS:", frontend_url)

origins = [
    "https://inboxiq-one.vercel.app",
    # add more origins if needed
]

app.add_middleware(
    CORSMiddleware,
    # allow_origins=[frontend_url],
    allow_origins=[origins],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(predict_router)

@app.get("/")
def root():
    return {"message": "InboxIQ Spam Classifier API is running"}
