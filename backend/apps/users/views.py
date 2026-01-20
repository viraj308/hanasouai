from django.http import JsonResponse
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import User
from .firebase import verify_firebase_token

def ping(request):
    return JsonResponse({"message": "users api working"})

@csrf_exempt
def login(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST only"}, status=405)
    
    auth_header = request.headers.get("Authorization")
    
    if not auth_header:
        return JsonResponse({"error": "Missing token"}, status=401)
    
    token = auth_header.split("Bearer ")[-1]

    decoded = verify_firebase_token(token)
    if not decoded:
        return JsonResponse({"error": "Invalid token"}, status=401)
    
    firebase_uid = decoded["uid"]
    email = decoded["email"]
    data = json.loads(request.body)

    if User.objects.filter(firebase_uid=firebase_uid).exists():
        return JsonResponse({"message": "User already registered"})

    return JsonResponse({"message": "Please register"})


@csrf_exempt
def register(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST only"}, status=405)
    
    
