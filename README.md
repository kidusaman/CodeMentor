# CodeMentor

CodeMentor is a full-stack application that leverages the OpenAI API to offer a code converter, debugger, and code quality checker. It’s built with a FastAPI backend and a React frontend, showcasing full-stack development skills, API integration, and modern UI design with Material-UI.

## Features

- **Code Converter:** Convert code between different programming languages.
- **Code Debugger:** Identify and explain syntax and logical errors in code.
- **Code Quality Checker:** Analyze code for quality issues, best practices, and potential improvements.
- **Responsive UI:** A modern, user-friendly interface built with React and Material-UI.

## Technologies

- **Backend:** Python, FastAPI, Uvicorn, python-dotenv, OpenAI API.
- **Frontend:** React, Material-UI, Axios.
- **Deployment:** Free hosting options such as Railway (backend) and Vercel or Netlify (frontend).

## Project Structure

CodeMentor/ ├── backend/ │ ├── api/ │ │ └── routes.py # API endpoint definitions │ ├── models/ │ │ └── schemas.py # Data models using Pydantic │ ├── services/ │ │ └── openai_service.py # Business logic and OpenAI integration │ ├── utils/ │ │ └── logger.py # Logging utilities │ ├── config.py # Configuration (loads env variables) │ ├── main.py # FastAPI application entry point │ ├── requirements.txt # Python dependencies │ ├── Procfile # (Optional) Deployment command │ └── .gitignore # Ignores compiled files and sensitive data │ ├── frontend/ │ ├── public/ │ │ └── index.html # HTML template with root div │ ├── src/ │ │ ├── components/ │ │ │ ├── CodeConverter.js # Code converter component │ │ │ ├── Debugger.js # Code debugger component │ │ │ ├── CodeQualityChecker.js # Code quality checker component │ │ │ └── CodeDisplay.js # Syntax-highlighted code display │ │ ├── services/ │ │ │ └── api.js # API helper functions for backend communication │ │ ├── App.js # Main React component with navigation │ │ ├── index.js # React app entry point │ │ └── theme.js # (Optional) Custom Material-UI theme │ ├── package.json # Node dependencies and project scripts │ ├── package-lock.json # Lock file for Node dependencies │ └── .gitignore # Ignores node_modules, build artifacts, etc. │ └── README.md # This file

---

## ⚙️ Setup and Installation

### ✅ Prerequisites

- Python 3.10+ (for backend)  
- Node.js & npm (for frontend)  
- Git  

---

## 🔧 Backend Setup

```bash
# Navigate to backend folder
cd backend

# Create and activate a virtual environment (recommended)
python -m venv venv

# macOS/Linux:
source venv/bin/activate

# Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create a .env file and add your OpenAI key
# File: .env
OPENAI_API_KEY=sk-your_actual_api_key_here

# Note: Ensure .env is in your .gitignore

# Run the FastAPI server
uvicorn main:app --reload

# Visit: http://127.0.0.1:8000/docs to test the API


