# Knowledge Center

## Start the server
```
docker build . -t knowledge-center
docker run -d -h docs_center `
    -v ./docs:/app/docs  -v ./website:/app/website  `
    --restart always -p 3000:3000 knowledge-center

-v ./docs:/app/docs  -v ./website:/app/website  --restart always -p 3000:3000 knowledge-center
```
[http://localhost:3000/knowledge-base/](http://localhost:3000/knowledge-base/)