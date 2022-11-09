from backend.templates import get_templates
from fastapi.responses import HTMLResponse
from fastapi import APIRouter, Request

router = APIRouter()


@router.get("/", response_class=HTMLResponse)
def index(request: Request):
    return get_templates().TemplateResponse("index.html", context={"request": request})
