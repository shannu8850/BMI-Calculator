document.getElementById('calculate').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('result');
    const calorieDiv = document.getElementById('calorie-recommendation');
    const dietChartDiv = document.getElementById('diet-chart');

    if (!weight || !height) {
        resultDiv.textContent = 'Please enter valid weight and height.';
        resultDiv.style.backgroundColor = 'transparent';
        calorieDiv.textContent = '';
        dietChartDiv.innerHTML = '';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
    let color = '';
    let calorieRecommendation = '';
    let dietChart = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#f1c40f';
        calorieRecommendation = 'You should aim for about 2,500 calories per day.';
        dietChart = `
            <table>
                <tr><th>Meal</th><th>Example Foods</th><th>Calories</th></tr>
                <tr><td>Breakfast</td><td>Oatmeal with bananas and nuts</td><td>350</td></tr>
                <tr><td>Snack</td><td>Boiled egg with almonds</td><td>200</td></tr>
                <tr><td>Lunch</td><td>Chicken Biryani</td><td>500</td></tr>
                <tr><td>Snack</td><td>Smoothie with protein powder and fruits</td><td>300</td></tr>
                <tr><td>Dinner</td><td>Salmon with quinoa and vegetables</td><td>600</td></tr>
                <tr><td>Dessert</td><td>Greek yogurt with honey and berries</td><td>200</td></tr>
            </table>
        `;
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        color = '#2ecc71';
        calorieRecommendation = 'You should aim for about 2,000 calories per day.';
        dietChart = `
            <table>
                <tr><th>Meal</th><th>Example Foods</th><th>Calories</th></tr>
                <tr><td>Breakfast</td><td>Egg Dosa</td><td>400</td></tr>
                <tr><td>Snack</td><td>Almonds and an apple</td><td>200</td></tr>
                <tr><td>Lunch</td><td>Chicken Biryani</td><td>500</td></tr>
                <tr><td>Snack</td><td>Carrot sticks with hummus</td><td>150</td></tr>
                <tr><td>Dinner</td><td>Chicken stir-fry with vegetables and brown rice</td><td>600</td></tr>
                <tr><td>Dessert</td><td>Fruit salad</td><td>150</td></tr>
            </table>
        `;
    } else if (bmi < 29.9) {
        category = 'Overweight';
        color = '#e67e22';
        calorieRecommendation = 'You should aim for about 1,800 calories per day.';
        dietChart = `
            <table>
                <tr><th>Meal</th><th>Example Foods</th><th>Calories</th></tr>
                <tr><td>Breakfast</td><td>Smoothie with spinach and protein powder</td><td>300</td></tr>
                <tr><td>Snack</td><td>Mixed nuts</td><td>200</td></tr>
                <tr><td>Lunch</td><td>Chicken Biryani</td><td>500</td></tr>
                <tr><td>Snack</td><td>Greek yogurt with seeds</td><td>200</td></tr>
                <tr><td>Dinner</td><td>Grilled fish with steamed broccoli</td><td>500</td></tr>
                <tr><td>Dessert</td><td>Dark chocolate</td><td>150</td></tr>
            </table>
        `;
    } else {
        category = 'Obesity';
        color = '#e74c3c';
        calorieRecommendation = 'You should aim for about 1,500 calories per day.';
        dietChart = `
            <table>
                <tr><th>Meal</th><th>Example Foods</th><th>Calories</th></tr>
                <tr><td>Breakfast</td><td>dry fruits and some milk </td><td>350</td></tr>
                <tr><td>Snack</td><td>Celery sticks with peanut butter</td><td>150</td></tr>
                <tr><td>Lunch</td><td> Vegetable Stir-Fry with Tofu and Brown Rice</td><td>400</td></tr>
                <tr><td>Snack</td><td>Apple slices with almond butter</td><td>200</td></tr>
                <tr><td>Dinner</td><td>Baked tofu with vegetables</td><td>400</td></tr>
                <tr><td>Dessert</td><td>Frozen yogurt with fresh berries</td><td>200</td></tr>
            </table>
        `;
    }

    resultDiv.textContent = `Your BMI is ${bmi} (${category})`;
    resultDiv.style.backgroundColor = color;
    resultDiv.style.color = 'white';
    calorieDiv.textContent = calorieRecommendation;
    dietChartDiv.innerHTML = dietChart;
});
