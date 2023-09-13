let port = 1000;
const _ES = require('express')
const app = _ES();

app.get('/', (req, res) => {
  res.status(503).sendStatus(503);
})


// *
app.get('/widgets/', (req, res) => {
    res.send("Invalid ID");
    throw new Error('Invalid ID');
})
app.get('/widgets', (req, res) => {
    res.send("Invalid ID");
    throw new Error('Invalid ID');
})
// *
app.get('/widgets/:id', (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            res.send("Invalid ID");
            throw new Error('Invalid ID');
        }

        const widgetUrl = `https://api.twiz.lol/v3/widgets/${id}`;

        const widgetHTML = `
            <iframe
                title="Discord user embed"
                width="340"
                height="72"
                frameborder="0"
                sandbox="allow-scripts"
                src="${widgetUrl}"
            ></iframe>
        `;

        res.send(widgetHTML);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});




app.listen(port, () => {
  console.log(`Server: Running`);
})

















/*
@
-Credits to g0thub/sentiax
@
*/