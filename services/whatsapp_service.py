import httpx
import logging
from config import settings

logger = logging.getLogger(__name__)
GRAPH_URL = "https://graph.facebook.com/v19.0"


async def send_whatsapp_message(to: str, text: str) -> bool:
    if not settings.meta_whatsapp_token or not settings.meta_whatsapp_phone_id:
        logger.error("WhatsApp: token or phone_id not configured")
        return False

    phone_id = settings.meta_whatsapp_phone_id.strip()
    token = settings.meta_whatsapp_token.strip()
    url = f"{GRAPH_URL}/{phone_id}/messages"
    headers = {
        "Authorization": f"Bearer {token}",
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
        if resp.status_code != 200:
            logger.error("WhatsApp send failed: status=%s body=%s", resp.status_code, resp.text)
            return False
        return True


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
