# ID doctor = 1
# ID Paciente = 2

from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from django.http import JsonResponse
from django.utils.dateparse import parse_datetime
from django.views import View

from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .models import *
from .serializers import *
from .utils import *


class ChangePasswordView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        email = data.get('email', None)
        new_password = data.get('new_password', None)

        if email and new_password:
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)
            
            user.password = make_password(new_password)
            user.save()
            return Response({"message": "Password changed successfully."}, status=status.HTTP_200_OK)

        return Response({"error": "Email and new password are required."}, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        data = request.data
        print(data)
        email = data.get('email', None)
        password = data.get('password', None)
        user = authenticate(email=email, password=password)

        if user is not None:
            if user.is_active:
                token, created = Token.objects.get_or_create(user=user)
                user_type = "medico" if user.is_medico else "radiologo" if user.is_radiologo else "paciente" if user.is_paciente else "none"
                return Response({
                    'token': token.key,
                    'user_type': user_type
                }, status=status.HTTP_200_OK)
            else:
                return Response({"error": "This account is not active."}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "Invalid email or password."}, status=status.HTTP_400_BAD_REQUEST)


class CreateUserView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserCreationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User created successfully.", "user_id": user.id}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ExamenMedicoList(View):

    http_method_names = ['get']

    def get(self, request, tipo_de_examen, fecha_hora):
        fecha_hora_parsed = parse_datetime(fecha_hora)
        if fecha_hora_parsed is None:
            return JsonResponse({'error': 'Formato de fecha incorrecto'}, status=400)
        examenes = ExamenMedico.objects.filter(tipo_de_examen=tipo_de_examen, fecha_hora=fecha_hora_parsed)
        data = list(examenes.values('hora_examen'))
        print(data)
        return JsonResponse(data, safe=False)
    
class ExamenMedicoAPIView(APIView):
    def post(self, request):
        dato = request.data
        serializer = ExamenMedicoSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            paciente = Paciente.objects.filter(id=dato.get("paciente", None))
            datosPaciente = paciente.values("usuario", "nombre", "apellido", "dni")
            datosPaciente=datosPaciente[0]
            correo=NewUser.objects.filter(id=datosPaciente["usuario"]).values("email")
            correo=correo[0]["email"]
            enviar_correo(correo, "Reserva Hora para examen de "+dato.get("tipo_de_examen")+".", "Estimad@ "+datosPaciente["nombre"]+" "+datosPaciente["apellido"]+".\nSu hora con fecha "+dato.get("fecha_hora") +" ha sido agendada correctamente." )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)