from pydantic import BaseModel

class CodeRequest(BaseModel):
    code: str
    source_language: str = None  # Optional: used for code conversion
    target_language: str = None  # Optional: used for code conversion

class CodeResponse(BaseModel):
    result: str
