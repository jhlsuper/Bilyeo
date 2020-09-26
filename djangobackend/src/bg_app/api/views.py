from bg_app.models import BG_BOARD, BG_ITEM, BG_COMMENT
from .serializers import ItemSerializer, CommentSerializer, CreateSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView

class BoardView(ListAPIView):
    queryset = BG_ITEM.objects.all()
    serializer_class = ItemSerializer
    
class ItemView(RetrieveAPIView):
    queryset = BG_ITEM.objects.all()
    serializer_class = ItemSerializer

class ItemCreateView(ListCreateAPIView):
    queryset = BG_ITEM.objects.all()
    serializer_class = CreateSerializer

class ItemUpdateView(RetrieveUpdateAPIView):
    queryset = BG_ITEM.objects.all()
    serializer_class = ItemSerializer    

class ItemDeleteView(RetrieveDestroyAPIView):
    queryset = BG_ITEM.objects.all()
    serializer_class = ItemSerializer  

class CommentView(RetrieveAPIView):
    queryset = BG_COMMENT.objects.all()
    serializer_class = CommentSerializer

class CommentCreateView(ListCreateAPIView):
    queryset = BG_COMMENT.objects.all()
    serializer_class = CommentSerializer