function solve(obj) {

    let methods = [`GET`, `POST`, `DELETE`, `CONNECT`];
    let versions = [`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`];


    if(obj.method.includes(methods)) {
        console.log(`right - method`);
    }else{
        console.log(`wrong - method`);
    }
}
solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});