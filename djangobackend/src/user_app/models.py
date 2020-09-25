from django.db import models


class USER(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    nickname = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    number = models.CharField(max_length=11)
    rev_star = models.IntegerField()

    def __str__(self):
        return self.user_id

