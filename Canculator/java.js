<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canculator</title>
    <meta name="description" content="A basic HTML, CSS and JavaScript Calculator">
    <meta name="author" content="elbacho">
    <!-- <script src="java.js" defer></script> -->
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="calculator">
        <input type="text" class="calculator-screen" value="0" disabled />
        <div class="canculator-keys">
            <button type="button" class="operator" value="+">+</button>
            <button type="button" class="operator" value="-">-</button>
            <button type="button" class="operator" value="*">&times;</button>
            <button type="button" class="operator" value="/">&divide;</button>


            <button type="button" value="7">7</button>
            <button type="button" value="8">8</button>
            <button type="button" value="9">9</button>

            <button type="button" value="4">4</button>
            <button type="button" value="5">5</button>
            <button type="button" value="6">6</button>

            <button type="button" value="1">1</button>
            <button type="button" value="2">2</button>
            <button type="button" value="3">3</button>

            <button type="button" value="0">0</button>

            <button type="button" class="decimal function" value=".">.</button>
            <button type="button" class="all-clear function" value="all-clear">AC</button>
            <button type="button" class="equal-sign operator" value="=">=</button>

        </div>
    </div>
    <script src="java.js" defer></script>
</body>

</html>
