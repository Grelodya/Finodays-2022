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
    list_metal = ("GGC", "Gold", "Silver", "Palladium", "Platinum")
    if typeA not in list_metal or typeB not in list_metal:
        return get_templates().TemplateResponse("exchange.html", context={"request": request, "user": user, "Error": True, "Title": "Обмен", "page": 3})
    else:
        if typeA == "GGC" and user.balance_rub >= count:
            user.balance_rub -= count
        elif typeA == "Gold" and user.balance_gold >= count:
            user.balance_gold -= count
        elif typeA == "Silver" and user.balance_silver >= count:
            user.balance_silver -= count
        elif typeA == "Palladium" and user.balance_palladium >= count:
            user.balance_palladium -= count
        elif typeA == "Platinum" and user.balance_platinum >= count:
            user.balance_platinum -= count
        else:
            return get_templates().TemplateResponse("exchange.html", context={"request": request, "user": user, "Error": True, "Title": "Обмен", "page": 3})

        value = count * (1 - commission / 100)
        if typeB == "GGC":
            user.balance_rub += value
        elif typeB == "Gold":
            user.balance_gold += value
        elif typeB == "Silver":
            user.balance_silver += value
        elif typeB == "Palladium":
            user.balance_palladium += value
        elif typeB == "Platinum":
            user.balance_platinum += value

        db_session.add(user)
        await db_session.commit()
    return get_templates().TemplateResponse("balance.html", context={"request": request, "user": user, "Title": "Баланс", "page": 0})
