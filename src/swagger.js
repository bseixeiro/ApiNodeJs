import swaggerJSDoc from "swagger-jsdoc";

const swaggerDef = {
    openapi: "3.1.0",
    info: {
      title: "Arena Pokemon Api",
      version: "1.0.0",
      description:
        "This is an API about arenas of all game Pokemon"
    },
    servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server',
        },
      ],
    components:{
        securitySchemes: {
            BearerAuth:{
                type: "http",
                scheme: "bearer",
                in: "header",
            }
        }
    }
}

const options = {
    definition: swaggerDef,
    apis: ["./src/routes/*.js"]
}

const specs = swaggerJSDoc(options);

export default specs;