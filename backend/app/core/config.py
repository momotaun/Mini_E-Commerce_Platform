from pydantic_settings import BaseSettings
from pydantic import Field, AnyHttpUrl, validator
from typing import List, Optional, Union

class Settings(BaseSettings):
    PROJECT_NAME: str = Field(default="Mini E-Commerce Platform")
    API_V1_STR: str = Field(default="/api/v1")
    SECRET_KEY: str = Field(..., env="SECRET_KEY")
    ALGORITHM: str = Field(default="HS256")
    BACKEND_CORS_ORIGINS: Union[List[str], str] = Field(default=[])
    DATABASE_URL: str = Field(..., env="DATABASE_URL")

    @validator("BACKEND_CORS_ORIGINS", pre=True)
    def assemble_cors_origins(cls, v):
        if v == "*" or v == ["*"]:
            return ["*"]
        if isinstance(v, str):
            if v.startswith("["):
                import json
                return json.loads(v)
            return [i.strip() for i in v.split(",") if i]
        return v

    class Config:
        env_file = ".env"

settings = Settings()