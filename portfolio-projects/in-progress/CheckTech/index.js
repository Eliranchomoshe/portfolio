var phrase = "abcdefgh";
var blockIdenitifier = "myCanvas";
var total = phrase.length;


//function intended to generate array visual representation
function arrayBlockGenerator(blockID, displayText) {
  var canvas = document.getElementById(blockID);
  var ctx = canvas.getContext("2d");
  ctx.font = "130px Arial";
  ctx.fillText(displayText, canvas.width/2 - 25, canvas.height/2 + 45);
}

function arrayTextGenerator(phrase) {
  // create array block - taken care of by css
  var arrayData = [];
  var initialText = phrase; // 35

  for (var i = 0 ; i < initialText.length; i++) {
      var upperBound = i + 1;
      var lowerBound = i;
      arrayData[i] = initialText.slice(lowerBound ,upperBound);
      arrayBlockGenerator(blockIdenitifier + i, arrayData[i]);
  }
}

function blockGenerator() {
  var block = document.createElement('canvas');
  block.classList.add("arrayStructure");
  block.style.width = "83.3px";
  block.style.height = "96px";
  block.style.text = "1";




  var body = document.getElementById("myCanvas7");
  body.style.background = "#FFFFFF";
  body.appendChild(block);

}


arrayTextGenerator(phrase);

blockGenerator();








// arrayBlockGenerator("myCanvas2", arrayData[1]);
// arrayBlockGenerator("myCanvas3", arrayData[2]);
// arrayBlockGenerator("myCanvas4", arrayData[3]);
// arrayBlockGenerator("myCanvas5", arrayData[4]);
// arrayBlockGenerator("myCanvas6", arrayData[5]);
// arrayBlockGenerator("myCanvas7", arrayData[6]);
// arrayBlockGenerator("myCanvas8", arrayData[7]);



function clean(node) {
    for (var n = 0; n < node.childNodes.length; n ++) {
        var child = node.childNodes[n];
        if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))) {
            node.removeChild(child);
            n --;
        } else if(child.nodeType === 1) {
            clean(child);
        }
    }
}
clean(document);
