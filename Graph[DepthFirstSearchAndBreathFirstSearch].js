//Graph Constructor Class
/*@param v = vertices 
*/
function Graph(v){
    this.marked = [];
    this.edgeTo = [];
    this.edges = 0;
    this.vertices = v;
    this.adj = [];
    for(var i = 0; i < this.vertices; i++){
        this.adj[i] = [];
    }
    for(var j = 0; j < this.vertices; j++){
        this.marked[j] = false;
    }
}

Graph.prototype.addEdge = function(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

Graph.prototype.show = function(){
    for (var i = 0; i < this.vertices; i++){
        console.log(i+ "--->");
        for (var j = 0; j < this.vertices; j++){
            if (this.adj[i][j] != undefined){
                console.log(this.adj[i][j]);
            }
        }
    }
}

Graph.prototype.depthFirstSearch = function(v){
    this.marked[v] = true;
    if(this.adj[v] != undefined){
        console.log("Visited "+v);
        for (var i = 0; i < this.adj[v].length; i++){
            if(!this.marked[this.adj[v][i]]){
                this.depthFirstSearch(this.adj[v][i]);
            }
        }
    }
}

Graph.prototype.BreathFirstSearch = function(v){
    var currentVertice = null;
    var queue = [];
    this.marked[v] = true;
    queue.push(v);
    while(queue.length > 0){
        var w = queue.shift();
        console.log("Marked "+w +" With Children");
        for (var i = 0; i < this.adj[w].length; i++){
            currentVertice = this.adj[w][i];
            if(!this.marked[currentVertice]){
                console.log(currentVertice);
                this.edgeTo[currentVertice] = w;
                this.marked[currentVertice] = true;
                queue.push(currentVertice);
            }
        }
    }
}
