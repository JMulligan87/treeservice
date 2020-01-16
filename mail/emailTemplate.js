const Template = data => {
  return ` 
    <!DOCTYPE html>
        <html style="margin: 0; padding: 0;">
        
            <head>
                <title>Hello</title>
            </head>
        
                <body style="margin: 0; padding: 0;">
                <br />
                <br />
                <div>Name: ${req.body.name} </div>
                <br />
                <br />
                <div>Phone: ${req.body.phone} </div>
                <br />
                <div>Address: ${req.body.address} </div>
                <br />
                <div>Message: ${req.body.message} </div>
                <br />
                <br />
                </body>
        
        </html>
    `;
};

module.exports = { Template };
