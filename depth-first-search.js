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

console.log(dfs(G, 1).join('\n'))
