import json
import anthropic
from config import settings, PRODUCTS

client = anthropic.Anthropic(api_key=settings.anthropic_api_key)

# In-memory conversation store: phone → list of messages
_conversations: dict[str, list[dict]] = {}

PRODUCT_LIST = "\n".join(
    f"- {p['name']} — S/. {p['price']:,.2f}" for p in PRODUCTS
)

SYSTEM_PROMPT = f"""Eres Qiru, el asistente virtual de Qiru Center — una tienda de muebles, colchones y artículos para el hogar en Perú.
Tu número de WhatsApp es +51 939975894.

HORARIO DE ATENCIÓN:
- Atendemos las 24 horas, los 7 días de la semana.

DIRECCIÓN:
- Calle Jauregui 612

FORMAS DE PAGO:
- BCP Soles: 585-94710401040 / CCI: 00258519471040104081
- BBVA Soles: 0011-0324-0200326549 / CCI: 01132400020032654919
- Yape: 901922728
- Todos los pagos a nombre de: *Onan Carrasco Panduro*

DIRECCIÓN DE LA TIENDA:
- Calle Jauregui 612
- Ver ubicación en Google Maps: https://maps.app.goo.gl/p11yiuxcQjiaZ3Ks5

CATÁLOGO ACTUAL:
{PRODUCT_LIST}
...y mucho más para tu hogar.

OBJETIVO:
1. Responder preguntas sobre productos, precios y disponibilidad.
2. Cuando el cliente quiera comprar, guiarlo paso a paso para tomar el pedido.
3. Al confirmar el pedido devolver un JSON estructurado (ver formato abajo).

REGLAS:
- Siempre responde en español, de forma amable y breve (máx 3 párrafos cortos).
- Si el cliente pide ver el catálogo, muestra los productos en grupos (Colchones, Camas, Muebles, Sábanas).
- Para sábanas, indica siempre el precio por unidad y el precio al por mayor (Twin S/70/unid — S/65 mayor | Full S/85/unid — S/80 mayor | Queen S/95/unid — S/90 mayor). El catálogo muestra el precio mayor.
- Si el cliente pregunta cómo pagar, muestra todas las formas de pago.
- Si el cliente pregunta la dirección o ubicación, comparte el link de Google Maps.
- Para tomar un pedido necesitas: nombre completo, número de teléfono, distrito/dirección de entrega y producto elegido.
- Cuando tengas todos los datos del pedido, responde ÚNICAMENTE con este JSON (sin texto extra):
{{
  "order": true,
  "name": "<nombre>",
  "phone": "<teléfono>",
  "address": "<dirección>",
  "product": "<producto>",
  "price": <precio como número>,
  "summary": "<mensaje de confirmación amigable para enviar al cliente>"
}}
- Si el cliente no quiere comprar todavía, sé útil e invítalo a consultar cuando quiera.
- No inventes precios que no están en el catálogo."""


async def process_message(phone: str, text: str, customer_name: str = "") -> str:
    """Process incoming message and return bot reply."""
    is_new = phone not in _conversations
    if is_new:
        _conversations[phone] = []

    # On first message, prepend customer name to text so Claude can greet by name
    if is_new and customer_name:
        _conversations[phone].append({
            "role": "user",
            "content": f"[Mi nombre en WhatsApp es: {customer_name}]\n{text}"
        })
    else:
        _conversations[phone].append({"role": "user", "content": text})

    # Keep last 20 messages to avoid token overflow
    history = _conversations[phone][-20:]

    response = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=600,
        system=SYSTEM_PROMPT,
        messages=history,
    )

    reply = response.content[0].text.strip()
    _conversations[phone].append({"role": "assistant", "content": reply})

    return reply


def parse_order(reply: str) -> dict | None:
    """If the reply contains an order JSON, extract and return it."""
    try:
        # Try to find JSON block in reply
        start = reply.find("{")
        end = reply.rfind("}") + 1
        if start == -1:
            return None
        data = json.loads(reply[start:end])
        if data.get("order"):
            return data
    except (json.JSONDecodeError, ValueError):
        pass
    return None


def clear_conversation(phone: str):
    _conversations.pop(phone, None)
