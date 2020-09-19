from django.contrib import admin
from .models import BG_BOARD, BG_ITEM, BG_COMMENT, BG_CATEGORY

admin.site.register(BG_BOARD)
admin.site.register(BG_ITEM)
admin.site.register(BG_COMMENT)
admin.site.register(BG_CATEGORY)