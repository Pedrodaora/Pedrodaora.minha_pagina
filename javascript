<!Doctype html>
<html>
<body>
<h1>JavaScript</h1>
<button type="button"
anclick="document.getElementById('demo').immerHTML=Date()">
botão da data e hora</button>
<p id="demo">A data aparecerá aqui</p>

<p id="demo2"></p>

<script>
document.getElementById("demo2").innerHTML = "HelloJava";>
</script>

<h1>JavaScript3</h1>

<p>Alterando conteúdo:</p>

<button type="button" onclick="myFunction()">Click Me!</button>

<p id="demo2">Conteúdo</p>

<script>
function myFunction() {
  document.getElementById("demo2").innerHTML = "Alterando";
}
</script>

</body>
</html>
