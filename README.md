<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day finder</title>
    <link rel="stylesheet" href="./dayfinder.css">
</head>
<body>
    <h1 id="heading">Day Finder</h1>
    <p>WELCOME to dayfinder, by using this tool we can find what day it is by entering the date ,month and year</p>
    <center>
        <fieldset>
            <legend><h1>DAY FINDER</h1></legend>
            <table>
                <tr>
                    <td> <label for="inputdate">Enter the date</label></td>
                    <td><input type="number" id="inputdate"></td>
                </tr>
                <tr> 
                    <td><label for="inputmonth">Enter the month number</label></td>
                    <td><input type="number" id="inputmonth"></td>
                </tr>
                <tr></tr>
                <tr>
                    <td><label for="inputyear">Enter the year</label></td>
                    <td><input type="number" id="inputyear"></td>
                </tr>
            </table>
            <br>
            <button onclick="findday()">Find Day</button>
            <h1 id="res">Result</h1>           
            <h1 id="output"></h1>
        </fieldset>
        <h6>Made with ❤️ by KALYAN</h6>
    </center>
    <script src="./dayfinder.js"></script>
</body>
</html>
