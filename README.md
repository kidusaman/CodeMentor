# CodeMentor

[Live Demo]([https://your-frontend.vercel.app](https://code-mentor-otjsuf7sq-kidus-projects-a65c36b6.vercel.app )  
*Experience the live version of CodeMentor, a full-stack application for code conversion, debugging, and quality checking.*

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

## Live Demo

You can view the live version of the application here: (https://code-mentor-otjsuf7sq-kidus-projects-a65c36b6.vercel.app)


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


### Backend
2. **Install the Python dependencies:**
   ```env
   OPENAI_API_KEY=sk-your_actual_api_key_here


3. **Create a .env file in the backend directory:**
   ```sh
   npm install
4. **Create a .env file in the root directory with the following variables:**
   ```ini
   uvicorn main:app --reload
5. **Run the FastAPI server:**
    ```sh
   npm install
### Frontend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd frontend


### Frontend
2. **Install the Python dependencies:**
   ```env
   npm install


3. **Start the development server:**
   ```sh
   npm start

## Deployment

### Backend Development
For free deployment, consider using Railway or Render. Ensure you:
   - Include a Procfile (e.g., web: uvicorn main:app --host=0.0.0.0 --port=${PORT}).
   - Set environment variables (like OPENAI_API_KEY) via the hosting platform’s dashboard.
   - Include a Procfile (e.g., web: uvicorn main:app --host=0.0.0.0 --port=${PORT}).
Set environment variables (like OPENAI_API_KEY) via the hosting platform’s dashboard.
### Frontend Deployment
Deploy your React app on free platforms like Vercel or Netlify:
- Run npm run build to create a production build.
- Connect your repository and deploy via the platform’s instructions.
### Connecting Frontend and Backend
- Update the API endpoint in your frontend (in src/services/api.js) to point to your deployed backend URL.
- Also, ensure your FastAPI app has proper CORS settings to allow requests from your frontend’s domain.
## Usage
- **Code Converter:** Enter code, select source and target languages, and click “Convert” to see the transformed code.
- **Debugger:** Paste code with errors and click “Debug” to receive detailed error explanations.
- **Code Quality Checker:** Paste your code and click “Check Quality” to get analysis and improvement suggestions.



   




