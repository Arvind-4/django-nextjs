from django.urls import path

from api.views import (
    get_date,
    index,
)

urlpatterns = [
    path("hello/", index, name="index"),
    path("date/", get_date, name="date"),
]
