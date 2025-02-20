from rest_framework import serializers
from .models import Recipe, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'category', 'title', 'description', 'ingredients', 'instructions', 'created_at']


