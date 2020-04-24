const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write("<html>");
        res.write("<head><title>Prove 1 Homepage</title></head>");
        res.write("<body>");
        res.write("<h1 style='color:blue; text-align:center'>Welcome to Prove-1's Homepage</h1><p>Here is some fun random information that has nothing to do with the Prove assignment.</p>");
        res.write("<p>It takes 2260 J of energy to transform 1 gram of water to steam. There are 3785.41 grams in a gallon.</p>");
        res.write("<p>In 15 cubic feet of water there is 25,246.75 gallons.</p>");
        res.write("<p>So in order to transform water into steam we need 215,986,617,813.55 J to convert 15 cubic feet of water to steam. Or 2,159,866.2 MJ.</p>");
        res.write("</body>");
        res.write("<body style='text-align:center;'><br><br><h2 style='color:red;'>The Prove assignment</h2>");
        res.write("<p>Please enter two numbers in the input fields below.</p>")
        res.write("<form action='/math' method='POST'><input type='number' name='number1'><br><input type='number' name='number2'><br><button type='submit'>Send</button></form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }


    if(url === "/math" && method === "POST"){
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            let number1 = parsedBody.split("&")[0];
            number1 = number1.split("=")[1];
            let number2 = parsedBody.split("&")[1];
            number2 = number2.split("=")[1];
            console.log(number1);
            console.log(number2);

            const numbersMinused = number1 - number2;
            const numbersAdded = parseInt(number1) + parseInt(number2);
            const numbersDevided = number1 / number2;
            const numbersMultiplied = number1 * number2;

            console.log(numbersMinused);
            console.log(numbersAdded);
            console.log(numbersDevided);
            console.log(numbersMultiplied);

            res.write("<html>");
            res.write("<head><title>Prove 1 Doing Math</title></head>");
            res.write("<body style='text-align:center;'>");
            res.write("<h1 style='color:blue; text-align:center'>Welcome to Prove-1's Doing Math Page</h1><p>Here we are going to display some math operations using the two numbers that you entered.</p>");
            res.write("<h2>4 Math Operations</h2>");
            res.write("<ul>");
            res.write("<li>" + number1 + " + " + number2 + " = " + numbersAdded + "</li>");
            res.write("<li>" + number1 + " - " + number2 + " = " + numbersMinused + "</li>");
            res.write("<li>" + number1 + " * " + number2 + " = " + numbersMultiplied + "</li>");
            res.write("<li>" + number1 + " / " + number2 + " = " + numbersDevided + "</li>");
            res.write("</ul>");
            res.write("<p>If you want to do this again with differnt numbers, please hit the button.</p>")
            res.write("<form action='/' method='POST'><button type='submit'>Return to Homepage</button></form>");
            res.write("</body>");
            res.write("</html>");
            return res.end();
        }); 
    }

        res.write("<html>");
        res.write("<head><title>Prove 1 Homepage</title></head>");
        res.write("<body>");
        res.write("<h1 style='color:blue; text-align:center'>Welcome to Prove-1's Homepage</h1><p>Here is some fun random information that has nothing to do with the Prove assignment.</p>");
        res.write("<p>It takes 2260 J of energy to transform 1 gram of water to steam. There are 3785.41 grams in a gallon.</p>");
        res.write("<p>In 15 cubic feet of water there is 25,246.75 gallons.</p>");
        res.write("<p>So in order to transform water into steam we need 215,986,617,813.55 J to convert 15 cubic feet of water to steam. Or 2,159,866.2 MJ.</p>");
        res.write("</body>");
        res.write("<body style='text-align:center;'><br><br><h2 style='color:red;'>The Prove assignment</h2>");
        res.write("<p>Please enter two numbers in the input fields below.</p>")
        res.write("<form action='/math' method='POST'><input type='number' name='number1'><br><input type='number' name='number2'><br><button type='submit'>Send</button></form>");
        res.write("</body>");
        res.write("</html>");
};

module.exports = {
    handler: requestHandler,
    text: "Some hard coded text!"
};