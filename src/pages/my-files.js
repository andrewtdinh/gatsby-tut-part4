import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>Body</th>
              <th>File Path</th>
              <th>Time To Read</th>
            </tr>
          </thead>
          <tbody>
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.rawMarkdownBody}</td>
                <td>{node.fileAbsolutePath}</td>
                <td>{node.timeToRead}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          rawMarkdownBody
          fileAbsolutePath
          timeToRead
        }
      }
    }
  }
`
