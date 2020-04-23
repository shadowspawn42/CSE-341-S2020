const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write("<html>");
        res.write("<head><title>Mitchell's Homepage</title></head>");
        res.write("<body>");
        res.write("<h1>Welcome to Mitchell's Homepage</h1><p style='color:DogerBlue';>Here the text is blue.</p>");
        res.write("<p>It takes 2260 J of energy to transform 1 gram of water to steam. There are 3785.41 grams in a gallon.</p>");
        res.write("<p>In 15 cubic feet of water there is 25,246.75 gallons.</p>");
        res.write("<p>So in order to transform water into steam we need 215,986,617,813.55 J to convert 15 cubic feet of water to steam. Or 2,159,866.2 MJ.</p>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }

    if(url === "/activites"){
        const activites = ["Baseball", "Camping", "Hiking", "Laser Tag", "Reading a book"];
        res.write("<html>");
        res.write("<head><title>List of Activites</title></head>");
        res.write("<h2>A list of differnt Activites</h2>");
        res.write("<ul>");
        res.write("<li>" + activites[0] + "</li>");
        res.write("<li>" + activites[1] + "</li>");
        res.write("<li>" + activites[2] + "</li>");
        res.write("<li>" + activites[3] + "</li>");
        res.write("<li>" + activites[4] + "</li>");
        res.write("</ul>");
        res.write("<h2>Enter a new activiy</h2>");
        res.write("<body><form action='/add-activity' method='POST'><input type='text' name='activity'><button type='submit'>Send</button></form></body>");
        res.write("</html>");
        return res.end();
    }

    if(url === "/add-activity" && method === "POST"){
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            console.log(message);
            fs.writeFile("new-acticity.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        }); 
    }

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Mitchell's Homepage</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Mitchell's Homepage</h1><p style='color:DogerBlue';>Here the text is blue.</p>");
    res.write("<p>It takes 2260 J of energy to transform 1 gram of water to steam. There are 3785.41 grams in a gallon.</p>");
    res.write("<p>In 15 cubic feet of water there is 25,246.75 gallons.</p>");
    res.write("<p>So in order to transform water into steam we need 215,986,617,813.55 J to convert 15 cubic feet of water to steam. Or 2,159,866.2 MJ.</p>");
    res.write("</body>");
    res.write("</html>");
};

module.exports = {
    handler: requestHandler,
    text: "Some hard coded text!"
};