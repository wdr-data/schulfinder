const path = require("path");
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  console.log("hello gatsby", stage);
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.csv$/,
          loader: "csv-loader",
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true
          }
        }
      ]
    }
  });
};
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      query MyQuery {
        file(
          sourceInstanceName: { eq: "data" }
          name: { eq: "schulfinder_records" }
        ) {
          sourceInstanceName
          name
          childrenSchulfinderRecordsJson {
            num
          }
        }
      }
    `
  );
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // Create pages for each markdown file.
  const schoolTemplate = path.resolve(`src/templates/school.jsx`);
  result.data.file.childrenSchulfinderRecordsJson.forEach(
    ({ num: schoolnumber }) => {
      const path = `school/${schoolnumber}`;
      createPage({
        path,
        component: schoolTemplate,
        // In your blog post template's graphql query, you can use path
        // as a GraphQL variable to query for data from the markdown file.
        context: {
          schoolnumber
        }
      });
    }
  );
};
