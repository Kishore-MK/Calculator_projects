function num(a) {
    var v = document.getElementById("lower");
    v.value += a;
  }
  function equal() {
    var n1 = document.getElementById("lower").value;
    if (n1 != "") {
      try {
        var n2 = eval(n1);
        document.getElementById("upper").value = n1;
        document.getElementById("lower").value = n2;
      } catch (e) {
        document.getElementById("lower").value = "ERROR";
      }
    } else {
      document.getElementById("lower").value = "";
    }
  }
  function ac() {
    document.getElementById("upper").value = "";
    document.getElementById("lower").value = "";
  }
  function del() {
    var b = document.getElementById("lower");
    b.value = b.value.slice(0, -1);
  }
  