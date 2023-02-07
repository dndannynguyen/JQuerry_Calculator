function addFn() {
    console.log("addFn called")
    x = jQuery('#operand1').val();
    y = jQuery('#operand2').val();
    console.log(x);
    console.log(y);
    jQuery('#result').html(Number(x) + Number(y));
}
function subFn() {
    console.log("addFn called")
    x = jQuery('#operand1').val();
    y = jQuery('#operand2').val();
    console.log(x);
    console.log(y);
    jQuery('#result').html(Number(x) - Number(y));
}
function mulFn() {
    console.log("addFn called")
    x = jQuery('#operand1').val();
    y = jQuery('#operand2').val();
    console.log(x);
    console.log(y);
    jQuery('#result').html(Number(x) * Number(y));
}
function divFn() {
    console.log("addFn called")
    x = jQuery('#operand1').val();
    y = jQuery('#operand2').val();
    console.log(x);
    console.log(y);
    jQuery('#result').html(Number(x) / Number(y));
}

/* function DrawTriangle(n) {
    for (i=0; i<=n; i++) {
        row = ""
        for (k=0; k<i; k++) {
            row += "*"
        }
    }
    document.write(row)
}
function printFn() {
    jQuery('#stars').html(DrawTriangle(result));

} */


function setup() {
    console.log('setup');
    $('#addBtn').click(addFn);
    $('#subBtn').click(subFn);
    $('#mulBtn').click(mulFn);
    $('#divBtn').click(divFn);
   /* $('#drawBtn').click(printFn); */
}
  
jQuery(document).ready(setup)
