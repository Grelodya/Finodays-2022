from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi import APIRouter, Request, Depends, status, Form
from backend.database import get_session, AsyncSession
from backend.database.tables.users import User
from backend.templates import get_templates
from backend.auth import get_manager
from sqlalchemy.future import select

router = APIRouter()


@router.get("/register", response_class=HTMLResponse)
def get_register(request: Request):
    return get_templates().TemplateResponse("register.html", context={"request": request})


@router.post("/register")
async def post_register(request: Request, db_session: AsyncSession = Depends(get_session), username: str = Form(), password: str = Form()):
    statement = select(User).where(User.username == username)
    result = await db_session.execute(statement)
    if result.scalar():
        return get_templates().TemplateResponse("register.html",
                                                context={"request": request, "Error": "Имя пользователя занято"})
    elif 4 > len(username) or len(username) > 64:
        return get_templates().TemplateResponse("register.html",
                                                context={"request": request,
                                                         "Error": "Логин должен быть от 8 до 256 символов"})
    elif 8 > len(password) or len(password) > 256:
        return get_templates().TemplateResponse("register.html",
                                                context={"request": request,
                                                         "Error": "Пароль должен быть от 8 до 256 символов"})
    else:
        new_user = User(username=username, password=password)
        db_session.add(new_user)
        await db_session.commit()

        manager = get_manager()

        access_token = manager.create_access_token(
            data={"sub": username}
        )
        resp = RedirectResponse(url="/user", status_code=status.HTTP_302_FOUND)
        manager.set_cookie(resp, access_token)
    return resp
