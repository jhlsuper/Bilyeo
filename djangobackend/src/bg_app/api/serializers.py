from rest_framework import serializers
from bg_app.models import BG_BOARD, BG_ITEM, BG_COMMENT

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = BG_ITEM
        fields = ('bg_id','user_id','bg_title', 'bg_content', 'bg_rentalFee', 'image', 'bg_startRentalDate', 'bg_endRentalDate', 'bg_reportingTime', 'bg_request', 'bg_views')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BG_COMMENT
        fields = ('bg_comment_id', 'bg_comment_datetime', 'bg_comment_content')

class CreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BG_ITEM
        fields = ('user_id','bg_title', 'bg_content', 'bg_rentalFee', 'image', 'bg_startRentalDate', 'bg_endRentalDate', 'bg_reportingTime', 'bg_request', 'bg_views')