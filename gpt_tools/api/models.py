from django.db import models
import string
import random

def unique_code_generator():
    length = 12

    while True:
        code = ''.join(random.choices(string.ascii_letters, k=length))
        if PainEscale.objects.filter(code=code).count() == 0:
            break

    return code    

# Create your models here.
class PainEscale(models.Model):
    code = models.CharField(max_length=15, default=unique_code_generator, unique = True)
    session = models.CharField(max_length=50, unique = True)
    whoareyou = models.CharField(max_length=48, default='')
    product = models.CharField(max_length=64, default='')
    descript = models.CharField(max_length=256, default='')
    trouble = models.CharField(max_length=256, default='')
    target = models.CharField(max_length=256, default='')
    channel = models.CharField(max_length=48, default='')
    feedback = models.CharField(max_length=256, default='')
    created_at = models.DateTimeField(auto_now_add=True)