import pandas as pd
import pickle
import nltk
import matplotlib.pyplot as plt
import seaborn as sns
from nltk.corpus import stopwords, wordnet
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import word_tokenize
from nltk import pos_tag
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix, ConfusionMatrixDisplay, roc_auc_score
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.utils import shuffle
import string

# Download required NLTK resources
nltk.download('punkt_tab')
nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('averaged_perceptron_tagger_eng')

# Initialize Lemmatizer and stopwords
lemmatizer = WordNetLemmatizer()
stop_words = set(stopwords.words('english'))

# Get WordNet POS tags
def get_wordnet_pos(treebank_tag):
    if treebank_tag.startswith('J'):
        return wordnet.ADJ
    elif treebank_tag.startswith('V'):
        return wordnet.VERB
    elif treebank_tag.startswith('N'):
        return wordnet.NOUN
    elif treebank_tag.startswith('R'):
        return wordnet.ADV
    return wordnet.NOUN

# Advanced text preprocessing with NLTK
def preprocess_text(text):
    tokens = word_tokenize(text.lower())
    tokens = [t for t in tokens if t.isalpha() and t not in stop_words]
    tagged = pos_tag(tokens)
    lemmatized = [lemmatizer.lemmatize(t, get_wordnet_pos(pos)) for t, pos in tagged]
    return ' '.join(lemmatized)

# Load all datasets
main_df = pd.read_csv("../../dataset/dataset.csv", encoding="latin-1")
extra_df1 = pd.read_csv("../../dataset/spam.csv", encoding="latin-1")
extra_df2 = pd.read_csv("../../dataset/synthetic_spam_ham_dataset.csv")

# Standardize column names
main_df.columns = ['label', 'message']
extra_df1 = extra_df1.iloc[:, :2]  # Select only first two columns
extra_df1.columns = ['label', 'message']
extra_df1 = extra_df1[extra_df1['label'].isin(['ham', 'spam'])]  # Filter valid labels

# Concatenate all datasets
combined_df = pd.concat([main_df, extra_df1, extra_df2], ignore_index=True)

# Drop missing values
combined_df.dropna(inplace=True)

# Encode labels: spam = 1, ham = 0
combined_df['label'] = combined_df['label'].str.lower().map({'ham': 0, 'spam': 1})
combined_df = combined_df[combined_df['label'].isin([0, 1])]

# Apply NLTK preprocessing
combined_df['message'] = combined_df['message'].apply(preprocess_text)

# Shuffle the dataset
combined_df = shuffle(combined_df, random_state=42)

# Display class balance
print("Class Distribution:\n", combined_df['label'].value_counts())

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    combined_df['message'], combined_df['label'], test_size=0.2, random_state=42
)

# TF-IDF Vectorization
vectorizer = TfidfVectorizer(max_df=0.95, ngram_range=(1, 2), min_df=5)
X_train_vec = vectorizer.fit_transform(X_train)

# Train Logistic Regression Model
model = LogisticRegression(max_iter=1000)
model.fit(X_train_vec, y_train)

# Evaluate model
X_test_vec = vectorizer.transform(X_test)
predictions = model.predict(X_test_vec)

print("\nModel Performance:\n")
print(classification_report(y_test, predictions))

# Confusion matrix
cm = confusion_matrix(y_test, predictions)
ConfusionMatrixDisplay(cm).plot()
plt.title('Confusion Matrix')
plt.show()

# ROC-AUC
roc_auc = roc_auc_score(y_test, predictions)
print(f"\nROC-AUC Score: {roc_auc:.4f}")

# Save model and vectorizer
with open("spam_classifier.pkl", "wb") as f:
    pickle.dump(model, f)

with open("vectorizer.pkl", "wb") as f:
    pickle.dump(vectorizer, f)

print("\n✅ Model and vectorizer saved successfully.")
