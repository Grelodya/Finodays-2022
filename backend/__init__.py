from backend.templates import create_templates
from fastapi.staticfiles import StaticFiles
from backend.auth import create_manager
from backend import database
from fastapi import FastAPI

from sys import version_info

assert version_info >= (3, 11)

app = FastAPI()
create_manager(app)
app.mount("/static", StaticFiles(directory="backend/static"), name="static")
create_templates()

from backend.routers import include_routers
include_routers(app)


@app.on_event("startup")
async def startup_event():
    await database.init_database()


