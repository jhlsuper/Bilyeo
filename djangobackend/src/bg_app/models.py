from django.db import models

class BG_ITEM(models.Model):
    bg_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey("bilyeoapp.USER", on_delete=models.CASCADE)
    bg_title = models.CharField(max_length=50)
    bg_content = models.TextField()
    bg_rentalFee = models.IntegerField()
    image = models.ImageField()
    bg_startRentalDate = models.DateField()
    bg_endRentalDate = models.DateField()
    bg_reportingTime = models.DateField()
    bg_request = models.BooleanField()
    bg_views = models.IntegerField()

    def __str__(self):
        return self.bg_content

class BG_BOARD(models.Model):
    bg_item = models.ForeignKey(BG_ITEM, on_delete=models.CASCADE)

class BG_COMMENT(models.Model):
    bg_comment_id = models.ForeignKey(BG_ITEM, on_delete=models.CASCADE)
    bg_comment_datetime = models.DateTimeField('date published')
    bg_comment_content = models.TextField()

class BG_CATEGORY(models.Model):
    ca_id = models.AutoField(primary_key=True)
    ca_postkey = models.IntegerField()
    ca_key = models.CharField(max_length=50)
    ca_value = models.CharField(max_length=50)
    ca_parent = models.CharField(max_length=50)
    bca_order = models.IntegerField()

    def __str__(self):
        return self.ca_value