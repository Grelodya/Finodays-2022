from fastapi.templating import Jinja2Templates


_templates: Jinja2Templates | None = None


def create_templates():
    global _templates
    _templates = Jinja2Templates(directory="backend/templates")


def get_templates() -> Jinja2Templates:
    return _templates
