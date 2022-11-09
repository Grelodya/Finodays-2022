from backend.database import AsyncSessionLocal
from backend.database.tables.users import User
from sqlalchemy.future import select
from fastapi_login import LoginManager
from backendConfig import AuthConfig
from fastapi.requests import Request
from fastapi.responses import RedirectResponse

manager: LoginManager | None = None
load_user = None


def create_manager(app):
    global manager, load_user

    class NotAuthenticatedException(Exception):
        pass

    manager = LoginManager(AuthConfig.SECRET_KEY, token_url="/login", use_cookie=True, custom_exception=NotAuthenticatedException)
    manager.cookie_name = "auth_cookie"

    @app.exception_handler(NotAuthenticatedException)
    def auth_exception_handler(request: Request, exc: NotAuthenticatedException):
        """
        Redirect the user to the login page if not logged in
        """
        return RedirectResponse(url='/login')

    @manager.user_loader
    async def load_user(username: str) -> User:
        async with AsyncSessionLocal() as session:
            statement = select(User).where(User.username == username)
            result = await session.execute(statement)
            user: User = result.scalar()
        return user


def get_manager() -> LoginManager:
    return manager
