const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const n = 100;
svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("y", (d) => 20 * d)
  .attr("width", width)
  .attr("height", 10)
  .attr("mask", "url(#mask-1)");

svg
  .append("g")
  .selectAll("rect")
  .data(d3.range(n))
  .join("rect")
  .attr("x", (d) => 20 * d)
  .attr("width", 10)
  .attr("height", height)
  .attr("mask", "url(#mask-2)");

const renderMask = (selection, id, inverted) => {
  const mask = selection.append("mask").attr("id", id);

  mask
    .append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", inverted ? "black" : "white");

  // const g = mask
  //   .append("g")
  //   .attr("transform", `translate(${width / 2}, ${height / 2})`);

  mask
    .selectAll("g")
    .data(d3.range(d3.symbolsFill.length))
    .join((enter) =>
      enter
        .append("g")
        .attr("transform", (d) => `translate(${d * 150 + 100}, ${height / 2})`)
        .append("path")
        .attr("d", (d) => d3.symbol(d3.symbolsFill[d], 10000)())
        .attr("fill", inverted ? "white" : "black")
    );

  // .append("path")
  // .attr("d", d3.symbol(d3.symbolsFill[4], 100000))
  // .attr("fill", inverted ? "white" : "black");
};
// renderMask(svg, "mask-1", false);
// renderMask(svg, "mask-2", true);

svg.call(renderMask, "mask-1", false).call(renderMask, "mask-2", true);
