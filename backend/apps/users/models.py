from django.db import models


class User(models.Model):
    firebase_uid = models.CharField(max_length=128, unique=True)
    email = models.EmailField(unique=True)

    nickname = models.CharField(max_length=50)
    jlpt_level = models.CharField(max_length=5)
    gender = models.CharField(max_length=10)
    country = models.CharField(max_length=30)
    major = models.CharField(max_length=50)
    goal = models.CharField()

    age = models.PositiveIntegerField()

    interests = models.JSONField(default=list)
    work_fields = models.JSONField(default=list)
    skills = models.JSONField(default=list)

    agreed_to_terms = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
    
