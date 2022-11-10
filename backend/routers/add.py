from backend.database import AsyncSession, get_session
from fastapi import APIRouter, Request, Depends, Form
from backend.templates import get_templates
from fastapi.responses import HTMLResponse
from backend.auth import get_manager

router = APIRouter()


@router.get("/add", response_class=HTMLResponse)
def get_send(request: Request, user=Depends(get_manager())):
    return get_templates().TemplateResponse("add.html", context={"request": request, 'user': user, "Title": "Пополнить", "page": 1})


@router.post("/add")
async def post_send(request: Request, db_session: AsyncSession = Depends(get_session), user=Depends(get_manager()), count: float = Form(), commission: float = Form()):
    user.balance_rub += count

    db_session.add(user)
    await db_session.commit()
    return get_templates().TemplateResponse("balance.html", context={"request": request, "user": user, "Title": "Баланс", "page": 0})
