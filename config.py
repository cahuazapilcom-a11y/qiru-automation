from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # Anthropic
    anthropic_api_key: str

    # HubSpot
    hubspot_api_key: str

    # SendGrid
    sendgrid_api_key: str
    sendgrid_from_email: str = "noreply@quirucenter.com"
    sendgrid_from_name: str = "Qiru Center"

    # Owner
    owner_email: str = "cahuazapilcom@gmail.com"
    owner_whatsapp: str = "918156548"

    # Business
    business_name: str = "Qiru Center, Tu Hogar Bonito"
    business_phone: str = "918156548"

    # Meta WhatsApp Business API
    meta_whatsapp_token: str = ""
    meta_whatsapp_phone_id: str = ""
    meta_verify_token: str = "qiru_verify_2024"

    # Security
    zapier_secret: str = ""

    class Config:
        env_file = ".env"


settings = Settings()

PRODUCTS = [
    {"name": "Colchón Pocket Star Negro King – Alm y Prot", "category": "Colchones", "material": "Pocket Star", "price": 789.00},
    {"name": "Colchón Pocket Star King – Alm y Prot", "category": "Colchones", "material": "Pocket Star", "price": 1758.00},
    {"name": "Almohada Anatómica de Napa Siliconada", "category": "Almohadas", "material": "Napa Siliconada", "price": 82.00},
    {"name": "Cuna de Bebés", "category": "Cunas", "material": "Madera", "price": 650.00},
    {"name": "Mesa Comedor de 3 Sillas", "category": "Comedores", "material": "Madera", "price": 750.00},
    {"name": "Colchón Royal Abrazzo King – Alm Visce y Prot", "category": "Colchones", "material": "Royal Abrazzo", "price": 2557.78},
    {"name": "Colchón Royal Prince King – Alm Visce y Prot", "category": "Colchones", "material": "Royal Prince", "price": 2486.66},
    {"name": "Almohada Drimer", "category": "Almohadas", "material": "Drimer", "price": 50.00},
    {"name": "Colchón Zebra 16 Ribeteado 16 kg/m3 2 Plazas 5\"", "category": "Colchones", "material": "Espuma 16 kg/m3", "price": 159.00},
    {"name": "Colchón Medallón Ergosoft King – Alm y Prot", "category": "Colchones", "material": "Ergosoft", "price": 529.00},
    {"name": "Colchón Super Star King – Alm y Prot", "category": "Colchones", "material": "Super Star", "price": 699.00},
    {"name": "Cama de 2 Plazas", "category": "Camas", "material": "Madera", "price": 950.00},
    {"name": "Cama de 2 Plazas + Sábana en Madera Huyruro", "category": "Camas", "material": "Madera Huyruro", "price": 1380.00},
    {"name": "Cama de 2 Plazas y Media", "category": "Camas", "material": "Madera", "price": 1650.00},
    {"name": "Cama Colonial 2 Plazas y Media", "category": "Camas", "material": "Madera Colonial", "price": 1680.00},
    {"name": "Comedor de 6 Sillas", "category": "Comedores", "material": "Madera", "price": 2100.00},
]

FOLLOWUP_DAYS = [3, 7]
