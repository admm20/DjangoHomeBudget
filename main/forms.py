from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class SignUpForm(UserCreationForm):
    first_name = forms.CharField(label='Imię', max_length=30, required=False, help_text='Opcjonalnie')
    last_name = forms.CharField(label='Nazwisko', max_length=30, required=False, help_text='Opcjonalnie')
    email = forms.EmailField(max_length=254, help_text='Wymagane')

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2', )

'''class ChangePassword(UserCreationForm):
    class Meta:
        model = User
        fields = ('password1', 'password2', )'''