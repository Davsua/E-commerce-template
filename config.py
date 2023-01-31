# from django.conf import settings
# from django.utils import timezone
# from django.db import models

# class tarjeta(models.Model):

#     # tarjeta.
#     autor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     title = models.CharField(max_length=150)
#     text = models.TextField()
#     create_date = models.DateTimeField(default=timezone.now())
#     published_date = models.DateTimeField(blank=True, null=True)

#     def publish(self):
#         self.published_date = timezone.now()
#         self.save()

#     def __str__(self):
#         return self.title