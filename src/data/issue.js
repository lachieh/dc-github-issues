export default {
  "url": "https://api.github.com/repos/facebook/create-react-app/issues/9167",
  "repository_url": "https://api.github.com/repos/facebook/create-react-app",
  "labels_url": "https://api.github.com/repos/facebook/create-react-app/issues/9167/labels{/name}",
  "comments_url": "https://api.github.com/repos/facebook/create-react-app/issues/9167/comments",
  "events_url": "https://api.github.com/repos/facebook/create-react-app/issues/9167/events",
  "html_url": "https://github.com/facebook/create-react-app/issues/9167",
  "id": 639600044,
  "node_id": "MDU6SXNzdWU2Mzk2MDAwNDQ=",
  "number": 9167,
  "title": "SVG files imported as React components should not end up in build directory",
  "user": {
    "login": "dominique-mueller",
    "id": 7271961,
    "node_id": "MDQ6VXNlcjcyNzE5NjE=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/7271961?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/dominique-mueller",
    "html_url": "https://github.com/dominique-mueller",
    "followers_url": "https://api.github.com/users/dominique-mueller/followers",
    "following_url": "https://api.github.com/users/dominique-mueller/following{/other_user}",
    "gists_url": "https://api.github.com/users/dominique-mueller/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/dominique-mueller/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/dominique-mueller/subscriptions",
    "organizations_url": "https://api.github.com/users/dominique-mueller/orgs",
    "repos_url": "https://api.github.com/users/dominique-mueller/repos",
    "events_url": "https://api.github.com/users/dominique-mueller/events{/privacy}",
    "received_events_url": "https://api.github.com/users/dominique-mueller/received_events",
    "type": "User",
    "site_admin": false
  },
  "labels": [
    {
      "id": 1494610677,
      "node_id": "MDU6TGFiZWwxNDk0NjEwNjc3",
      "url": "https://api.github.com/repos/facebook/create-react-app/labels/issue:%20bug%20report",
      "name": "issue: bug report",
      "color": "f49118",
      "default": false,
      "description": ""
    },
    {
      "id": 1467678098,
      "node_id": "MDU6TGFiZWwxNDY3Njc4MDk4",
      "url": "https://api.github.com/repos/facebook/create-react-app/labels/needs%20triage",
      "name": "needs triage",
      "color": "b5274d",
      "default": false,
      "description": ""
    }
  ],
  "state": "open",
  "locked": false,
  "assignee": null,
  "assignees": [

  ],
  "milestone": null,
  "comments": 0,
  "created_at": "2020-06-16T11:47:19Z",
  "updated_at": "2020-06-16T11:47:19Z",
  "closed_at": null,
  "author_association": "NONE",
  "active_lock_reason": null,
  "body": "### Intro\r\n\r\nSVG files can be imported as React component, and thus inlined into the bundle, using the following syntax:\r\n\r\n```\r\nimport { ReactComponent as MySvg } from '../../assets/icons/my-svg.svg'\r\n```\r\n\r\n### Actual behaviour\r\n\r\nAlthough inlined, the original SVG files will still be processed (by Webpack?) and end up\r\n\r\n- in the `build/static/media` folder\r\n- in the `asset-manifest.json` file\r\n\r\nOverall, this isn't critical - it only means that unused files end up in the `build` folder. Nevertheless, it's a very confusing behaviour, developers might assume those files are being used or even that SVGs imported the way described above are not being inlined.\r\n\r\n### Expected behaviour\r\n\r\nThe expected behaviour is that inlined resources do not end up in the build folder, resulting in a smaller and clean `build` folder.\r\n\r\n### Related\r\n\r\n- Follow up on https://github.com/facebook/create-react-app/issues/7941 which was marked as stale\r\n- Related to https://github.com/facebook/create-react-app/issues/9009",
  "closed_by": null
}