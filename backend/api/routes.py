from fastapi import APIRouter, HTTPException
from models.schemas import CodeRequest, CodeResponse
from services.openai_service import convert_code, debug_code, check_code_quality

router = APIRouter()

@router.post("/convert", response_model=CodeResponse)
async def convert_endpoint(request: CodeRequest):
    try:
        converted = await convert_code(request)
        return CodeResponse(result=converted)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/debug", response_model=CodeResponse)
async def debug_endpoint(request: CodeRequest):
    try:
        debug_info = await debug_code(request)
        return CodeResponse(result=debug_info)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/quality", response_model=CodeResponse)
async def quality_endpoint(request: CodeRequest):
    try:
        quality_report = await check_code_quality(request)
        return CodeResponse(result=quality_report)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
