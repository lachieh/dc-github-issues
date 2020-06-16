import React, { useState, useEffect } from 'react'

export default function IssueDetail(props) {
  const [ loading, setLoading ] = useState(true);
  const [ detail, setDetail ] = useState({});

  useEffect(() => {
    const { issueNumber } = props;
    fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`)
      .then(res => res.json())
      .then(data => {
        setDetail(data);
        setLoading(false);
      })
  })
  
  if (loading) {
    return <span>Loading Issue...</span>
  }

  const { title, number } = detail;

  return (
    <div>
      <h1>{ title } <span style={{ color: '#ccc'}}>#{ number }</span></h1>
    </div>
  )
}
