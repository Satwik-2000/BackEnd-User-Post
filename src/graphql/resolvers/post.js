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
    },
    Mutation: {
        createNewPost: async (_, args, context, info) => {
            console.log("_", _);
            console.log("ARGS", args);
            console.log("INFO", info);
            return {
                title: "Hello World",
                content: "Welcome to Kredent InfoEdge."
            }
        }
    }
}