~~~js
문자열 정수로 바꾸기
function solution(s) {
    return Number(s);
}
~~~

~~~ js
핸드폰 번호 가리기
function solution(num) {
    let result = '';
    
    let password = '';
    let answer = ''
    
    for(let i = 0; i < num.length; i++) {
        if(i < num.length - 4) {
            password += '*';
        } else {cd
            answer += num[i];
        }
    }
    return password + answer;
}
~~~

~~~js
같은 숫자는 싫어
function solution(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i])
        }
    }
    
    return result;
} 
~~~