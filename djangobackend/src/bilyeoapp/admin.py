from django.contrib import admin
from .models import USER, CHAT, NOTIFICATION, PAYMENT, FAQ, REVIEW, REQUEST

admin.site.register(USER)
admin.site.register(CHAT)
admin.site.register(NOTIFICATION)
admin.site.register(PAYMENT)
admin.site.register(FAQ)
admin.site.register(REVIEW)
admin.site.register(REQUEST)