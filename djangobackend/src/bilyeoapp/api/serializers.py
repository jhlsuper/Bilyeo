'''
from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id','name', 'nickname', 'password','email','number','rev_star')

class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('user_id','name', 'nickname', 'password','email','number')
'''