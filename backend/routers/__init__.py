from . import index, login, logout, register
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from fastapi import FastAPI


def include_routers(app: 'FastAPI'):
    app.include_router(index.router)
    app.include_router(login.router)
    app.include_router(logout.router)
    app.include_router(register.router)
