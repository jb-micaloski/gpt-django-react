from django.urls import path
from .views import PainEscaleView, CreateCCView


urlpatterns = [
    path('view', PainEscaleView.as_view()),
    path('create-session', CreateCCView.as_view()),
]