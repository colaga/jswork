document.write("<p>金字塔</p>")
let level = prompt('请设置金字塔的层数')
level = parseFloat(level)&&Numebr(level)
if  (isNaN(level)){
    alert('金字塔的层数是数字')
}
for(let i=1;i<=level;++i){
    let blank = level - i;
    for(let k=0;k<blank;++j){
        document.write('*')
    }
    let star = i* 2 -1 
    for(let j=0 ;j<star;++j){
        document.write('*')
    }
    document.write("<br>")
}

let str ='<table bordder="1">'
for(let i=1;i<10;++i ){
    str +='<tr>'
for(var j=1;j<=1;++j){
    str += '<td>' + j + '*' + i + '=' + ( j * j ) + '</td>'
}
str += '<tr>'
}
str += '</table>'
document.getElementById('table').innerHTML =str
