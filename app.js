const scriptURL = 'https://script.google.com/macros/s/AKfycbypwiqN9N1R2SxxqBuyAfEEKP2K2q1vk5LZ-yq1o2cN0AIUPOb3VtL7v8fb1ony9Ld6/exec'
const form = document.getElementById('submitForm'); // replace with your form ID


form.addEventListener('submit', async e => {
    e.preventDefault();

    // Show loading spinner or indicator
    // You can implement this part based on your HTML structure

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Successful submission
        alert("Thank you! Your form is submitted successfully.");

        // Reload the page after the alert is shown
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait for 0.5 seconds (adjust as needed)
        window.location.reload();
    } catch (error) {
        console.error('Error!', error.message);

        
    }
});