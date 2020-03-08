//이름에 .spec.이 있다면 테스트 코드일 확율이 높음
const utils = require('./utils')
const should = require('should')

describe('utils.js 모듈의 capitalize() 함수는', () => {
    it('문자열의 첫번째 문자를 대분자로 변환한다', () => {
        //...
        const result = utils.capitalize('hello');
        result.should.be.equal('Hello')
    })
})
