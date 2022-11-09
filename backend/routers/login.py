from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi import APIRouter, Request, Depends, status
from fastapi.security import OAuth2PasswordRequestForm
from backend.auth import get_manager, load_user
from backend.templates import get_templates

router = APIRouter()


@router.get("/login", response_class=HTMLResponse)
def get_login(request: Request):
    return get_templates().TemplateResponse("login.html", context={"request": request})


@router.post("/login")
async def post_login(request: Request, data: OAuth2PasswordRequestForm = Depends()):
    username = data.username
    password = data.password
    user = await load_user(username)
    if not user or password != user.password:
        return get_templates().TemplateResponse("login.html", context={"request": request, "Error": True})
    else:
        manager = get_manager()

        access_token = manager.create_access_token(
            data={"sub": username}
        )
        resp = RedirectResponse(url="/user", status_code=status.HTTP_302_FOUND)
        manager.set_cookie(resp, access_token)
    return resp
