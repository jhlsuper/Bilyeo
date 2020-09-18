from rest_framework import serializers
from bj_app.models import BJ_BOARD, BJ_ITEM, BJ_COMMENT

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = BJ_ITEM
        fields = ('bj_id','user_id','bj_title', 'bj_content', 'bj_views')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BJ_COMMENT
        fields = ('bj_comment_id', 'bj_comment_datetime', 'bj_comment_content')

class CreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BJ_ITEM
        fields = ('user_id','bj_title', 'bj_content', 'bj_views')