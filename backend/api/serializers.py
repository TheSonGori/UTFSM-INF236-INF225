from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import *

User = get_user_model()

class UserCreationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    email = serializers.EmailField(required=True)
    is_paciente = serializers.BooleanField(required=True)
    is_medico = serializers.BooleanField(required=True)
    is_radiologo = serializers.BooleanField(required=True)
    first_name = serializers.CharField(required=False, allow_blank=True)
    last_name = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ('email', 'password', 'first_name', 'last_name', 'is_paciente', 'is_medico', 'is_radiologo')

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            is_paciente=validated_data['is_paciente'],
            is_medico=validated_data['is_medico'],
            is_radiologo=validated_data['is_radiologo']
        )
        return user
    def validate(self, data):
        """
        Check that the user does not have conflicting roles.
        """
        if data['is_medico'] and data['is_radiologo']:
            raise serializers.ValidationError("Un usuario no puede ser médico y radiólogo al mismo tiempo.")
        return data


class ExamenMedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamenMedico
        fields = ['id', 'paciente', 'medico', 'tipo_de_examen', 'fecha_hora', 'hora_examen', 'notas']

    def create(self, validated_data):
        return ExamenMedico.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.tipo_de_examen = validated_data.get('tipo_de_examen', instance.tipo_de_examen)
        instance.fecha_hora = validated_data.get('fecha_hora', instance.fecha_hora)
        instance.hora_examen = validated_data.get('hora_examen', instance.hora_examen)
        instance.notas = validated_data.get('notas', instance.notas)
        instance.save()
        return instance