from fastapi import FastAPI
from app.controllers.v1.hello_controller import router as hello_router

app = FastAPI()

app.include_router(hello_router, prefix="/api/v1")