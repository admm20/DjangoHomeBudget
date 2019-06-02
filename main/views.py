from django.shortcuts import render, redirect
from django.http import HttpResponse

# SIGN UP:
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm, User
from main.forms import SignUpForm

from main.models import Cash

# Create your views here.

def firstpage(request):
    user = None
    if request.user.is_authenticated:
        user = request.user
    print(request.user)
    return render(request, "main/firstpage.html", {'user': user})

def home(request):
    user = None
    if request.user.is_authenticated:
        user = request.user
    print(request.user)
    return render(request, "main/home.html", {'user': user})

def balance(request):
    if request.user.is_authenticated:
        user = request.user
        return render(request, "main/balance.html", {'user': user})
    else:
        return redirect('/home/')

def income(request):
    if request.user.is_authenticated:
        user = request.user
        
        number = request.POST.get('number', '')
        datea = request.POST.get('date', '')

        if number != "":
            cashModel = Cash(money=float(number), date=datea)
            cashModel.save()

        dataCash = Cash.objects.all()

        #return render(request, "main/income.html", {'user': user})
        return render(request, "main/income.html", {'user': user, 'dataCash': dataCash})


    else:
        return redirect('/home/')

def expenses(request):
    if request.user.is_authenticated:
        user = request.user
        return render(request, "main/expenses.html", {'user': user})
    else:
        return redirect('/home/')

def userpanel(request):
    if request.user.is_authenticated:
        user = request.user
        return render(request, "main/userpanel.html", {'user': user})
    else:
        return redirect('/home/')

# https://simpleisbetterthancomplex.com/tutorial/2017/02/18/how-to-create-user-sign-up-view.html
def signup(request):

    if request.user.is_authenticated:
        return redirect('/home/')

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
        
    return render(request, 'main/signup.html', {'form': form, 'user': None})