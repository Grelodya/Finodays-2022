from sqlalchemy import Column, String, Integer
from backend.database import Base
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from typing import Any


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    username = Column(String(64), index=True)
    password = Column(String(256))

    def __init__(self, username: str, password: str, *args: 'Any', **kwargs: 'Any'):
        super().__init__(*args, **kwargs)

        self.username = username
        self.password = password
