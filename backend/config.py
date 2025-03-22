import os
from dotenv import load_dotenv

# Load variables from the .env file
load_dotenv()

# Now retrieve the API key
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

if not OPENAI_API_KEY:
    raise ValueError("No OPENAI_API_KEY set for the application")
