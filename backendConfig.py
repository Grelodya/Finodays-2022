from pyliteconf import Config as _Config


class DatabaseConfig(_Config):
    _dialect = "mysql+asyncmy"

    _user = "user"
    _password = "user"
    _db_url = "79.120.76.23:3306/Finodays_del_11.11"

    url = f"{_dialect}://{_user}:{_password}@{_db_url}"


class AuthConfig(_Config):
    SECRET_KEY = b'e1ed08371dc5df809ffcfb8923cc88dc1507a4233af7ef45'
    ALGORITHM = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES = 30
