from bj_app.models import BJ_BOARD, BJ_ITEM, BJ_COMMENT
from .serializers import ItemSerializer, CommentSerializer, CreateSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView

class BoardView(ListAPIView):
    queryset = BJ_ITEM.objects.all()
    serializer_class = ItemSerializer
    
class ItemView(RetrieveAPIView):
    queryset = BJ_ITEM.objects.all()
    serializer_class = ItemSerializer

class ItemCreateView(ListCreateAPIView):
    queryset = BJ_ITEM.objects.all()
    serializer_class = CreateSerializer

class ItemUpdateView(RetrieveUpdateAPIView):
    queryset = BJ_ITEM.objects.all()
    serializer_class = ItemSerializer    

class ItemDeleteView(RetrieveDestroyAPIView):
    queryset = BJ_ITEM.objects.all()
    serializer_class = ItemSerializer  

class CommentView(RetrieveAPIView):
    queryset = BJ_COMMENT.objects.all()
    serializer_class = CommentSerializer

class CommentCreateView(ListCreateAPIView):
    queryset = BJ_COMMENT.objects.all()
    serializer_class = CommentSerializer