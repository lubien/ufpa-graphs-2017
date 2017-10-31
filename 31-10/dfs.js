function explored(exploredEdges, v, w) {
  return exploredEdges.find(([a, b]) =>
    (a === v && b === w) ||
    (a === w && b === v)
  )
}

const N = ['A', 'B', 'C', 'D', 'E', 'F']
const M =
{ 'A': ['B', 'C']
, 'B': ['A', 'C', 'D', 'F']
, 'C': ['A', 'B', 'D', 'E']
, 'D': ['B', 'C', 'E', 'F']
, 'E': ['C', 'D', 'F']
, 'F': ['B', 'D', 'E']
}

const G = {vertices: N, edges: M}

function dfs(G, v, marked = new Set(), exploredEdges = []) {
  marked.add(v)
  
  for (let w of G.edges[v]) {
    if (!marked.has(w)) {
      marked.add(w)
      exploredEdges.push([v, w, 'search'])
      dfs(G, w, marked, exploredEdges)
    } else if (!explored(exploredEdges, v, w)) {
      exploredEdges.push([v, w, 'return'])
    }
  }
  
  return exploredEdges
}

console.log(dfs(G, 'A').join('\n'))
