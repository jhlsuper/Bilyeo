from django.db import models

class BJ_ITEM(models.Model):
    bj_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey("bilyeoapp.USER", on_delete=models.CASCADE)
    bj_title = models.CharField(max_length=50)
    bj_content = models.TextField()
    bj_views = models.IntegerField()

    def __str__(self):
        return self.bj_title

class BJ_BOARD(models.Model):
    bj_item = models.ForeignKey(BJ_ITEM, on_delete=models.CASCADE)

class BJ_COMMENT(models.Model):
    bj_comment_id = models.ForeignKey(BJ_ITEM, on_delete=models.CASCADE)
    bj_comment_datetime = models.DateTimeField('date published')
    bj_comment_content = models.TextField()