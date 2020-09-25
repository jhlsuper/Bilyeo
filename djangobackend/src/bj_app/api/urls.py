from django.urls import path
from django.conf.urls import url
from django.contrib import admin
from .views import(
    BoardView, 
    ItemView, 
    ItemCreateView,
    ItemUpdateView, 
    ItemDeleteView,
    CommentView,
    CommentCreateView,
)

urlpatterns = [
    path('', BoardView.as_view()),
    path('create', ItemCreateView.as_view()),
    path('<pk>', ItemView.as_view()),
    path('<pk>/update', ItemUpdateView.as_view()),
    path('<pk>/delete', ItemDeleteView.as_view()),
    path('<pk>/com', CommentView.as_view()),
    path('<pk>/com/create', CommentCreateView.as_view()),
]