# Bit-Verify

This is a quick javascript program that will verify a message signed with a bitcoin address.

## Example Message

message: `hello!`
address: `14MjbiFnhpc54px1ZtqHxAF6GWpjAjbX78`
signature: `ICN7nyMxLjjh6hcoDjv7HSeN2O3RlPoXF9JeoKLQkJ9WQdpKOOnNdvlWuDNCCdl8BZv6e7LPEmW0FJrU+/zQkcA=`

## Future Development

* Style it with CSS
* Optionally hit an API and print the amount of bitcoin stored in the address. This should
  be turned off by default.
* Optionally hit an API and print that same amount in dollars. This should be turned off
  by default.
* Highlight a field if it is malformed
* Save the data in GET params of the URL, so it's easier to share a link.

## Deploy

```
$ npm run build
$ npm run deploy
```

## Contributions

PRs welcome! I literally made this with the arbitrary restriction that I would only spend
my lunch hour on it. I guess I could work on it more, later. As a general guideline, use
public libraries wherever possible; keep this project slim.
