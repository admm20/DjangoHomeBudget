from django.shortcuts import render, redirect
from django.http import HttpResponse

# SIGN UP:
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm, User
from main.forms import SignUpForm

# Create your views here.

def home(request):
    user = None
    if request.user.is_authenticated:
        user = request.user
    return render(request, "main/home.html", {'user': user})

# def user_logout(request):
#     if request.user.is_authenticated:
#         logout(request)
#     return HttpResponse("Wylogowano")

# https://simpleisbetterthancomplex.com/tutorial/2017/02/18/how-to-create-user-sign-up-view.html
def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('/home')
    else:
        form = SignUpForm()
    return render(request, 'main/signup.html', {'form': form})