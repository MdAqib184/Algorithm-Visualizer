import sort1 from "./images/sort1.png";
import sort from "./images/sort.png";
export function getDetails(){
   return [
       {
           id:1,
           title:"Sorting Algorithm",
           description:"Compare different sorting algorithms",
           route:"/sort",
           img:sort1
       },
       {
           id:2,
           title:"Recursive Sorting",
           description:"Compare different recursive sorting algorithms",
           route:"/recursivesort",
           img:sort
       },

   ]
}
