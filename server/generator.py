import os
import tempfile
from PIL import Image, ImageDraw, ImageFont
from reportlab.pdfgen import canvas
from io import BytesIO




# birthdate_text, name_text, breed_text, gender_text, parent_text


def create_certificate(template_path, output_pdf_path, birthdate_text, name_text, breed_text, gender_text, parent_text):
    # Loading the template image
    img = Image.open(template_path)
    draw = ImageDraw.Draw(img)

    font_path = './template/PlaypenSans-Bold.ttf' 
    font_size = 40
    

    # Setting font 
    font1 = ImageFont.truetype(font_path, 57)
    font2 = ImageFont.truetype(font_path, 40)
    
    font3 = ImageFont.truetype(font_path, 35)

    # Function to center text
    def center_text(text, font, center_pos):
        text_width, text_height = draw.textbbox(text, font=font)
        return (center_pos[0] - text_width / 2, center_pos[1] - text_height / 2)



    # Overlay the texts on the image

    birthdate = birthdate_text.split(' ')
    day_text = birthdate[0]
    month_text = birthdate[1]
    year_text = birthdate[2]

    monthyear_text = month_text+' '+year_text


    # Calculate positions to center-align the text
    position_name = center_text(name_text, font1, (665, 375))
    position_day = center_text(day_text, font2, (525, 525))
    position_monthyear = center_text(monthyear_text, font2, (860, 525))
    position_breed = center_text(breed_text, font3, (320, 670))
    position_gender = center_text(gender_text, font3, (980, 670))
    position_parent = center_text(parent_text, font3, (680, 800))

    # position_name = (665, 375)
    
    # position_day = (525, 525)
    # position_monthyear = (860, 525)

    # position_breed = (320, 670)
    # position_gender = (980 , 670)
    # position_parent = (680, 800)

    draw.text(position_name, name_text, (0, 0, 0), font=font1)

    draw.text(position_day, day_text, (0, 0, 0), font=font2)
    draw.text(position_monthyear, monthyear_text, (0, 0, 0), font=font2)
    
    draw.text(position_breed, breed_text, (0, 0, 0), font=font3)
    draw.text(position_gender, gender_text, (0, 0, 0), font=font3)
    draw.text(position_parent, parent_text, (0, 0, 0), font=font3)



    # Create a temporary file to save the image
    with tempfile.NamedTemporaryFile(delete=False, suffix='.png') as tmp:
        img.save(tmp, format='PNG')
        tmp_path = tmp.name

    # Creating a PDF using ReportLab and add the image
    buffer = BytesIO()
    p = canvas.Canvas(buffer, pagesize=(img.width, img.height))
    

    # width=img.width, height=img.height
    # Drawing the image from the temporary file
    p.drawImage(tmp_path, 0, 0, width=img.width, height=img.height)  
    p.showPage()
    p.save()

    # Clean up the temporary file
    os.unlink(tmp_path)

    # Saving the PDF to a file
    with open(output_pdf_path, 'wb') as f:
        f.write(buffer.getvalue())
        print(img.width, img.height)


# Testing
create_certificate(
    template_path='./template/template.png',
    output_pdf_path='./template/cert.pdf',
    birthdate_text = '1st September 2019', 
    name_text = 'Layla', 
    breed_text = 'Golden Retriever', 
    gender_text = 'Female', 
    parent_text = 'Senator Alexandra Yildiran',
)
