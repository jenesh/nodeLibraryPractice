const express = require('express');
const Joi = require('joi'); // Used for input validation
const app = new express();

app.use(express.json());

const courses = [{
        id: 1,
        name: 'HTML'
    },
    {
        id: 2,
        name: 'CSS'
    },
    {
        id: 3,
        name: 'JavaScript'
    }
]

app.get('/', (req, res) => {
    res.send('Working')
})

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.post('/api/courses', (req, res) => {
    // if (!req.body.name || req.body.name.length < 3) {
    //     res.status(400).send('Name is required and minimum 3 characters');
    //     return;
    // }

    // const schema = {
    //     name: Joi.string().min(3).required() // Define body schema for Joi to validate
    // }

    // const result = Joi.validate(req.body, schema);

    // if (result.error) {
    //     res.status(400).send(result.error.details[0].message);
    // }

    const {error} = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.status(200).send({
        status: 'success',
        course
    });
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(ele => {
        return ele.id === parseInt(req.params.id)
    })
    if (course) {
        return res.status(200).send(course);
    } else {
        return res.status(404).send('404 Error')
    }
})

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(ele => ele.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('404 Error')

    // const result = validateCourse(res.body);
    const {
        error
    } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course)

})

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(ele => ele.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('404 Error')

    const index = courses.indexOf(course)
    courses.splice(index, 1)

    res.send(course);
})



const validateCourse = course => {
    const schema = {
        name: Joi.string().min(3).required() // Define body schema for Joi to validate
    }

    return Joi.validate(course, schema);
}



const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})