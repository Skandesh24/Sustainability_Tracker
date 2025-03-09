from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import load_data, save_data
from .serializers import ActionSerializer

class ActionListView(APIView):
    """Handles GET and POST requests for actions."""
    def get(self, request):
        """Retrieve all sustainability actions."""
        data = load_data()
        return Response(data)

    def post(self, request):
        """Add a new sustainability action."""
        data = load_data()
        new_id = max([item["id"] for item in data], default=0) + 1
        action = {"id": new_id, **request.data}
        serializer = ActionSerializer(data=action)

        if serializer.is_valid():
            data.append(serializer.validated_data)
            save_data(data)
            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ActionDetailView(APIView):
    """Handles GET, PUT, PATCH, and DELETE for individual actions."""

    def get(self, request, action_id):
        """Retrieve a specific action."""
        data = load_data()
        action = next((item for item in data if item["id"] == action_id), None)
        if action:
            return Response(action)
        return Response({"error": "Action not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, action_id):
        """Update an action."""
        data = load_data()
        action = next((item for item in data if item["id"] == action_id), None)
        if not action:
            return Response({"error": "Action not found"}, status=status.HTTP_404_NOT_FOUND)

        action.update(request.data)
        save_data(data)
        return Response(action)

    def delete(self, request, action_id):
        """Delete an action."""
        data = load_data()
        action = next((item for item in data if item["id"] == action_id), None)
        if not action:
            return Response({"error": "Action not found"}, status=status.HTTP_404_NOT_FOUND)

        data.remove(action)
        save_data(data)
        return Response(status=status.HTTP_204_NO_CONTENT)
