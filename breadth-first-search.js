function explored(exploredEdges, v, w) {
  return exploredEdges.find(([a, b]) =>
    (a === v && b === w) ||
    (a === w && b === v)
  )
}

const N = [1, 2, 3, 4, 5, 6, 7]
const M = 
{ 1: [2, 3]
, 2: [1, 3]
, 3: [1, 2, 4, 5, 6, 7]
, 4: [3, 5]
, 5: [3, 4]
, 6: [3]
, 7: [3]
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
  bfs(G, 1)
  // .filter(([_a, _b, c]) => c === 'search')
  .join('\n')
)
