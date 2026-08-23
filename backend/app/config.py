import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "NK E-BIKE Akole API"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api"
    
    # Database URL: Supports PostgreSQL (e.g. postgresql://postgres:password@localhost:5432/nk_ebike)
    # Defaults to SQLite if PostgreSQL is not specified or unavailable locally
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL", 
        "sqlite:///./nk_ebike.db"
    )
    
    # In case DATABASE_URL starts with postgres:// (Render/Heroku style), normalize to postgresql://
    @property
    def sync_database_url(self) -> str:
        url = self.DATABASE_URL
        if url.startswith("postgres://"):
            url = url.replace("postgres://", "postgresql://", 1)
        return url

    class Config:
        env_file = ".env"
        extra = "allow"

settings = Settings()
