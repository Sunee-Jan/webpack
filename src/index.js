import x from "./test.js";
console.log(x);

// rules: [
//     {
//       test: /\.scss$/i,
//       use: [
//         "style-loader",
//         "css-loader",
//         {
//           loader: "sass-loader",
//           options: {
//             implementation: require("dart-sass"),
//           },
//         },
//       ],
//     },
//     {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//   ]
