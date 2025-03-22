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


## Setup and Installation

### Prerequisites

- Python 3.10+ (for backend)
- Node.js and npm (for frontend)
- Git

### Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd backend
2. **Create and activate a virtual environment (optional but recommended):**
   - create:

      ```bash
      python -m venv venv

   - Activate (macOS/Linux):
        ```bash
        source venv/bin/activate
3. **Install the Python dependencies:**
   ```bash
   pip install -r requirements.txt




