##### Unit Converter Application

A simple web application for converting values between various units of measurement. This application is built with Nest.js for the backend and uses HTML for the frontend.

### Features
# Convert between different units of length, weight, and temperature:
- Length: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile.
- Weight: milligram, gram, kilogram, ounce, pound.
- Temperature: Celsius, Fahrenheit, Kelvin.
# User-friendly interface with three tabs for different unit categories.
# Displays detailed results in the format:
Result of your calculations: <input value> <input unit> = <converted value> <converted unit>.
# Reset functionality to clear results and return to the input form.

### How It Works
1. Home Page:
# Select a tab for length, weight, or temperature.
# Fill out the conversion form by entering:
- A value to convert.
- The unit to convert from.
- The unit to convert to.

2. Conversion:
- Upon submission, the app sends the input data to the server using an HTTP POST request.
- The server calculates the converted value and sends a detailed response.

3.  Results:
- Results are displayed in a user-friendly format.
- A reset button is provided to clear results and return to the home page.

### Technologies Used
# Backend
- Nest.js: A progressive Node.js framework for building scalable server-side applications.
- Conversion logic handled by a dedicated service (UnitConverterService).
# Frontend
- HTML: Basic HTML forms for user input.
- JavaScript: Handles form submissions and dynamically updates the UI with results.

### Installation and Setup
# Prerequisites
- Node.js (v14 or later)
- npm (comes with Node.js)

### Steps
1. Clone the repository:
git clone https://github.com/mykytapilec/unit-converter.git
cd unit-converter
2. Install dependencies:
npm install
3. Start the server:
npm run start
4. Open the app in your browser:
http://localhost:3000

### Project Structure

src/
├── app.module.ts                # Main application module
├── conversion/
│   ├── conversion.module.ts     # Conversion module
│   ├── conversion.controller.ts # Handles HTTP requests
│   ├── converter.service.ts     # Handles conversion logic
├── main.ts                      # Entry point of the application
public/
├── index.html                   # Frontend HTML page

### Example Usage
# Length Conversion
Input:

Value: 2000
From Unit: millimeter
To Unit: meter
Output:
Result of your calculations: 2000 millimeter = 2 meter.

### API Endpoints
##  POST /conversion/length
Convert between length units.

# Request Body:
{
  "value": 2000,
  "fromUnit": "millimeter",
  "toUnit": "meter"
}

# Response:
{
  "original": "2000 millimeter",
  "converted": "2 meter"
}


##  POST /conversion/weight
Convert between weight units.

# Request Body:
{
  "value": 5,
  "fromUnit": "kilogram",
  "toUnit": "pound"
}

# Response:
{
  "original": "5 kilogram",
  "converted": "11.023113109243878 pound"
}


##  POST /conversion/temperature
Convert between temperature units.

# Request Body:
{
  "value": 25,
  "fromUnit": "Celsius",
  "toUnit": "Fahrenheit"
}

# Response:
{
  "original": "25 Celsius",
  "converted": "77 Fahrenheit"
}


### Future Enhancements
- Add support for additional unit categories (e.g., time, volume, speed).
- Implement a database for tracking user conversions and history.
- Enhance the UI with a modern libs or framework like React, Vue or Angular.


### License
This project is licensed under the MIT License.

### Author
Created by Mikita Pilets.

### Project URL
https://roadmap.sh/projects/unit-converter


