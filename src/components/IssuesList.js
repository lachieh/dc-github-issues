import React, { useState, useEffect } from 'react'
import Issue from './Issue';

import './IssuesList.css';

function IssuesList() {
  const [ issues, setIssues ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/create-react-app/issues')
      .then(res => res.json())
      .then(data => {
        setIssues(data ? data : [])
        setIsLoading(false);
      })
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="IssuesList">
      {issues.map(issue => <Issue issue={issue} key={issue.id} />)}
    </div>
  )
}

export default IssuesList;