export default {
    Query: {
        getAllPosts:() => {
            return [{
                title: "Hello World",
                content: "This is a sample content"
            },{
                title: "Hello Satwik",
                content: "Satwik Sample Content"
            }
        ]
        }
    }
}