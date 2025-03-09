from django.urls import path
from .views import ActionListView, ActionDetailView

urlpatterns = [
    path('actions/', ActionListView.as_view(), name='action-list'),
    path('actions/<int:action_id>/', ActionDetailView.as_view(), name='action-detail'),
]
