from django.http import HttpResponse
from django.shortcuts import render
# Create your views here.
# Where all our endpoints go

#takes in a request returns a response
def main(request):
    return HttpResponse("Hello")