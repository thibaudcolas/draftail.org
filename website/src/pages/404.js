import Layout from "@theme/Layout"
import React from "react"

export default function NotFound() {
  return (
    <Layout title="Page not found">
      <div className="error-page">
        <div className="error-message">
          <div className="error-message-container container">
            <span>404</span>
            <p>Page Not Found.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
