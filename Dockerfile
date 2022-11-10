FROM python:3.11.0

WORKDIR /home/api

COPY . .
COPY requirements.txt requirements.txt
COPY backendConfig.py backendConfig.py

RUN apt full-upgrade -y && \
    python3 -m venv . && \
    pip install -r requirements.txt && \
    rm -rf /var/lib/apt/lists

ENTRYPOINT ["uvicorn", "server:app", "--port", "9000", "--host", "0.0.0.0"]