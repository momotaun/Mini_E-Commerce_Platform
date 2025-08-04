from fastapi import APIRouter

router = APIRouter()

@router.get("/hello", tags=["Hello"])
def say_hello():
    return {"message": "Hello, World!"}