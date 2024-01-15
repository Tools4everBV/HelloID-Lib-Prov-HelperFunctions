function ordinal(n) {
  let s = ["th", "st", "nd", "rd"];
  let v = n%100;
  return n + (s[(v-20)%10] || s[v] || s[0]);
}
