from django.urls import path
from .views import LoginView, CreateUserView, ExamenMedicoList, ExamenMedicoAPIView, ChangePasswordView

urlpatterns = [
    path('login/', LoginView.as_view(), name='api_login'),
    path('register/', CreateUserView.as_view(), name='api_register'),
    path('examenes-medicos/<str:fecha_hora>/<str:tipo_de_examen>/', ExamenMedicoList.as_view(), name='examen-medico-lista'),
    path('examenes/', ExamenMedicoAPIView.as_view(), name='examenes-medicos'),
    path('cambio/', ChangePasswordView.as_view(), name="cambio"),

]
