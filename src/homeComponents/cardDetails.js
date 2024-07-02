import sort1 from "./images/sort1.png";
import sort from "./images/sort.png";
import binSearch from "./images/binSearch.png";
import graph from "./images/graph.png"

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

    ]
}
