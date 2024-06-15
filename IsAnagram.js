
let isAnagram = (s,t) => {
  return s.split("").reverse().join("") === t.split("").reverse().join("")
}
