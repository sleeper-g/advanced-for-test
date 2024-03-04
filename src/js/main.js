export default function orderByProps(obj, array){
  const result = []
  const resSort = []
  console.log(array)
  for (const elem in obj){
    if (array.includes(elem)){
      result.push({key: elem, value: obj[elem]})
    }
    else {
      resSort.push({key: elem, value: obj[elem]})
      resSort.sort( (a,b) => {
        if (a.key > b.key){
          return 0
        } 
        else {
          return -1
        }
      })
    }
  }
  return result.concat(resSort)    
}
