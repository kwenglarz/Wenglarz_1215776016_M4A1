
exports.getData = (req, res) => {
    //get data from database
    const data = {
        subject: 'IFT 458',
        grade: 'A',
        date: '1/1/92'
    }
    res.send(`Hello World from student! GET ${JSON.stringify(data)}`)
    };
exports.getDataById = (req, res) => res.send('Hello World from student! GET');
exports.updateDataById = (req, res) => res.send('Hello World from student! PUT');
exports.patchDataById = (req, res) => res.send('Hello World from student! PATCH');
exports.deleteDataById = (req, res) => res.send('Hello World from student! DELETE');
exports.postData = (req, res) => res.send('Hello World from student! POST');
exports.updateData = (req, res) => res.send('Hello World from student! PUT');
exports.deleteData = (req, res) => res.send('Hello World from student! DELETE');
