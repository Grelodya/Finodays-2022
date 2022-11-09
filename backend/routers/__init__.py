from . import index
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from fastapi import FastAPI


def include_routers(app: 'FastAPI'):
    app.include_router(index.router)
