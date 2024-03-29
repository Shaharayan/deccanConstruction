from django.contrib import admin

# Register your models here.
from .models import heroImages, testimonials

admin.site.register(heroImages)
admin.site.register(testimonials)