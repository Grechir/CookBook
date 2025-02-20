from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from main.views import RecipeViewSet, CategoryViewSet

from drf_yasg.views import get_schema_view as yasg_schema_view
from drf_yasg import openapi

router = DefaultRouter()
router.register(r'recipes', RecipeViewSet)
router.register(r'categories', CategoryViewSet)

schema_view = yasg_schema_view(
    openapi.Info(
        title='Recipe Api',
        default_version='V1',
    ),
    public=True,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path("api/docs/", schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger-ui"),
]