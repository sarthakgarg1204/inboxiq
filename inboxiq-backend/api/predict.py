import numpy as np
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
import pickle

router = APIRouter()

# Load model and vectorizer
with open("model/spam_classifier.pkl", "rb") as f:
    model = pickle.load(f)
with open("model/vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

# Define input schema
class MessageInput(BaseModel):
    message: str

@router.post("/predict")
def predict_message(input_data: MessageInput, threshold: float = Query(0.5, ge=0.0, le=1.0)):
    """
    Predict whether a message is spam or ham, with a configurable spam threshold.
    Returns the prediction and the model's confidence.
    """
    try:
        vectorized = vectorizer.transform([input_data.message])
        proba = model.predict_proba(vectorized)[0]  # [prob_ham, prob_spam]
        spam_confidence = proba[1]

        result = "spam" if spam_confidence >= threshold else "ham"

        return {
            "result": result,
            "confidence": round(float(spam_confidence), 4),
            "threshold_used": threshold
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
