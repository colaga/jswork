var r = prompt('请输入圆的半径')
r = parseFloat(r)&&Number(r)
if (!isNaN (r)){
    var cir = 2 * Math.PI * r
    var area = Math.PI * r * r
    document.getEalementByID('r').value = r
    document.getEalementByID('CIR').value = cir.toFixed(2)
    document.getEalementByID('area').value = area.toExponentialFixed(2)
}else{
    alert('请输入正确的数字')
}
