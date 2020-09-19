from bilyeoapp.models import USER
from .serializers import UserSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView
from rest_framework.decorators import api_view
from rest_framework import filters

# 회원정보 리스트 
class UserView(ListAPIView): 
    queryset = USER.objects.all()
    serializer_class = UserSerializer
    
