from django.shortcuts import render


from .models import heroImages, testimonials
# Create your views here.
def homepage(request):
    heroImage = heroImages.objects.all()
    reviews = testimonials.objects.all()
    return render(request, 'homepage/homepage.html',{
        'heroImage' : heroImage,
        'reviews' : reviews,
    })