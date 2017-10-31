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

function bfs(G, v) {
  const Q = []
  const marked = new Set()
  const exploredEdges = []
  
  marked.add(v)
  Q.unshift(v)
  
  while (Q.length) {
    const v = Q.shift()

    for (let w of G.edges[v]) {
      if (!marked.has(w)) {
        exploredEdges.push([v, w, 'search'])
        Q.unshift(w)
        marked.add(w)
      } else if (!explored(exploredEdges, v, w)) {
        exploredEdges.push([v, w, 'return'])
      }
    }
  }
  
  return exploredEdges
}

console.log(
  bfs(G, 'A')
  // .filter(([_a, _b, c]) => c === 'search')
  .join('\n')
)
