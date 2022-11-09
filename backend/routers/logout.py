from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi import APIRouter, Depends, status
from backend.auth import get_manager

router = APIRouter()


@router.get("/logout", response_class=HTMLResponse)
def protected_route(_=Depends(get_manager())):
    resp = RedirectResponse(url="/login", status_code=status.HTTP_302_FOUND)
    get_manager().set_cookie(resp, "")
    return resp
