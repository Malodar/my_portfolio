from fastapi import FastAPI
from routers import users
from db import models
from db.database import engine

app = FastAPI()
app.include_router(users.router)

@app.get("/")
def index():
    return {"message": "Hello World!"}

models.Base.metadata.create_all(engine)
