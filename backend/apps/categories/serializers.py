from .models import Category
from rest_framework import serializers

# Register your serializers here.

class CategorySerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Category
        fields = '__all__'