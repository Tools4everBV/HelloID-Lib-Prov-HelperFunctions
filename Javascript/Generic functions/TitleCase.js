function titleCase(str) {
  return str.toLowerCase().replace(/(?:^|[\s-/]|[\s'])\w/g, function (match) {
        return match.toUpperCase();
    });
}