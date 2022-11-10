from backend.database import AsyncSession, get_session
from fastapi import APIRouter, Request, Depends, Form
from backend.database.tables.users import User
from backend.templates import get_templates
from fastapi.responses import HTMLResponse
from backend.auth import get_manager
from sqlalchemy.future import select

router = APIRouter()


@router.get("/send", response_class=HTMLResponse)
def get_send(request: Request, user=Depends(get_manager())):
    return get_templates().TemplateResponse("send.html", context={"request": request, 'user': user, "Title": "Отправить", "page": 2})


@router.post("/send")
async def post_send(request: Request, db_session: AsyncSession = Depends(get_session), user=Depends(get_manager()), token: str = Form(), type: str = Form(), count: float = Form(), commission: float = Form()):
    statement = select(User).where(User.token == token)
    result = await db_session.execute(statement)
    other_user = result.scalar()
    if not other_user or type not in ("GGC", "Gold", "Silver", "Palladium", "Platinum") or count <= 0 or 0 > commission > 100:
        return get_templates().TemplateResponse("send.html", context={"request": request, "user": user, "Error": True, "Title": "Отправить", "page": 2})
    else:
        value = count * (1 + commission / 100)
        if type == "GGC" and user.balance_rub >= value:
            user.balance_rub -= value
            other_user.balance_rub += count
        elif type == "Gold" and user.balance_gold >= value:
            user.balance_gold -= value
            other_user.balance_gold += count
        elif type == "Silver" and user.balance_silver >= value:
            user.balance_silver -= value
            other_user.balance_silver += count
        elif type == "Palladium" and user.balance_palladium >= value:
            user.balance_palladium -= value
            other_user.balance_palladium += count
        elif type == "Platinum" and user.balance_platinum >= value:
            user.balance_platinum -= value
            other_user.balance_platinum += count
        else:
            return get_templates().TemplateResponse("send.html", context={"request": request, "user": user, "Error": True, "Title": "Отправить", "page": 2})

        db_session.add_all([other_user, user])
        await db_session.commit()
    return get_templates().TemplateResponse("balance.html", context={"request": request, "user": user, "Title": "Баланс", "page": 0})
