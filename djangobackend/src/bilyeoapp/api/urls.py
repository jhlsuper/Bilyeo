
from django.urls import path
#from .views import LoginView, SignupView, Userview
from .views import  UserView

urlpatterns = [
    #path('login/', LoginView.as_view()),
    #path('signup/', SignupView.as_view()),
    path('', UserView.as_view()),
]
