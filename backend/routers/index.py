from fastapi import APIRouter, Request, Depends
from backend.templates import get_templates
from fastapi.responses import HTMLResponse
from backend.auth import get_manager

router = APIRouter()


@router.get("/user", response_class=HTMLResponse)
def index(request: Request, user=Depends(get_manager())):
    return get_templates().TemplateResponse("balance.html", context={"request": request, 'user': user, "Title": "Баланс", "page": 0})
