const router = require('express').Router()

/*
  code here
*/
const going = []
const notgoing = []

router.post("/going", (req, res, next) => {
  going.push(req.body)
  
  res.json({
    message: 'invite is going',
    user: req.body
  })
})

router.post("/notgoing", (req, res, next) => {
  notgoing.push(req.body)
 
  res.json({
    message: 'invite is not going',
    user: req.body
  })
})

router.get("/going", (req, res, next) => {
  res.json(going)
})

router.get("/notgoing", (req, res, next) => {
  res.json(notgoing)
})




module.exports = router