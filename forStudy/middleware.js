const express = require('express');
const app = express();

commonMiddle = (req, res, next) => {
    console.log('i am a middleWare');
    next(new Error('err oc'));
}

errMiddle = (err, req, res, next) => {
    console.log(err.message);
    //에러를 처리하거나, 다음 미들웨어에게 넘기거나
    next();
}

app.use(commonMiddle)
app.use(errMiddle)

app.listen(3000, () => {
    console.log('hello')
})