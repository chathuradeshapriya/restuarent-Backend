const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Course } = require('../models/course');

router.post('/', (req, res) => {
    var course = new Course({
        course: req.body.course,
    duartion: req.body.duration,
    regfee: req.body.regfee,
    totfee: req.body.totfee,
    insfee: req.body.insfee,
    dayandtime: req.body.dayandtime,
    sdate: req.body.sdate,
    edate: req.body.edate
    });
    course.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in course details save : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/', (req, res) => {
    Course.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving course details : ' + JSON.stringify(err, undefined, 2)); }
    });
});



// router.get('/javaforbeginners', (req, res) => {
//     Course.find({course:"Java for Beginners"},(err, docs) => {
//         if (!err) { res.send(docs); }
//         else { console.log('Error in Retriving course details : ' + JSON.stringify(err, undefined, 2)); }
//     });
// });

// router.get('/phython', (req, res) => {
//     Course.find({course:"Phython"},(err, docs) => {
//         if (!err) { res.send(docs); }
//         else { console.log('Error in Retriving course details : ' + JSON.stringify(err, undefined, 2)); }
//     });
// });


// router.get('/c', (req, res) => {
//     Course.find({course:"C"},(err, docs) => {
//         if (!err) { res.send(docs); }
//         else { console.log('Error in Retriving course details : ' + JSON.stringify(err, undefined, 2)); }
//     });
// });

// router.get('/webdesignning', (req, res) => {
//     Course.find({course:"Web Designing"},(err, docs) => {
//         if (!err) { res.send(docs); }
//         else { console.log('Error in Retriving course details : ' + JSON.stringify(err, undefined, 2)); }
//     });
// });


// router.get('/graphic designning', (req, res) => {
//     Course.find({course:"Graphic Designing"},(err, docs) => {
//         if (!err) { res.send(docs); }
//         else { console.log('Error in Retriving course details : ' + JSON.stringify(err, undefined, 2)); }
//     });
// });


/*
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Marks.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Student details from marks : ' + JSON.stringify(err, undefined, 2)); }
    });
});*/

module.exports = router;