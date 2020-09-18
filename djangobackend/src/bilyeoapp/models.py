from django.db import models

class USER(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    nickname = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    number = models.CharField(max_length=50)
    rev_star = models.IntegerField()

    def __str__(self):
        return self.user_id

class CHAT(models.Model):
    msg_id = models.IntegerField()
    user_user_id = models.CharField(max_length=50)
    date = models.DateTimeField('date published')
    context = models.TextField()
    bg_requset = models.ForeignKey("bg_app.BG_ITEM", on_delete=models.CASCADE)

    def __str__(self):
        return self.context

class NOTIFICATION(models.Model):
    not_id = models.AutoField(primary_key=True)
    mem_it = models.IntegerField()
    target_mem_id = models.IntegerField()
    not_type = models.CharField(max_length=50)
    not_Content_id = models.IntegerField()
    not_message = models.CharField(max_length=50)
    not_url = models.CharField(max_length=50)
    not_datetime = models.DateTimeField('date published')
    not_read_datetime = models.DateTimeField('date published')

    def __str__(self):
        return self.not_message

class PAYMENT(models.Model):
    pay_id = models.AutoField(primary_key=True)
    pay_pg = models.CharField(max_length=50)
    pay_type = models.CharField(max_length=50) 
    pay_data = models.TextField()
    pay_datetime = models.DateTimeField('date published')

    def __str__(self):
        return self.pay_type

class FAQ(models.Model):
    faq_id = models.AutoField(primary_key=True)
    faq_title = models.TextField()
    faq_content = models.TextField()
    faq_order = models.IntegerField()
    faq_datetime = models.DateTimeField('date published')
    mem_id = models.IntegerField()

    def __str__(self):
        return self.faq_title

class REVIEW(models.Model):
    rev_id = models.AutoField(primary_key=True)
    bg_id = models.IntegerField()
    rev_title = models.CharField(max_length=50)
    rev_content = models.TextField()
    mem_id = models.IntegerField() 
    rev_star = models.IntegerField()
    rev_datetime = models.DateTimeField('date published')

    def __str__(self):
        return self.rev_title

class REQUEST(models.Model):
    req_id = models.AutoField(primary_key=True)
    user_id = models.IntegerField()
    user_nickname = models.CharField(max_length=50)
    user_realname = models.CharField(max_length=50)
    user_email = models.CharField(max_length=50)
    user_phone = models.CharField(max_length=50)
    req_total_money = models.IntegerField()
    pay_id = models.CharField(max_length=50)
    pay_pg = models.CharField(max_length=50)
    pay_datetime = models.DateTimeField('date published')
    req_datetime = models.DateTimeField('date published')
    req_status = models.IntegerField()

    def __str__(self):
        return self.user_realname