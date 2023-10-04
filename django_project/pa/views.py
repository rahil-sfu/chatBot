from django.shortcuts import render
from .models import Query

def home(request):
    context = {
        'posts': Query.objects.all()
    }

    return render(request, 'pa/home.html', context)