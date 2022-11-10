from . import index, login, logout, register, send
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from fastapi import FastAPI


def include_routers(app: 'FastAPI'):
    app.include_router(index.router)
    app.include_router(login.router)
    app.include_router(logout.router)
    app.include_router(register.router)
    app.include_router(send.router, prefix="/user")
