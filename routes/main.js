const express = require('express');
const router = express.Router();
const fs = require('fs');
//create a default route
router.get('/index', function(req, res) {
    res.render('index', {name: 'Joshua Hunter', 
                        faves: ['raindrops', 'roses', 'whiskers on kittens'],
                        color: 'blue'  })
});
// router.get('/', function(req, res) {
//     res.render('index', {name: 'Sterling Archer', 
//                         faves: ['raindrops', 'roses', 'whiskers on kittens'],
//                         color: 'blue'  })

// });

router.get('/contact', function(req, res) {
    res.render('contact', {linkedIn: 'http://linkedin.com/in/joshua-hunter-2a4442185',
                            phone: '360.265.7644',
                            github: 'http://https://github.com/hunterhanna2010'
                            })
})

router.get('/skills', function(req, res) {
    res.render('skills', {skills:[
                'HTML coding',
                'CSS rendering',
                'Javascript functioning',
                'Node front/back serving',
                'Express realtiming'
    ]})
})

module.exports = router;