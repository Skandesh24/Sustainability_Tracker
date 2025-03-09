import json
import os
from datetime import date
from django.conf import settings

DATA_FILE = os.path.join(settings.BASE_DIR, 'actions', 'data.json')

def load_data():
    """Load actions from JSON file."""
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as file:
            return json.load(file)
    return []

def save_data(data):
    """Convert dates to string and save actions to JSON file."""
    for item in data:
        if isinstance(item["date"], date):  # Convert date object to string
            item["date"] = item["date"].isoformat()

    with open(DATA_FILE, 'w') as file:
        json.dump(data, file, indent=4)
