from pydantic import BaseSettings

class Settings(BaseSettings):
    # qdrant_host: str = "https://1784136f-5871-4632-8ddc-b96e3527b423.us-east-1-0.aws.cloud.qdrant.io:6333"
    qdrant_host: str = "localhost"
    qdrant_api_key: str = "lbTk-Rj7-M4cWkAZdEXeVSFRu7qrqBhclaUGxPzF_UpLolcxUB4TjA"
    openai_api_key: str = "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"

    class Config:
        env_file = ".env"


settings = Settings()