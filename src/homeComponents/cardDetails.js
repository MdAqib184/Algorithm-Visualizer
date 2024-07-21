import sort1 from "./images/sort1.png";
import sort from "./images/sort.png";
import binSearch from "./images/binSearch.png";
import graph from "./images/pathfinder.png"
import queen from "./images/queen.png"
// import prime from "./images/prime.jpeg"
import seive from "./images/seive.jpeg"

export function getDetails() {
    return [
        {
            id: 1,
            title: "Sorting Algorithm",
            description: "Compare different sorting algorithms",
            route: "/sort",
            img: sort1
        },
        {
            id: 2,
            title: "Recursive Sorting",
            description: "Compare different recursive sorting algorithms",
            route: "/recursivesort",
            img: sort
        },
        {
            id: 3,
            title: "Binary Search",
            description: "Binary search is an efficient algorithm for finding an item from a sorted list of item",
            route: "/binarysearch",
            img: binSearch
        },
        {
            id: 4,
            title: "Pathfinder",
            description: "Visualize graph algorithms like dijkstra, BFS, DFS",
            route: "/pathfinder",
            img: graph
        },
        {
            id:5,
            title:"N Queen",
            description:"The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
            route:"/nqueen",
            img:queen
        },
        {
            id:6,
            title:"Prime Numbers",
            description:"Visualization of how Seive is better than brute force",
            route:"/prime",
            //img:prime
            img:seive
        },

    ]
}
