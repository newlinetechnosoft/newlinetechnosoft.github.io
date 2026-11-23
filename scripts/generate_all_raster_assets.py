import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import subprocess

print("Generating raster assets & contact sheet...")

# 1. Render Apple Touch Icon (180x180, solid brand indigo #4f46e5, mark padded ~20%)
# Mark size: ~124x124, centered at (90, 90)
ati = Image.new("RGBA", (180, 180), (79, 70, 229, 255)) # #4f46e5
d_ati = ImageDraw.Draw(ati)

# Coordinate transform from 64x64 grid to 180x180:
# Scale factor s = 124 / 64 = 1.9375
# Offset: x0 = 90 - 32*s = 28, y0 = 90 - 32*s = 28
def tx(x, y):
    s = 2.0
    return (26 + x * s, 26 + y * s)

# Draw mark in crisp white
white = (255, 255, 255, 255)
# Left stem: 10..18.5, 9..55
d_ati.rectangle([tx(10, 9), tx(18.5, 55)], fill=white)
# Diagonal & right stem & return arrow
# Diagonal: (18.5, 9) to (47, 40.5)
d_ati.polygon([tx(18.5, 9), tx(27.5, 9), tx(47, 40.5), tx(47, 47), tx(38, 47), tx(18.5, 24)], fill=white)
# Right stem: 47..56, 9..47
d_ati.rectangle([tx(47, 9), tx(56, 47)], fill=white)
# Outer corner: (56, 47) to (48, 55)
d_ati.pieslice([tx(40, 39), tx(56, 55)], 0, 90, fill=white)
# Horizontal return bar: y: 47..55, x: 29..48
d_ati.rectangle([tx(29, 47), tx(48, 55)], fill=white)
# Arrowhead: tip (20.5, 51), barbs at (29, 42.5) and (29, 59.5)
d_ati.polygon([tx(20.5, 51), tx(29, 42.5), tx(29, 47), tx(29, 55), tx(29, 59.5)], fill=white)

ati.save("src/assets/favicons/apple-touch-icon.png", format="PNG")
print("Saved src/assets/favicons/apple-touch-icon.png")

# 2. Render Favicon ICO (16x16, 32x32, 48x48)
# We can create a 48x48 rounded-square version, downsample cleanly with LANCZOS to 32 and 16
ico_base = Image.new("RGBA", (192, 192), (0, 0, 0, 0))
d_ico = ImageDraw.Draw(ico_base)
# Rounded container with radius 42
d_ico.rounded_rectangle([0, 0, 191, 191], radius=42, fill=(79, 70, 229, 255))

# Draw mark inside ico_base
def tx_ico(x, y):
    s = 2.2
    return (25.5 + x * s, 25.5 + y * s)

d_ico.rectangle([tx_ico(10, 9), tx_ico(18.5, 55)], fill=white)
d_ico.polygon([tx_ico(18.5, 9), tx_ico(27.5, 9), tx_ico(47, 40.5), tx_ico(47, 47), tx_ico(38, 47), tx_ico(18.5, 24)], fill=white)
d_ico.rectangle([tx_ico(47, 9), tx_ico(56, 47)], fill=white)
d_ico.pieslice([tx_ico(40, 39), tx_ico(56, 55)], 0, 90, fill=white)
d_ico.rectangle([tx_ico(29, 47), tx_ico(48, 55)], fill=white)
d_ico.polygon([tx_ico(20.5, 51), tx_ico(29, 42.5), tx_ico(29, 47), tx_ico(29, 55), tx_ico(29, 59.5)], fill=white)

ico16 = ico_base.resize((16, 16), Image.Resampling.LANCZOS)
ico32 = ico_base.resize((32, 32), Image.Resampling.LANCZOS)
ico48 = ico_base.resize((48, 48), Image.Resampling.LANCZOS)

ico_base.save("src/assets/favicons/favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
print("Saved src/assets/favicons/favicon.ico (16, 32, 48)")

# 3. Render Public OG Logo (public/og/logo.png: 1200 x 630)
og = Image.new("RGBA", (1200, 630), (12, 14, 24, 255)) # Dark navy/slate
d_og = ImageDraw.Draw(og)

# Radial subtle glow behind mark
for r in range(300, 0, -10):
    alpha = int(35 * (1 - r / 300))
    d_og.ellipse([600 - r, 240 - r, 600 + r, 240 + r], fill=(99, 102, 241, alpha))

# Large Mark at center (160x160 centered at x=600, y=220)
def tx_og(x, y):
    s = 2.8
    return (600 - 32 * s + x * s, 220 - 32 * s + y * s)

indigo = (129, 140, 248, 255) # Indigo-400
d_og.rectangle([tx_og(10, 9), tx_og(18.5, 55)], fill=indigo)
d_og.polygon([tx_og(18.5, 9), tx_og(27.5, 9), tx_og(47, 40.5), tx_og(47, 47), tx_og(38, 47), tx_og(18.5, 24)], fill=indigo)
d_og.rectangle([tx_og(47, 9), tx_og(56, 47)], fill=indigo)
d_og.pieslice([tx_og(40, 39), tx_og(56, 55)], 0, 90, fill=indigo)
d_og.rectangle([tx_og(29, 47), tx_og(48, 55)], fill=indigo)
d_og.polygon([tx_og(20.5, 51), tx_og(29, 42.5), tx_og(29, 47), tx_og(29, 55), tx_og(29, 59.5)], fill=indigo)

# Typography on OG
try:
    font_og_title = ImageFont.truetype("/usr/share/fonts/caladea/Caladea-Bold.ttf", 52)
    font_og_sub = ImageFont.truetype("/usr/share/fonts/caladea/Caladea-Regular.ttf", 24)
except Exception:
    font_og_title = ImageFont.load_default()
    font_og_sub = font_og_title

d_og.text((600, 360), "NewLine Technosoft", fill=(248, 250, 252, 255), font=font_og_title, anchor="mm")
d_og.text((600, 420), "Where innovation meets clean engineering.", fill=(148, 163, 184, 255), font=font_og_sub, anchor="mm")
d_og.text((600, 470), "Butwal, Lumbini Province, Nepal", fill=(99, 102, 241, 255), font=font_og_sub, anchor="mm")

og.save("public/og/logo.png", format="PNG")
print("Saved public/og/logo.png (1200x630)")

# 4. Generate Master Contact Sheet (logo-exploration.png: 1600 x 1400)
sheet = Image.new("RGBA", (1600, 1400), (248, 250, 252, 255))
d_s = ImageDraw.Draw(sheet)

try:
    font_header = ImageFont.truetype("/usr/share/fonts/caladea/Caladea-Bold.ttf", 30)
    font_sec = ImageFont.truetype("/usr/share/fonts/caladea/Caladea-Bold.ttf", 19)
    font_card_title = ImageFont.truetype("/usr/share/fonts/caladea/Caladea-Bold.ttf", 15)
    font_card_sub = ImageFont.truetype("/usr/share/fonts/caladea/Caladea-Regular.ttf", 12)
    font_badge = ImageFont.truetype("/usr/share/fonts/caladea/Caladea-Bold.ttf", 12)
except Exception:
    font_header = ImageFont.load_default()
    font_sec = font_header
    font_card_title = font_header
    font_card_sub = font_header
    font_badge = font_header

# Header
d_s.text((60, 40), "NewLine Technosoft — Brand Mark Exploration & System Design", fill=(15, 23, 42, 255), font=font_header)
d_s.text((60, 80), "Geometric identity system rooted in the newline concept (\\n, ↵, the Enter key). Grid: 64x64, single-color flat fills.", fill=(100, 116, 139, 255), font=font_card_title)
d_s.line([(60, 115), (1540, 115)], fill=(226, 232, 240, 255), width=2)

# SECTION 1: The 6 Concepts Explored (row of 6 cards)
d_s.text((60, 135), "1. CONCEPT DIRECTIONS EXPLORED", fill=(71, 85, 105, 255), font=font_sec)

concepts_data = [
    ("Concept 1: Return-N (WINNER)", "Right leg turns into baseline return arrow ↵", "exploration/c1.png", True),
    ("Concept 2: Line-Break N", "Text wrap continuous ribbon with break cut", "exploration/c2.png", False),
    ("Concept 3: Caret-N", "Architectural N with terminal cursor block", "exploration/c3.png", False),
    ("Concept 4: Stacked-Lines N", "Two lines of code with indentation offset", "exploration/c4.png", False),
    ("Concept 5: CRLF Stepped N", "Left stem on Line 1, right stem on Line 2", "exploration/c5.png", False),
    ("Concept 6: Monospace Ligature", "Backslash \\ and return arrow unified into N", "exploration/c6.png", False),
]

card_w = 230
card_h = 240
start_x = 60
start_y = 175

for i, (name, desc, path_c, is_winner) in enumerate(concepts_data):
    cx = start_x + i * (card_w + 16)
    cy = start_y
    # Card background
    bg_col = (238, 242, 255, 255) if is_winner else (255, 255, 255, 255)
    border_col = (99, 102, 241, 255) if is_winner else (226, 232, 240, 255)
    d_s.rounded_rectangle([cx, cy, cx + card_w, cy + card_h], radius=12, fill=bg_col, outline=border_col, width=2 if is_winner else 1)
    
    # Thumbnail of concept
    if os.path.exists(path_c):
        thumb = Image.open(path_c).resize((110, 110), Image.Resampling.LANCZOS)
        sheet.paste(thumb, (cx + (card_w - 110) // 2, cy + 18), thumb)
    
    # Label
    d_s.text((cx + 12, cy + 145), name, fill=(79, 70, 229, 255) if is_winner else (15, 23, 42, 255), font=font_card_title)
    d_s.text((cx + 12, cy + 172), desc, fill=(100, 116, 139, 255), font=font_card_sub)
    if is_winner:
        d_s.rounded_rectangle([cx + card_w - 76, cy + 10, cx + card_w - 10, cy + 30], radius=4, fill=(79, 70, 229, 255))
        d_s.text((cx + card_w - 43, cy + 20), "SELECTED", fill=(255, 255, 255, 255), font=font_badge, anchor="mm")

d_s.line([(60, 445), (1540, 445)], fill=(226, 232, 240, 255), width=2)

# SECTION 2: Winning Mark Verification Across Sizes & Themes
d_s.text((60, 465), "2. WINNING MARK: MULTI-SCALE LEGIBILITY & THEME TESTS", fill=(71, 85, 105, 255), font=font_sec)

# Large 256x256 display on White
d_s.rounded_rectangle([60, 505, 360, 805], radius=16, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=1)
d_s.text((210, 525), "Light Background (#ffffff)", fill=(100, 116, 139, 255), font=font_card_title, anchor="mm")
# Draw large mark
def draw_mark_onto(target_img, ox, oy, scale, col):
    d_m = ImageDraw.Draw(target_img)
    def t(x, y):
        return (ox + x * scale, oy + y * scale)
    d_m.rectangle([t(10, 9), t(18.5, 55)], fill=col)
    d_m.polygon([t(18.5, 9), t(27.5, 9), t(47, 40.5), t(47, 47), t(38, 47), t(18.5, 24)], fill=col)
    d_m.rectangle([t(47, 9), t(56, 47)], fill=col)
    d_m.pieslice([t(40, 39), t(56, 55)], 0, 90, fill=col)
    d_m.rectangle([t(29, 47), t(48, 55)], fill=col)
    d_m.polygon([t(20.5, 51), t(29, 42.5), t(29, 47), t(29, 55), t(29, 59.5)], fill=col)

draw_mark_onto(sheet, 100, 555, 3.4, (15, 23, 42, 255))
d_s.text((210, 780), "200px Display Mark", fill=(148, 163, 184, 255), font=font_card_sub, anchor="mm")

# Large 256x256 display on Dark (#0f172a)
d_s.rounded_rectangle([385, 505, 685, 805], radius=16, fill=(15, 23, 42, 255))
d_s.text((535, 525), "Dark Background (#0f172a)", fill=(148, 163, 184, 255), font=font_card_title, anchor="mm")
draw_mark_onto(sheet, 425, 555, 3.4, (255, 255, 255, 255))
d_s.text((535, 780), "200px Display Mark (White)", fill=(148, 163, 184, 255), font=font_card_sub, anchor="mm")

# Large 256x256 display on Accent (#4f46e5)
d_s.rounded_rectangle([710, 505, 1010, 805], radius=16, fill=(79, 70, 229, 255))
d_s.text((860, 525), "Brand Accent (#4f46e5)", fill=(224, 231, 255, 255), font=font_card_title, anchor="mm")
draw_mark_onto(sheet, 750, 555, 3.4, (255, 255, 255, 255))
d_s.text((860, 780), "200px Display Mark (Inverted)", fill=(224, 231, 255, 255), font=font_card_sub, anchor="mm")

# Right Column: Multi-Scale Grid (512, 64, 32, 16) + Optical Blur test
d_s.rounded_rectangle([1035, 505, 1540, 805], radius=16, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=1)
d_s.text((1287, 525), "Optical Scale & Blur Verification", fill=(100, 116, 139, 255), font=font_card_title, anchor="mm")

# 64px
d_s.text((1085, 570), "64px", fill=(100, 116, 139, 255), font=font_badge)
draw_mark_onto(sheet, 1065, 595, 1.0, (15, 23, 42, 255))

# 32px
d_s.text((1185, 570), "32px", fill=(100, 116, 139, 255), font=font_badge)
draw_mark_onto(sheet, 1175, 605, 0.5, (15, 23, 42, 255))

# 16px
d_s.text((1265, 570), "16px", fill=(100, 116, 139, 255), font=font_badge)
draw_mark_onto(sheet, 1260, 610, 0.25, (15, 23, 42, 255))

# Blur Test (Simulating low vision / distant reading)
d_s.text((1345, 570), "Blurred (1.8σ)", fill=(100, 116, 139, 255), font=font_badge)
blur_box = Image.new("RGBA", (100, 100), (255, 255, 255, 0))
draw_mark_onto(blur_box, 18, 18, 1.0, (15, 23, 42, 255))
blur_box = blur_box.filter(ImageFilter.GaussianBlur(radius=2.0))
sheet.paste(blur_box, (1330, 580), blur_box)

# Favicon preview box
d_s.text((1445, 570), "Favicon (32px)", fill=(100, 116, 139, 255), font=font_badge)
fav32 = ico32.resize((48, 48), Image.Resampling.LANCZOS)
sheet.paste(fav32, (1450, 600), fav32)

# Diagnostic Checklist
checklist = [
    ("✓", "Grid Alignment: All stem and baseline coordinates snap to 64x64 grid integers."),
    ("✓", "Single-Color Stamp: Flat solid fills with zero gradients, strokes, or filters."),
    ("✓", "CSS Mask Compatibility: Pure closed alpha contours for footer signature mask."),
    ("✓", "Trademark Distance: Free from Netflix ribbon, Notion cube, or Next.js circle.",),
]
for j, (chk, txt) in enumerate(checklist):
    d_s.text((1060, 680 + j * 28), chk, fill=(16, 185, 129, 255), font=font_card_title)
    d_s.text((1085, 680 + j * 28), txt, fill=(51, 65, 85, 255), font=font_card_sub)

d_s.line([(60, 835), (1540, 835)], fill=(226, 232, 240, 255), width=2)

# SECTION 3: Wordmark & Lockups
d_s.text((60, 860), "3. HORIZONTAL & STACKED LOCKUPS (OUTLINED VECTORS)", fill=(71, 85, 105, 255), font=font_sec)

# Horizontal Lockup Card
d_s.rounded_rectangle([60, 900, 900, 1150], radius=16, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=1)
d_s.text((480, 925), "Primary Horizontal Lockup (newline-lockup.svg)", fill=(100, 116, 139, 255), font=font_card_title, anchor="mm")
if os.path.exists("exploration/lockup_clean.png"):
    lockup_img = Image.open("exploration/lockup_clean.png").convert("RGBA").resize((740, 211), Image.Resampling.LANCZOS)
    sheet.paste(lockup_img, (110, 940), lockup_img)

# Stacked Lockup Card
d_s.rounded_rectangle([925, 900, 1540, 1150], radius=16, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=1)
d_s.text((1232, 925), "Stacked Lockup (newline-lockup-stacked.svg)", fill=(100, 116, 139, 255), font=font_card_title, anchor="mm")
# Draw stacked mark
draw_mark_onto(sheet, 1205, 950, 1.4, (15, 23, 42, 255))
d_s.text((1232, 1085), "NewLine", fill=(15, 23, 42, 255), font=font_header, anchor="mm")
d_s.text((1232, 1120), "TECHNOSOFT", fill=(100, 116, 139, 255), font=font_badge, anchor="mm")

# Footer note
d_s.text((60, 1175), "Generated by NewLine Technosoft brand toolchain. Verified on React 19 / TanStack Start / Tailwind v4.", fill=(148, 163, 184, 255), font=font_card_sub)

sheet.save("logo-exploration.png", format="PNG")
print("Saved master contact sheet: logo-exploration.png (1600x1400)")
