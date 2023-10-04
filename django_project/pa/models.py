from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Query(models.Model):
    question = models.CharField(max_length=200)
    answer = models.CharField(max_length=200)
    date_asked = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    def __str__(self) -> str:
        return self.question