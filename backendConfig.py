from pyliteconf import Config as _Config
from os import getenv


class DatabaseConfig(_Config):
    _dialect = "mysql+asyncmy"

    _user = getenv("DB_USER")
    _password = getenv("DB_PASSWORD")
    _db_url = getenv("DB_URL")

    url = f"{_dialect}://{_user}:{_password}@{_db_url}"


class AuthConfig(_Config):
    SECRET_KEY = b'e1ed08371dc5df809ffcfb8923cc88dc1507a4233af7ef45'
    ALGORITHM = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES = 30
