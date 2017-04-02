(function(){
    var operator = {
        "+" : function(count, step) {
            return count*step;
        },
        "x" : function(count, step) {
            return count*step;
        },
        "^" : function(count, step) {
            return Math.pow(step,count);
        }
    }
    var updateStage = function(node, counts, magnitude, operation){
        d3.select(node).html(counts);
        d3.select(node.parentNode).select('.magnitude').html(magnitude);
        d3.select(node.parentNode).select('.operation').html(operation);
    }
    var start;
    var dragA = d3.drag()
    .on("start", function() {
        start = d3.event.y;
    })
    .on("drag", function(){
        l = Math.floor((start - d3.event.y)/10);
        counts = Math.max(parseInt(this.innerHTML) + l, 1);
        magnitude = operator["+"](counts, 1);
        operation = new Array(counts + 1).join("+1");
        updateStage(this, counts, magnitude, operation);
    });
    var dragM = d3.drag()
    .on("start", function() {
        start = d3.event.y;
    })
    .on("drag", function(){
        l = Math.floor((start - d3.event.y)/10);
        counts = Math.max(parseInt(this.innerHTML) + l, 1);
        step = parseInt(d3.select(this.parentNode)
                 .select('.step')
                 .html());
        magnitude = operator["x"](counts, step);
        operation = new Array(counts + 1).join("+"+step.toString());
        updateStage(this, counts, magnitude, operation);
    });
    var dragE = d3.drag()
    .on("start", function() {
        start = d3.event.y;
    })
    .on("drag", function(){
        l = Math.floor((start - d3.event.y)/10);
        counts = Math.max(parseInt(this.innerHTML) + l, 1);
        step = parseInt(d3.select(this.parentNode)
                 .select('.step')
                 .html());
        magnitude = operator["^"](counts, step);
        operation = new Array(counts + 1).join("x"+step.toString())
         updateStage(this, counts, magnitude, operation);
    });
    d3
    .selectAll('.addition .counts')
    .call(dragA);
    d3
    .selectAll('.multiplication .counts')
    .call(dragM);
    d3
    .selectAll('.exponentiation .counts')
    .call(dragE);

})();