from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('Home',index),
    path('SelectFeature',index),
    path('Metrics',index),
    path('Registration',index),
    path('Stitching',index),
    path('Validation',index),
]