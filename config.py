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
    owner_email: str = "Ocarrascop.09@gmail.com"
    owner_whatsapp: str = "939975894"

    # Business
    business_name: str = "Qiru Center, Tu Hogar Bonito"
    business_phone: str = "939975894"

    # Meta WhatsApp Business API
    meta_whatsapp_token: str = ""
    meta_whatsapp_phone_id: str = ""
    meta_verify_token: str = "qiru_verify_2024"

    # Security
    zapier_secret: str = ""
    admin_username: str = "admin"
    admin_password: str = "qiru2024"
    admin_api_key: str = "qiru-admin-key-2024"

    class Config:
        env_file = ".env"


settings = Settings()

PRODUCTS = [
    # Colchones — Línea Premium (Medallón Ergosoft)
    {"name": "Medallón 2 Plaza Ergosoft Queen", "category": "Colchones", "material": "Ergosoft", "price": 790.00},
    {"name": "Medallón Ergosoft 2 Plazas", "category": "Colchones", "material": "Ergosoft", "price": 660.00},
    {"name": "Medallón Ergosoft 1.5 Plaza", "category": "Colchones", "material": "Ergosoft", "price": 530.00},
    # Colchones — Línea Pocket
    {"name": "Pocket Star 2 Plazas Negro King", "category": "Colchones", "material": "Pocket Star", "price": 930.00},
    {"name": "Pocket Star King", "category": "Colchones", "material": "Pocket Star", "price": 1420.00},
    # Colchones — Línea Standard (Super Star)
    {"name": "Super Star King 2 Plazas", "category": "Colchones", "material": "Super Star", "price": 740.00},
    {"name": "Super Star King", "category": "Colchones", "material": "Super Star", "price": 1100.00},
    # Colchones — Línea Royal
    {"name": "Royal Prince 2 Plazas", "category": "Colchones", "material": "Royal Prince", "price": 1770.00},
    {"name": "Royal Abrazzo King", "category": "Colchones", "material": "Royal Abrazzo", "price": 2820.00},
    {"name": "Royal Abrazzo Queen", "category": "Colchones", "material": "Royal Abrazzo", "price": 2210.00},
    {"name": "Royal Prince Queen", "category": "Colchones", "material": "Royal Prince", "price": 1400.00},
    # Colchones — Zebra 16 Ribeteado
    {"name": "Zebra 16 Ribeteado 2 Plazas 5'' Acolchado", "category": "Colchones", "material": "Espuma 16 kg/m3", "price": 220.00},
    {"name": "Zebra 16 Ribeteado 2 Plazas 7'' Acolchado", "category": "Colchones", "material": "Espuma 16 kg/m3", "price": 270.00},
    {"name": "Zebra 16 Ribeteado 1.5 Plaza 5'' Acolchado", "category": "Colchones", "material": "Espuma 16 kg/m3", "price": 180.00},
    {"name": "Zebra 16 Ribeteado 1.5 Plaza 7'' Acolchado", "category": "Colchones", "material": "Espuma 16 kg/m3", "price": 220.00},
    # Camas
    {"name": "Cama 2 Plazas", "category": "Camas", "material": "Madera", "price": 950.00},
    {"name": "Cama 2 Plazas + Sábana", "category": "Camas", "material": "Madera Huyruro", "price": 1380.00},
    {"name": "Cama 2½ Plazas", "category": "Camas", "material": "Madera", "price": 1650.00},
    {"name": "Cama Colonial 2½ Plazas", "category": "Camas", "material": "Madera Colonial", "price": 1680.00},
    # Muebles y accesorios
    {"name": "Almohada Anatómica Napa", "category": "Almohadas", "material": "Napa Siliconada", "price": 82.00},
    {"name": "Almohada Drimer", "category": "Almohadas", "material": "Drimer", "price": 50.00},
    {"name": "Cuna de Bebés", "category": "Cunas", "material": "Madera", "price": 650.00},
    {"name": "Comedor 3 Sillas", "category": "Comedores", "material": "Madera", "price": 750.00},
    {"name": "Comedor 6 Sillas", "category": "Comedores", "material": "Madera", "price": 2100.00},
    {"name": "Escritorio de Madera Multifuncional", "category": "Muebles", "material": "Madera", "price": 850.00},
    # Muebles de dormitorio
    {"name": "Cama de Madera 2 Plazas Reforzada", "category": "Camas", "material": "Madera de alta calidad", "price": 950.00},
    {"name": "Cama de Madera 3 Plazas", "category": "Camas", "material": "Madera de alta calidad", "price": 1890.00},
    {"name": "Alacena Grande de Cocina en Madera", "category": "Muebles", "material": "Madera de alta calidad", "price": 2850.00},
    {"name": "Alacena de Cocina en Madera", "category": "Muebles", "material": "Madera de alta calidad", "price": 1980.00},
    {"name": "Ropero de Madera 3 Puertas con Cajonera", "category": "Muebles", "material": "Madera de alta calidad", "price": 2100.00},
    {"name": "Ropero Grande de Madera con Cajonera", "category": "Muebles", "material": "Madera resistente", "price": 2450.00},
    {"name": "Ropero de Madera con Cajonera", "category": "Muebles", "material": "Madera de alta calidad", "price": 1500.00},
    {"name": "Cómoda de Madera con Espejo", "category": "Muebles", "material": "Madera natural", "price": 980.00},
    {"name": "Mesita de Noche de Madera", "category": "Muebles", "material": "Madera resistente", "price": 270.00},
    # Sábanas
    {"name": "Sábanas Bramante de Hilo Twin", "category": "Sábanas", "material": "Bramante de Hilo", "price": 65.00},
    {"name": "Bramante de Hilo Twin", "category": "Sábanas", "material": "Bramante de Hilo", "price": 65.00},
    {"name": "Bramante de Hilo Full", "category": "Sábanas", "material": "Bramante de Hilo", "price": 80.00},
    {"name": "Bramante de Hilo Queen", "category": "Sábanas", "material": "Bramante de Hilo", "price": 90.00},
    {"name": "Sábanas Rayas Beige/Naranja Full", "category": "Sábanas", "material": "Microfibra", "price": 80.00},
    {"name": "Sábanas 1.5 Plazas", "category": "Sábanas", "material": "Microfibra suave", "price": 65.00},
    {"name": "Sábanas 2 Plazas", "category": "Sábanas", "material": "Microfibra suave", "price": 85.00},
    {"name": "Sábanas Queen", "category": "Sábanas", "material": "Microfibra suave", "price": 110.00},
    {"name": "Sábanas King", "category": "Sábanas", "material": "Microfibra suave", "price": 130.00},
]

FOLLOWUP_DAYS = [3, 7]
