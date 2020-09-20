from rest_framework import serializers
from bilyeoapp.models import USER

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = USER
        fields = ('user_id','name', 'nickname', 'password','email','number','rev_star')

class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = USER
        fields = ('user_id','name', 'nickname', 'password','email','number')