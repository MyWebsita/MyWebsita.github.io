for ( var i = 1; i<=10; i++) {
  var etoile = ""
  for ( var j=1; j<=i; j++)
  etoile = etoile + "*"
  console.log(etoile)
}
for (var i = 1; i <=10; i++) {
  var etoile = ""
  for ( var j=10; j>=i; j--)
  etoile = etoile + "*"
  console.log(etoile)
}
for ( var i = 1; i<=10; i++) {
  var etoile = ""
  var space = ""
  for ( var j = 10; j>=i; j--) {
  etoile = etoile + "*"
  }
  for ( var k = 1; k<=i-1; k++) {
    space = space + " "
  }
  console.log(space + etoile)
}
for ( var i = 1; i<=10; i++) {
  var etoile = ""
  var space = ""
  for ( var j = 1; j<=i; j++) {
    etoile = etoile + "*"
  }
  for ( var k = 9; k>=i-1; k--) {
    space = space + " "
  }
  console.log(space + etoile)
}
 
