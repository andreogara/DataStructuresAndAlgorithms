Thanks to Andreas Hultgren for pointers 
//implement heap
function PriorityQueue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.isEmpty = isEmpty;
}

function sorter(a, b) {
    return a.priority > b.priority;
}
function enqueue(priority, data) {
    this.dataStore.push({priority: priority, data: data});
    this.dataStore.sort(sorter);
}
function dequeue() {
    return this.dataStore.shift().data;
}
function isEmpty() {
    return this.dataStore.length < 1;
}

//graph constructor
function Graph() {
    this.vertices = [];
    this.addVertex = addVertex;
    this.shortestPath = shortestPath;
}

function addVertex(name, edges) {
    this.vertices[name] = edges;
}
function shortestPath(start, finish) {
    var priorityQueue = new PriorityQueue();
    var distances = {}, previous = {}, path = [];
    for (var vertex in this.vertices) {
        if (vertex == start) {
            distances[vertex] = 0;
            priorityQueue.enqueue(0, vertex);
        }
        else {
            distances[vertex] = Infinity;
            priorityQueue.enqueue(Infinity, vertex);
        }
        previous[vertex] = null;
    }
    while (!priorityQueue.isEmpty()) {
        var smallest = priorityQueue.dequeue();
        if (smallest == finish) {
            while (previous[smallest]) {
                path.push(smallest);
                smallest = previous[smallest];
            }
            break;
        }
        if (!smallest || distances[smallest] == Infinity) {
            continue;
        }
        for (var neighbor in this.vertices[smallest]) {
            var alt = distances[smallest] + this.vertices[smallest][neighbor];
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
                previous[neighbor] = smallest;
            }
            priorityQueue.enqueue(alt, neighbor);
        }
    }
    return path;
}

var graphite = new Graph();

graphite.addVertex('A', {B: 7, C: 9, D: 14});
graphite.addVertex('B', {A: 7, C: 10, E: 15});
graphite.addVertex('C', {A: 9, B: 10, D: 2, E: 11});
graphite.addVertex('D', {A: 14, C: 2, F: 9});
graphite.addVertex('E', {B: 15, C: 11, F: 6});
graphite.addVertex('F', {D: 9, E: 6});

console.log(graphite.shortestPath('A', 'F').concat('A').reverse());






