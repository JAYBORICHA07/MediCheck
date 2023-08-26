from pydantic import BaseSettings

class Settings(BaseSettings):
    # qdrant_host: str = "https://1784136f-5871-4632-8ddc-b96e3527b423.us-east-1-0.aws.cloud.qdrant.io:6333"
    qdrant_host: str = "xxxxxxx"
    qdrant_api_key: str = "xxxxxxx"
    openai_api_key: str = "xxxxxxxxx"

    class Config:
        env_file = ".env"


settings = Settings()