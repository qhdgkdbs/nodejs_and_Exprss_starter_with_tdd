// const fs = require('fs');

// // const data = fs.readFileSync('./data.txt','utf-8');
// const data = fs.readFile('./data.txt','utf-8', function(err,data){
//     console.log(data);
// });


const http = require('http');
//모듈 호출

const hostname = '127.0.0.1';
//내 컴퓨터
const port = 3000;
//포트 - 클라이언트와 통신을 할때 이 포트로


const server = http.createServer((req, res) => {

  if(req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  }else if(req.url === '/users'){
    res.statusCode = 200;
    res.setHeader('Contents-type', ' text/plain');
    res.end('User list\n')
  }else{
      res.statusCode = 404;
    //   res.setHeader 
    res.end('not Found\n');
  }

  
}
//이 콜백함수는 클라이언트가 접속했을 때 실행 
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  //클라이언트 접속 완료후 실행
});

//listen은 서버를 요청 대기 상태로 만들어줌
