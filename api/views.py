import datetime
from django.http import (
    HttpRequest,
    JsonResponse,
)

# Create your views here.


def index(request: HttpRequest):
    return JsonResponse({"message": "Welcome to the API"})


def get_date(request: HttpRequest):
    date_india = datetime.datetime.now() + datetime.timedelta(hours=5, minutes=30)
    date = date_india.strftime("%Y-%m-%d %H:%M:%S")
    return JsonResponse({"date": date})
