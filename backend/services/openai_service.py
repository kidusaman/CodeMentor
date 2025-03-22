from config import OPENAI_API_KEY
from openai import OpenAI
client = OpenAI(api_key=OPENAI_API_KEY)
from models.schemas import CodeRequest
from utils.logger import get_logger

logger = get_logger(__name__)

async def convert_code(request: CodeRequest) -> str:
    messages = [
        {"role": "system", "content": "You are a helpful assistant that converts code."},
        {"role": "user", "content": (
            f"Convert the following {request.source_language} code to {request.target_language}:\n\n"
            f"{request.code}"
        )}
    ]
    logger.info("Sending code conversion request to OpenAI API")
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        max_tokens=500,
        temperature=0.2
    )
    result = response.choices[0].message.content.strip()
    return result

async def debug_code(request: CodeRequest) -> str:
    messages = [
        {"role": "system", "content": "You are a code debugger."},
        {"role": "user", "content": (
            f"Debug the following code and provide a detailed explanation of any errors or issues:\n\n"
            f"{request.code}"
        )}
    ]
    logger.info("Sending debugging request to OpenAI API")
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        max_tokens=500,
        temperature=0.2
    )
    result = response.choices[0].message.content.strip()
    return result

async def check_code_quality(request: CodeRequest) -> str:
    messages = [
        {"role": "system", "content": "You are an expert code quality analyzer."},
        {"role": "user", "content": (
            f"Analyze the following code for quality issues, potential improvements, and adherence to best practices:\n\n"
            f"{request.code}"
        )}
    ]
    logger.info("Sending code quality check request to OpenAI API")
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        max_tokens=500,
        temperature=0.2
    )
    result = response.choices[0].message.content.strip()
    return result
