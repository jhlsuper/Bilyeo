from django.contrib import admin
from .models import USER, BJ_POST, BJ_ITEMS, BJ_COMMENT, BG_POST, BG_ITEMS, BG_COMMENT, BG_CATEGORY, CHAT, NOTIFICATION, PAYMENT, FAQ, REVIEW, REQUEST

admin.site.register(USER)
admin.site.register(BJ_POST)
admin.site.register(BJ_ITEMS)
admin.site.register(BJ_COMMENT)
admin.site.register(BG_POST)
admin.site.register(BG_ITEMS)
admin.site.register(BG_COMMENT)
admin.site.register(BG_CATEGORY)
admin.site.register(CHAT)
admin.site.register(NOTIFICATION)
admin.site.register(PAYMENT)
admin.site.register(FAQ)
admin.site.register(REVIEW)
admin.site.register(REQUEST)