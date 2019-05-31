# Contribution Guidelines

Please note that this project is released with a
[Contributor Code of Conduct](code-of-conduct.md). By participating in this
project you agree to abide by its terms.

---

Ensure your pull request adheres to the following guidelines:

- Make sure you take care of this
- And this as well
- And don't forget to check this

Thank you for your suggestions!


## Getting Started

```
docker build . -t knowledge-center
docker run -d -h docs_center `
    -v ./docs:/app/docs  -v ./website:/app/website  `
    --restart always -p 3000:3000 knowledge-center

-v ./docs:/app/docs  -v ./website:/app/website  --restart always -p 3000:3000 knowledge-center
```