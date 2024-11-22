**Product Management Application**

This is a simple Product Management application built using HTML, CSS, and JavaScript. The application allows users to add, update, delete, and search for products. The product data is stored in the localStorage to persist even when the browser is closed and reopened.

**Features**

**1-Add Products:**

Users can add a new product with the following details:
Product title
Product price
Ads cost
Taxes
Discount
Total price (calculated automatically based on the above inputs)
Count (quantity of products)
Category

**2-View Products:**

All added products are displayed in a table format.
Each product's details (title, price, ads, taxes, discount, total, count, and category) are shown in the table.

**3-Update Products:**

Users can update the details of an existing product.
Clicking on the "update" button next to any product allows the user to edit the product's details and save the changes.

**4-Delete Products:**

Users can delete individual products using the "delete" button.
There is also an option to delete all products from the localStorage.

**5-Search Products:**

Users can search for products by either title or category.
The search dynamically filters the product list based on the selected search mode.

**Technologies Used**

HTML: The basic structure of the app.
CSS: For styling the app, including a responsive design.
JavaScript: To handle product management functionality, including adding, updating, deleting, and searching for products.
localStorage: To store product data on the user's browser for persistence across sessions.
Setup Instructions
Clone the repository or download the files.
Open index.html in a browser to run the application.
Use the provided form to add, update, and search for products.
The data will be stored in the localStorage of your browser, and you can test persistence by refreshing the page.

**How It Works**

1-**Adding Products:**

Fill out the product form with the required fields (title, price, ads, taxes, discount, count, and category).
Once the form is filled, clicking "Submit" will add the product to the list.

2-**Updating Products:**

Click the "update" button next to a product to pre-fill the form with that product's details.
After making changes, click "Update" to save the changes.

3-**Deleting Products:**

Click the "delete" button next to a product to remove it from the list.
To delete all products, click the "Delete All" button.

4-**Searching Products:**

Use the search bar to search products by title or category.
Choose the search mode (Title or Category) by selecting the corresponding option.
