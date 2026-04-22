import csv
import os
from datetime import datetime
from models import Lead, LeadTemperature

LEADS_FILE = "data/leads.csv"

HEADERS = ["fecha", "nombre", "telefono", "email", "producto", "mensaje", "temperatura", "score", "fuente"]


def _ensure_file():
    if not os.path.exists(LEADS_FILE):
        with open(LEADS_FILE, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(HEADERS)


def save_lead(lead: Lead, temperature: LeadTemperature, score: int, product: str = ""):
    _ensure_file()
    with open(LEADS_FILE, "a", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow([
            datetime.utcnow().strftime("%Y-%m-%d %H:%M"),
            lead.name,
            lead.phone or "",
            lead.email or "",
            product or lead.interest or "",
            lead.message or "",
            temperature.value,
            score,
            lead.source.value,
        ])


def get_leads() -> list[dict]:
    _ensure_file()
    with open(LEADS_FILE, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return list(reader)
