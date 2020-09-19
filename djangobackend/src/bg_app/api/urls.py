'''
from django.urls import path
from .views import BoardView, ItemView, CreateView, CommentView, SearchView

urlpatterns = [
    path('', BoardView.as_view()),
    path('<pk>', ItemView.as_view()),
    path('create', CreateView.as_view()),
    path('<pk>/com', CommentView.as_view()), 
    path('title=[keyword]', SearchView.as_view()),
]
'''