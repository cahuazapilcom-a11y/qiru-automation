import httpx
from config import settings

GRAPH_URL = "https://graph.facebook.com/v19.0"


async def send_whatsapp_message(to: str, text: str) -> bool:
    if not settings.meta_whatsapp_token or not settings.meta_whatsapp_phone_id:
        return False

    url = f"{GRAPH_URL}/{settings.meta_whatsapp_phone_id}/messages"
    headers = {
        "Authorization": f"Bearer {settings.meta_whatsapp_token}",
        "Content-Type": "application/json",
    }
    payload = {
        "messaging_product": "whatsapp",
        "to": to,
        "type": "text",
        "text": {"body": text},
    }

    async with httpx.AsyncClient() as client:
        resp = await client.post(url, json=payload, headers=headers, timeout=10)
        return resp.status_code == 200


def extract_message(body: dict) -> tuple[str, str, str] | tuple[None, None, None]:
    """Returns (phone, text, name) from Meta webhook payload, or (None, None, None)."""
    try:
        entry = body["entry"][0]
        change = entry["changes"][0]["value"]
        msg = change["messages"][0]
        phone = msg["from"]
        text = msg.get("text", {}).get("body", "").strip()
        contacts = change.get("contacts", [])
        name = contacts[0]["profile"]["name"] if contacts else ""
        return phone, text, name
    except (KeyError, IndexError):
        return None, None, None
