from backend.database import AsyncSession, get_session
from fastapi import APIRouter, Request, Depends, Form
from backend.templates import get_templates
from fastapi.responses import HTMLResponse
from backend.auth import get_manager

router = APIRouter()


@router.get("/exchange", response_class=HTMLResponse)
def get_send(request: Request, user=Depends(get_manager())):
    return get_templates().TemplateResponse("exchange.html", context={"request": request, 'user': user, "Title": "Обмен", "page": 3})


@router.post("/exchange")
async def post_send(request: Request, db_session: AsyncSession = Depends(get_session), user=Depends(get_manager()), typeA: str = Form(), typeB: str = Form(), count: float = Form(), commission: float = Form()):
    list_metal = ("Rub", "Gold", "Silver", "Palladium", "Platinum")
    if typeA not in list_metal or typeB not in list_metal:
        return get_templates().TemplateResponse("exchange.html", context={"request": request, "user": user, "Error": True, "Title": "Обмен", "page": 3})
    else:
        value = count * (1 + commission / 100)
        if typeA == "Rub" and user.balance_rub >= value:
            user.balance_rub -= value
        elif typeA == "Gold" and user.balance_gold >= value:
            user.balance_gold -= value
        elif typeA == "Silver" and user.balance_silver >= value:
            user.balance_silver -= value
        elif typeA == "Palladium" and user.balance_palladium >= value:
            user.balance_palladium -= value
        elif typeA == "Platinum" and user.balance_platinum >= value:
            user.balance_platinum -= value
        else:
            return get_templates().TemplateResponse("exchange.html", context={"request": request, "user": user, "Error": True, "Title": "Обмен", "page": 3})

        if typeB == "Rub":
            user.balance_rub += count
        elif typeB == "Gold":
            user.balance_gold += count
        elif typeB == "Silver":
            user.balance_silver += count
        elif typeB == "Palladium":
            user.balance_palladium += count
        elif typeB == "Platinum":
            user.balance_platinum += count

        db_session.add(user)
        await db_session.commit()
    return get_templates().TemplateResponse("balance.html", context={"request": request, "user": user, "Title": "Баланс", "page": 0})
