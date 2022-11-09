from backend.routers import include_routers
from sys import version_info
from fastapi import FastAPI

assert version_info >= (3, 11)

app = FastAPI()
include_routers(app)
