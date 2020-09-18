from django.db import models

class USER(models.Model):
    id = models.AutoField(primary_key=True)
    user_nickname = models.CharField(max_length=50)
    user_id = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    number = models.CharField(max_length=50)
    ca_key = models.CharField(max_length=50)
    pay_id = models.CharField(max_length=50)
    rev_star = models.IntegerField()

    def __str__(self):
        return self.user_id

class CHAT(models.Model):
    msg_id = models.IntegerField()
    user_user_id = models.CharField(max_length=50)
    date = models.DateTimeField('date published')
    context = models.TextField()
    bg_requset = models.BooleanField()

    def __str__(self):
        return self.context

class BJ_POST(models.Model):
    bj_id = models.AutoField(primary_key=True)
    bj_writer_id = models.CharField(max_length=50)
    bj_datetime = models.DateTimeField('date published')
    bj_title = models.CharField(max_length=50)
    bj_content = models.TextField()

    def __str__(self):
        return self.bj_title

class BJ_COMMENT(models.Model):
    bj_id = models.AutoField(primary_key=True)
    bj_comment_id = models.CharField(max_length=50)
    bj_comment_datetime = models.DateTimeField('date published')
    bj_comment_content = models.TextField()

    def __str__(self):
        return self.bj_comment_content

class BJ_ITEMS(models.Model):
    bj_items_id = models.ForeignKey(BJ_COMMENT, on_delete=models.CASCADE)
    bj_price = models.IntegerField()
    bj_term = models.DateTimeField('date published')
    bj_content = models.TextField()
    bj_count = models.IntegerField()

    def __str__(self):
        return self.bj_items_id

class BG_POST(models.Model):
    bg_id = models.AutoField(primary_key=True)
    bg_writer_id = models.CharField(max_length=50)
    bg_datetime = models.DateTimeField('date published')
    bg_title = models.CharField(max_length=50)
    bg_content = models.TextField()

    def __str__(self):
        return self.bg_title

class BG_COMMENT(models.Model):
    bg_id = models.AutoField(primary_key=True)
    bg_comment_id = models.CharField(max_length=50)
    bg_comment_datetime = models.DateTimeField('date published')
    bg_comment_content = models.TextField()

    def __str__(self):
        return self.bg_comment_content

class BG_ITEMS(models.Model):
    bg_items_id = models.ForeignKey(BG_COMMENT, on_delete=models.CASCADE)
    bg_price = models.IntegerField()
    bg_term = models.DateTimeField('date published')
    bg_content = models.TextField()
    bg_count = models.IntegerField()
    bg_image = models.ImageField(upload_to='images/',blank=True, null=True)
    ca_key = models.IntegerField()
    bg_request = models.ForeignKey(CHAT, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.bg_content

class BG_CATEGORY(models.Model):
    ca_id = models.AutoField(primary_key=True)
    ca_postkey = models.IntegerField()
    ca_key = models.CharField(max_length=50)
    ca_value = models.CharField(max_length=50)
    ca_parent = models.CharField(max_length=50)
    bca_order = models.IntegerField()

    def __str__(self):
        return self.ca_value

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