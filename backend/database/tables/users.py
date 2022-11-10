from sqlalchemy import Column, String, Integer, DateTime, Float
from backend.database import Base
from secrets import token_urlsafe
from typing import TYPE_CHECKING
from datetime import datetime

if TYPE_CHECKING:
    from typing import Any


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    username = Column(String(64), index=True)
    password = Column(String(256))
    token = Column(String(16))
    created_date = Column(DateTime, default=datetime.now())

    balance_rub = Column(Float, default=0)
    balance_gold = Column(Float, default=0)
    balance_silver = Column(Float, default=0)
    balance_platinum = Column(Float, default=0)
    balance_palladium = Column(Float, default=0)

    def __init__(self, username: str, password: str, *args: 'Any', **kwargs: 'Any'):
        super().__init__(*args, **kwargs)

        self.username = username
        self.password = password
        self.token = token_urlsafe(8)
