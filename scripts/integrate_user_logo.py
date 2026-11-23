import os
import base64
from PIL import Image, ImageDraw, ImageFont, ImageFilter

print("Integrating user logo from ./logo.webp across site...")

# Load transparent user logo (already cropped and alpha-cleaned)
user_logo = Image.open("exploration/user_logo_transparent.png")
w, h = user_logo.size
print(f"Loaded user_logo: {w}x{h}")

# 1. Save to src/assets/logos/logo.webp, public/logo.webp, src/assets/logos/newline.webp
os.makedirs("src/assets/logos", exist_ok=True)
os.makedirs("public", exist_ok=True)
os.makedirs("src/assets/favicons", exist_ok=True)

user_logo.save("src/assets/logos/logo.webp", "WEBP", quality=95)
user_logo.save("src/assets/logos/newline.webp", "WEBP", quality=95)
user_logo.save("public/logo.webp", "WEBP", quality=95)
print("Saved logo.webp to src/assets/logos/ and public/")

# 2. Encode to base64 for embedding into SVG and OG scripts
with open("src/assets/logos/logo.webp", "rb") as f:
    logo_base64 = base64.b64encode(f.read()).decode("utf-8")
logo_data_uri = f"data:image/webp;base64,{logo_base64}"

# 3. Create SVG wrappers that embed the user logo in high definition
# This ensures that any file importing newline.svg or newline-mark.svg gets the user's logo!
user_logo_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <title>NewLine Technosoft</title>
  <image href="{logo_data_uri}" x="4" y="4" width="56" height="56" preserveAspectRatio="xMidYMid meet"/>
</svg>
'''

with open("src/assets/logos/newline-mark.svg", "w") as f:
    f.write(user_logo_svg)
with open("src/assets/logos/newline.svg", "w") as f:
    f.write(user_logo_svg)
print("Updated src/assets/logos/newline-mark.svg and newline.svg with user logo")

# 4. Generate Apple Touch Icon (180x180, solid white or rounded indigo background with padded user logo)
# A clean white rounded badge or subtle container lets the blue logo pop with 100% brand fidelity!
ati = Image.new("RGBA", (180, 180), (255, 255, 255, 255))
d_ati = ImageDraw.Draw(ati)
# Scale logo to ~136x136 centered in 180x180
logo_ati = user_logo.resize((136, 134), Image.Resampling.LANCZOS)
ati.paste(logo_ati, ((180 - 136) // 2, (180 - 134) // 2), logo_ati)
ati.save("src/assets/favicons/apple-touch-icon.png", "PNG")
print("Saved src/assets/favicons/apple-touch-icon.png")

# 5. Generate Favicon SVG (with prefers-color-scheme)
favicon_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <title>NewLine Technosoft</title>
  <style>
    :root {{
      --bg: #ffffff;
    }}
    @media (prefers-color-scheme: dark) {{
      :root {{
        --bg: #0f172a;
      }}
    }}
  </style>
  <rect width="64" height="64" rx="14" fill="var(--bg)"/>
  <image href="{logo_data_uri}" x="8" y="8" width="48" height="48" preserveAspectRatio="xMidYMid meet"/>
</svg>
'''
with open("src/assets/favicons/favicon.svg", "w") as f:
    f.write(favicon_svg)
print("Saved src/assets/favicons/favicon.svg")

# 6. Generate multi-resolution Favicon ICO (16x16, 32x32, 48x48)
ico_base = Image.new("RGBA", (128, 128), (255, 255, 255, 255))
ico_logo = user_logo.resize((104, 102), Image.Resampling.LANCZOS)
ico_base.paste(ico_logo, ((128 - 104) // 2, (128 - 102) // 2), ico_logo)

ico_base.save("src/assets/favicons/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
ico_base.save("public/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
print("Saved src/assets/favicons/favicon.ico and public/favicon.ico")

# 7. Generate OG Logo showcase image (1200x630)
og = Image.new("RGBA", (1200, 630), (12, 14, 24, 255))
d_og = ImageDraw.Draw(og)

# Radial subtle glow
for r in range(320, 0, -10):
    alpha = int(40 * (1 - r / 320))
    d_og.ellipse([600 - r, 230 - r, 600 + r, 230 + r], fill=(47, 88, 209, alpha))

# Large logo in center (200x196 centered at x=600, y=220)
logo_og = user_logo.resize((200, 196), Image.Resampling.LANCZOS)
og.paste(logo_og, (600 - 100, 220 - 98), logo_og)

# Typography
try:
    font_og_title = ImageFont.truetype("/usr/share/fonts/caladea/Caladea-Bold.ttf", 52)
    font_og_sub = ImageFont.truetype("/usr/share/fonts/caladea/Caladea-Regular.ttf", 24)
except Exception:
    font_og_title = ImageFont.load_default()
    font_og_sub = font_og_title

d_og.text((600, 360), "NewLine Technosoft", fill=(248, 250, 252, 255), font=font_og_title, anchor="mm")
d_og.text((600, 420), "Where innovation meets clean engineering.", fill=(148, 163, 184, 255), font=font_og_sub, anchor="mm")
d_og.text((600, 470), "Butwal, Lumbini Province, Nepal", fill=(95, 132, 254, 255), font=font_og_sub, anchor="mm")

og.save("public/og/logo.png", format="PNG")
print("Saved public/og/logo.png (1200x630)")

